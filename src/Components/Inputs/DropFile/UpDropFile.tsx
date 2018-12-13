import * as React from 'react';
import { style } from 'typestyle/lib';
import * as classnames from 'classnames';
import UpDefaultTheme, { WithThemeProps, withTheme } from '../../../Common/theming';
import { isFunction } from 'util';

import Dropzone from 'react-dropzone';

import { NestedCSSProperties } from 'typestyle/lib/types';

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'

import { openFileAsBase64, getMimeTypeFromBase64, isEmpty, on, off } from '../../../Common/utils';

import UpNotification from '../../Display/Notification';
import UpParagraph from '../../Display/Paragraph';
import UpTooltip from '../../Display/Tooltip';
import UpModal from '../../Containers/Modal/UpModal';
import UpLink from '../../Display/Link';
import UpPDFViewer from '../../Display/PDFViewer/UpPDFViewer';
import UpButton from '../Button';
import UpLabel from '../../Display/Label';
import UpSvgIcon from '../../Display/SvgIcon';
import { eventFactory } from '../../../Common/utils/eventListener';

export interface IFile {
    type?: IFileType;
    name?: string;
    value?: string;
    mime_type?: string;
    size_kb?: number;
    import_date?: Date;
    comment?: string;
    value_base64?: string | ArrayBuffer;
    id?: string;
    version?: string;
    width?: number;
    height?: number;
  }
  
  export interface IFileType {
    id?: string;
    code?: string;
    label?: string;
    description?: string;
    version?: string;
  }

interface UpDropFileProps extends WithThemeProps {
  label?: string;
  name: string;
  required?: boolean;
  allowedExtensions?: string[];
  ratio?: number;
  enableCrop?: boolean;
  onMouseOver?: any;
  onMouseOut?: any;
  onChange?: (event: React.ChangeEvent<any>, value: IFile) => void;
  error?: any;
  touched?: boolean;
  value?: IFile;
  disabled?: boolean;
  maxImgWidth? : number,
  loadFile?:(id:string) => Promise<IFile>;
  source?: () => Promise<IFile>;
}

const boxUpload = style({
  border: 'solid 1px #f39100',
  borderStyle: 'dashed',
});

const boxUploaded = style({
  border: 'solid 1px #5cb85c',
  borderStyle: 'solid',
});

const Base: NestedCSSProperties = {
  fontFamily: 'Roboto',
  textAlign: 'center',
  cursor: 'pointer',
  width: '100%',
  borderRadius: '4px',
  minHeight: '64px',
  height: 'auto',
  marginTop: '50px',
  position: 'relative',
};

const BaseStyle = bgSrc => style({
  ...Base,
  maxWidth: '100%',
  backgroundImage: `url(${bgSrc})`,
  backgroundRepeat: 'no-repeat',
});

const FileStyle = style({
  color: '#7a756f',
  textAlign: 'center',
  display: 'inline-block',
  height: '100%',
  width: '100%',
  marginTop: '16px',
});

const ExtensionsStyle = (props: WithThemeProps) => style({
  fontSize: '11px',
  fontFamily: 'Roboto',
  color: props.theme.colorMap.darkGray5,
});

const wrapperActionStyle = (props: WithThemeProps) =>  style({
  position: 'absolute',
  top: '1px',
  right: '1px',
  borderRadius: '4px',
  borderLeft: `1px solid ${props.theme.colorMap.primary}`,
  borderBottom: `1px solid ${props.theme.colorMap.primary}`,
  borderTopLeftRadius: '0px',
  borderTopRightRadius: '0px',
  borderBottomRightRadius: '0px',
  background: props.theme.colorMap.white,
  $nest: {
    span: {
      marginRight: '4px',
    },
  },
});

const wrapperErrorsStyle = style({
  margin: '18px 9px',
});

const wrapperFileNameStyle = (props: WithThemeProps) => style({
  padding: '4px',
  borderRadius: '4px',
  borderLeft: `1px solid ${props.theme.colorMap.primary}`,
  borderBottom: `1px solid ${props.theme.colorMap.primary}`,
  borderRight: `1px solid ${props.theme.colorMap.primary}`,
  borderTopLeftRadius: '0px',
  borderTopRightRadius: '0px',
  background: props.theme.colorMap.white,
  $nest: {
    span: {
      marginRight: '4px',
      textOverflow: 'ellipsis',
      fontSize: '10px',
      color: props.theme.colorMap.primaryDark,
    },
  },
});

interface UpDropFileState {
  height: number;
  width: number;
  isLoading: boolean;
  errors?: any[];
  showModal: boolean;
  showOptions: boolean;
  color: string;
  shadow: string;
  ratio?: number;
  isFetchingFile?:boolean;
  value: IFile;
}

const isFileImage = (fileName: string): boolean => {
  if (fileName != null) {
    const extension = fileName.split('.').pop().toLowerCase();
    if (extension === 'jpeg' || extension === 'jpg' || extension === 'png' || extension === 'bmp') {
      return true;
    }
  }
  return false;
};

const getUrlToFile = (id) => null ;

class UpDropFile extends React.Component<UpDropFileProps & WithThemeProps, UpDropFileState> {
  cropper;
  dropZoneRef;
  wrapperUpDropFile: HTMLDivElement;

  static defaultProps : Partial<UpDropFileProps> & WithThemeProps = {
    maxImgWidth : 600,
    theme: UpDefaultTheme,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      height: null,
      width: null,
      isLoading: false,
      showModal: false,
      showOptions: true,
      color: '',
      shadow: '',
      value : null,
    };
  }

  handleImage = (file: IFile) => {
    const upload: IFile = { ...file };

    const image = new Image();
    // Set the Base64 string return from FileReader as source.
    image.src = file.value_base64 as string;
    // Validate the File Height and Width.
    image.onload = function () {
      upload.height = image.height;
      upload.width = image.width;
      this.onLoadImage(upload);
    }.bind(this);
  }

  componentDidMount() {
    if (this.props.source != null && isFunction(this.props.source)) {
      this.setState({ isLoading: true });
      this.props.source().then((file: IFile) => {
        this.handleImage(file);
        // Convert Source to Model
        if (this.props.onChange) {
            this.props.onChange(eventFactory(this.props.name, file), file);
        }
        this.setState({ isLoading: false, errors: null });
      }).catch(errors => {}) ;
    }

    // Register resize event listener
    on(window, 'resize', this, false);
  }

  onLoadImage = (image: HTMLImageElement) => {
    if (!this.isRatioControlled()) {
      this.setState({ ratio: image.width / image.height }, () => {
        this.updateWrapperHeight();
      });
    } else {
      this.updateWrapperHeight();
    }
  }

  isValueControlled = () => this.props.value !== undefined ; // True, value controlled by parent
  isRatioControlled = () => this.props.ratio !== undefined ; // True, ratio controlled by parent

  get preview() {
      return this.value != null ? this.value.value_base64 as string : ''
  }
  get value() {
    return this.isValueControlled() ? this.props.value : this.state.value
  }
  get ratio() {
    return  this.isRatioControlled() ? this.props.ratio : this.state.ratio ;
  }

  get fileName() {
    return this.value != null ? this.value.name : ''
  }

  handleEvent = (e: Event) => {
    switch (e.type) {
      case 'resize':
        this.updateWrapperHeight();
        break;
    }
  }

  updateWrapperHeight = () => {
    if (this.ratio != null && this.wrapperUpDropFile != null) {
      this.setState({
        width: this.wrapperUpDropFile.clientWidth,
        height: this.wrapperUpDropFile.clientWidth / this.ratio,
      });
    }
  }

  componentWillUnmount() {
    // Unegister resize event listener
    off(window, 'resize', this);
  }

  /**
   * Case insensitive allowed extension check
   * @param file
   * @returns {boolean}
   */
  isExtensionAllowed = (file): boolean => {
    if (!this.props.allowedExtensions || !this.props.allowedExtensions.length) {
      return true;
    }

    const extension = file.name.split('.').pop().toLowerCase();

    for (const ext of this.props.allowedExtensions) {
      if (extension === ext.toLowerCase()) {
        return true;
      }
    }

    return false;
  };

  selectFile = (filesToUpload, e) => {
    const file = filesToUpload[0];

    if (file == null) {
      return;
    }

    if (isEmpty(file.size)) {
      const errors = [];
      errors.push({
        message: `Le fichier est vide !`,
        intent: 'error',
      });

      return this.setState({ errors });
    }

    if (!this.isExtensionAllowed(file)) {
      const errors = [];
      errors.push({
        message: `Les formats de fichier autorisés sont : ${this.props.allowedExtensions.join(', ')}`,
        intent: 'error',
      });

      return this.setState({ errors });
    }

    const reader = new FileReader();
    const onChange = this.props.onChange;

    reader.readAsDataURL(file);

    reader.onloadend = (e) => {
        if (isFileImage(file.name) && this.props.maxImgWidth) {
            const handleResize = function (data:string) {
                const tmpUpload: IFile = {
                    name: `${file.name}.png`,
                    value_base64: data,
                };

                this.handleImage(tmpUpload) ;
                this.setState({ showModal: true});
                if (onChange) {
                    const file = {...this.value, ...tmpUpload };
                    onChange(eventFactory(this.props.name, file), file);
                } else {
                    this.setState({value : {...this.value, ...tmpUpload } })
                }
            }.bind(this);
            this.resizeImage(this.props.maxImgWidth, reader.result ,handleResize);
        } else {
            const upload: IFile = {
                name: file.name,
                value_base64: reader.result,
            };

            if (isFileImage(file.name)) {
                this.handleImage(upload) ;
            }
            if (onChange) {
                onChange(eventFactory(this.props.name, upload), upload);
                if (isFileImage(file.name)) {
                    this.setState({ showModal: true });
                }
            } else {
                this.setState({value : upload, showModal: isFileImage(file.name)})
            }
        }
    };
  };

  resizeImage = (maxWidth:number, img: any,onResize : (img:string) => void) => {
    const image = new Image();
    // Set the Base64 string return from FileReader as source.
    image.src = img;
    // Validate the File Height and Width.
    image.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      let width = image.width;
      let height = image.height;
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxWidth) {
          width *= maxWidth / height;
          height = maxWidth;
        }
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(image, 0, 0, width, height);
      onResize(canvas.toDataURL(`image/png`, 1.0));
    }.bind(this);
  }

  deleteFile = (e) => {
    e.stopPropagation();
    if(this.props.onChange) {
        this.props.onChange(eventFactory(this.props.name, null), null);
    }

    if(!this.isValueControlled()) {
        this.setState({
            value: null,
            errors: null,
        },() => {
            this.updateWrapperHeight();
        });
    }
  };

  openFile = (e) => {
    if (e != null) {
      e.stopPropagation();
    }
    const value = this.props.value;
    const source = this.props.source;

    if (isFunction(source)) {
      source().then((file: IFile) => {
        window.open(getUrlToFile(file.id));
      });
    } else if (this.value != null && this.preview != null) {
        openFileAsBase64(this.preview as string, value.name);
    }
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  closeModal = () => {
    this.uploadFile();
    this.setState({ showModal: false });
  }

  cropFile = (e) => {
    e.stopPropagation();
    if (this.props.value != null) {
      const extension = this.props.value.name.split('.').pop().toLowerCase();
      this.setState({ showModal: true });
    }
  }

  onZoneClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (this.props.disabled === true && this.props.source != null) {
      this.openFile(e);
    } else if (this.props.disabled !== true) {
      this.dropZoneRef.open();
    }
    return null;
  };

  onFileDrop = (filesToUpload, e) => {
    if (this.props.disabled !== true) {
      this.selectFile(filesToUpload, e);
    }
  };

  // tslint:disable-next-line:function-name
  _crop() {
    // image in dataUrl
  }

  uploadFile() {
    const croppedCanvas = this.cropper.getCroppedCanvas() ;
    if (typeof croppedCanvas.toBlob === 'function') {
      croppedCanvas.toBlob((blob) => {
        const reader = new FileReader();
        const onChange = this.props.onChange;

        reader.readAsDataURL(blob);
        reader.onloadend = (e) => {
          const upload: IFile = {
            value_base64: reader.result,
          };

          // handle Image
          this.handleImage(upload);
          if(onChange) {
            const file = { ...this.value, ...upload} ;
            onChange(eventFactory(this.props.name, null), file);
          }

          if(!this.isValueControlled()) {
            this.setState({
                errors: null,
                showModal: false,
                value: { ...this.value, ...upload },
              });
          } else {
            this.setState({
                errors: null,
                showModal: false,
            });
          }
        };
      });
    }
  }

  render() {
    const theme = this.props.theme;
    const hasError: boolean = this.props.error !== undefined && this.props.touched;
    const isFileSelected = this.value != null ;
    const isPDF = isFileSelected && getMimeTypeFromBase64(this.preview) === 'application/pdf' ;

    const iconTitleStyle = style({
      fontSize: '12px', 
      padding: '4px',
      $nest: {
        '&:hover': {
          backgroundColor: theme.colorMap.primary || '#039eb2',
          cursor: 'pointer',
          boxShadow: `1px 1px 2px ${theme.colorMap.primaryDark}`,
        },
        '&.up-file-action.up-icon-wrapper svg, &.up-file-action.up-icon-wrapper svg path, &.up-file-action.up-icon-wrapper svg polygon' : {
            fill: theme.colorMap.primary || '#039eb2',
            margin:'0px',
        },
        '&.up-file-action.up-icon-wrapper:hover svg, &.up-file-action.up-icon-wrapper:hover svg path, &.up-file-action.up-icon-wrapper:hover svg polygon' : {
            fill: theme.colorMap.primaryFg || 'white',
            margin:'0px',  
        },
      },
    });

    return (
      <div ref={(wrapperUpDropFile) => { this.wrapperUpDropFile = wrapperUpDropFile; }}>
          <UpLabel>{this.props.label} {this.props.required && ' *'}
            {this.props.onMouseOver &&
              <span
                className={classnames(iconTitleStyle, 'icon-info')}
                onClick={this.props.onMouseOver}
              />
            }
          </UpLabel>
          <div className={FileStyle} onClick={this.onZoneClick.bind(this)}>
            <Dropzone onMouseEnter={() => this.setState({ showOptions: true })}
              onMouseLeave={() => this.setState({ showOptions: false })}
              ref={(node) => { this.dropZoneRef = node; }}
              style={{ backgroundSize: '100%', width: this.state.width ? `${this.state.width}px` : '100%', height: this.state.height ? `${this.state.height}px` : '100%' }}
              className={classnames('up-btn', BaseStyle(this.preview), isFileSelected ? boxUploaded : boxUpload)}
              name={this.props.name}
              disableClick
              onDrop={this.onFileDrop.bind(this)}
            >
              {false &&
                <UpNotification intent={'info'}>
                  <UpParagraph>Aucune prévisualisation disponible pour ce type de fichier.</UpParagraph>
                  <UpParagraph><UpLink onClick={ () => { this.openFile(null); }}>Ouvrir le fichier</UpLink></UpParagraph>
                </UpNotification>
              }
              {isPDF &&
                <UpPDFViewer onLoadSuccess={() => {}} base64PDF={this.preview} />
              }
              {(this.state.showOptions === true || isFileSelected === false) &&
              <div className={wrapperActionStyle(this.props)}>
                {isFileSelected === true ?
                  <>
                    {this.props.disabled !== true &&
                      <UpTooltip content={`Supprimer le fichier ${this.fileName || ''}`} place={'top'}>
                        <UpSvgIcon iconName={'delete'}
                          onClick={this.deleteFile}
                          color={this.props.theme.colorMap.primary}
                          className={classnames(iconTitleStyle, 'up-file-action')} />
                      </UpTooltip>
                    }
                    {this.props.enableCrop && isFileImage(this.props.value.name) &&
                      <UpTooltip content={'Redimensionner l\'image'} place={'top'}>
                        <UpSvgIcon iconName={'crop'}
                          onClick={this.cropFile}
                          color={this.props.theme.colorMap.primary}
                          className={classnames(iconTitleStyle, 'up-file-action')} />
                      </UpTooltip>
                    }
                    {(this.props.value) &&
                      <UpTooltip content={`Ouvrir le fichier ${this.fileName}`} place={'top'}>
                        <UpSvgIcon iconName={'read'}
                          onClick={this.openFile}
                          color={this.props.theme.colorMap.primary}
                          className={classnames(iconTitleStyle, 'up-file-action')} />
                      </UpTooltip>
                    }
                  </> :
                  <>
                    {isFileSelected === false &&
                      <UpTooltip content={'Choisir un fichier'} place={'top'}>
                        <UpSvgIcon iconName={'upload'} 
                          color={this.props.theme.colorMap.primary}
                          className={classnames(iconTitleStyle, 'up-file-action')} />
                      </UpTooltip>
                    }
                  </>
                }
              </div>
              }
            </Dropzone>
          </div>
          {isFileSelected && this.fileName &&
            <div className={wrapperFileNameStyle(this.props)}>
              <span>{this.fileName}</span>
            </div>
          }
          {this.props.allowedExtensions && this.props.allowedExtensions.length > 0 &&
            <span className={ExtensionsStyle(this.props)}>{`Formats autorisés : ${this.props.allowedExtensions.join(', ')}`}</span>
          }
           {this.state.errors &&
            <div className={wrapperErrorsStyle}>
                {this.state.errors.map(error => <UpNotification message={error} />)}
            </div>
          }
          {this.props.touched && hasError &&
            <span>{this.props.error}</span>
          }

        {this.props.enableCrop && this.state.showModal &&
          <UpModal
            onClose={this.closeModal}
            showModal={this.state.showModal}
          >
            <UpButton actionType={'save'} intent={'primary'} onClick={this.uploadFile.bind(this)}>Sauvegarder</UpButton>
            <Cropper
              ref={(cropper) => { this.cropper = cropper; }}
              src={this.props.value.value_base64}
              aspectRatio={this.ratio}
              guides={false}
              crop={this._crop.bind(this)}
              zoomable={false}
            />
          </UpModal>
        }
      </div>);
  }
}

export default withTheme<UpDropFileProps>(UpDropFile);
