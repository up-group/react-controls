import * as React from 'react';

// Temp fix
let Dropzone = require("react-dropzone");
if ("default" in Dropzone) {
  Dropzone = Dropzone.default;
}
let Cropper = require("react-cropper");
if ("default" in Cropper) {
  Cropper = Cropper.default;
}

import "cropperjs/dist/cropper.css";

import { style } from 'typestyle/lib';
import * as classnames from 'classnames';
import UpDefaultTheme, { WithThemeProps, withTheme, UpThemeInterface } from '../../../Common/theming';
import { ThemeInterface, IntentType } from "../../../Common/theming/types";

import { NestedCSSProperties } from 'typestyle/lib/types';

import { isFunction, openFileAsBase64, getMimeTypeFromBase64, isEmpty, on, off } from '../../../Common/utils';

import UpNotification from '../../Display/Notification';
import UpParagraph from '../../Display/Paragraph';
import UpTooltip from '../../Display/Tooltip';
import UpModal from "../../Containers/Modal/UpModal";
import UpLink from '../../Display/Link';
import UpPDFViewer from '../../Display/PDFViewer/UpPDFViewer';
import UpButton from '../Button/UpButton';
import UpLabel from '../../Display/Label';
import UpSvgIcon from '../../Display/SvgIcon';
import { eventFactory } from '../../../Common/utils/eventListener';
import UpBox from '../../Containers/Box';

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
    originalFile?: {
      lastModified: number;
      lastModifiedDate: Date;
      name: string;
      preview: string;
      size: number;
      type: string;
      webkitRelativePath: string;
    }
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
  error?: any;
  touched?: boolean;
  value?: IFile;
  disabled?: boolean;
  maxImgWidth?: number,
  autoResizeContainer?: boolean;
  showPreview?:boolean;
  noPreviewMessage?:string;
  previewDisabledMessage?:string;
  openFileLabel?:string;
  deleteFileLabel?:string;
  selectFileLabel?:string;
  resizeImageLabel?:string;
  allowExtensionsLabel?:string;
  onChange?: (event: React.ChangeEvent<any>, value: IFile) => void;
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

const base: NestedCSSProperties = {
  fontFamily: 'Roboto',
  textAlign: 'center',
  cursor: 'pointer',
  width: '100%',
  borderRadius: '4px',
  minHeight: '64px',
  height: 'auto',
  marginTop: '8px',
  position: 'relative',
};

const baseStyle = (bgSrc: string, theme : UpThemeInterface) =>
  style({
    ...base,
    maxWidth: "100%",
    backgroundImage: `url(${bgSrc})`,
    backgroundRepeat: "no-repeat",
    $nest: {
      "& canvas": {
        maxWidth: "100%",
        borderRadius: theme.borderRadius,
      }
    }
  });

const fileStyle = style({
  color: '#7a756f',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  marginTop: '16px',
});

const wrapperDropStyle = style({
  width: '100%',
});

const extensionsStyle = (props: WithThemeProps) => style({
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

interface Message {
  message : string ;
  intent: IntentType;
}

interface UpDropFileState {
  height: number;
  width: number;
  isLoading: boolean;
  errors?: Array<Message>;
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

class UpDropFile extends React.Component<
  UpDropFileProps & WithThemeProps,
  UpDropFileState
> {
  cropper;
  dropZoneRef;
  wrapperUpDropFile: HTMLDivElement;

  static defaultProps: Partial<UpDropFileProps> & WithThemeProps = {
    maxImgWidth: 600,
    theme: UpDefaultTheme,
    autoResizeContainer: false,
    showPreview: true,
    previewDisabledMessage: "La présvisualisation est désactivée.",
    noPreviewMessage:
      "Aucune prévisualisation disponible pour ce type de fichier.",
    openFileLabel: "Ouvrir le fichier",
    deleteFileLabel: "Supprimer le fichier",
    selectFileLabel: "Choisir un fichier",
    resizeImageLabel: "Redimensionner l'image",
    allowExtensionsLabel: "Formats autorisés"
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      height: null,
      width: null,
      isLoading: false,
      showModal: false,
      showOptions: true,
      color: "",
      shadow: "",
      value: null
    };
  }

  handleImage = (file: IFile) => {
    const upload: IFile = { ...file };

    const image = new Image();
    // Set the Base64 string return from FileReader as source.
    image.src = file.value_base64 as string;
    // Validate the File Height and Width.
    image.onload = function() {
      upload.height = image.height;
      upload.width = image.width;
      this.onLoadImage(upload);
    }.bind(this);
  };

  componentDidMount() {
    if (this.props.source != null && isFunction(this.props.source)) {
      this.setState({ isLoading: true });
      this.props
        .source()
        .then((file: IFile) => {
          this.handleImage(file);
          // Convert Source to Model
          if (this.props.onChange) {
            this.props.onChange(eventFactory(this.props.name, file), file);
          }
          this.setState({ isLoading: false, errors: null });
        })
        .catch(errors => {});
    }

    // Register resize event listener
    on(window, "resize", this, false);
  }

  onLoadImage = (image: HTMLImageElement) => {
    if (!this.isRatioControlled) {
      this.setState({ ratio: image.width / image.height }, () => {
        this.updateWrapperHeight();
      });
    } else {
      this.updateWrapperHeight();
    }
  };

  get isValueControlled() {
    return this.props.value !== undefined; // True, value controlled by parent
  }

  get isRatioControlled() {
    return this.props.ratio !== undefined; // True, ratio controlled by parent
  }

  get preview() {
    return this.value != null ? (this.value.value_base64 as string) : "";
  }
  get value() {
    return this.isValueControlled ? this.props.value : this.state.value;
  }
  get ratio() {
    return this.isRatioControlled ? this.props.ratio : this.state.ratio;
  }

  get fileName() {
    return this.value != null ? this.value.name : "";
  }

  get isPDF() {
    return (
      this.value != null &&
      this.value.value_base64 != null &&
      getMimeTypeFromBase64(this.value.value_base64 as string) ===
        "application/pdf"
    );
  }

  get isImage() {
    return (
      this.value != null &&
      this.value.value_base64 != null &&
      getMimeTypeFromBase64(this.value.value_base64 as string).startsWith(
        "image/"
      )
    );
  }

  handleEvent = (e: Event) => {
    switch (e.type) {
      case "resize":
        this.updateWrapperHeight();
        break;
    }
  };

  updateWrapperHeight = () => {
    if (this.ratio != null && this.wrapperUpDropFile != null) {
      this.setState({
        width:
          this.value && this.props.showPreview
            ? this.wrapperUpDropFile.clientWidth
            : null,
        height:
          this.value && this.props.showPreview
            ? this.wrapperUpDropFile.clientWidth / this.ratio
            : null
      });
    }
  };

  componentWillUnmount() {
    // Unegister resize event listener
    off(window, "resize", this);
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

    const extension = file.name
      .split(".")
      .pop()
      .toLowerCase();

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
        intent: "error"
      });

      return this.setState({ errors });
    }

    if (!this.isExtensionAllowed(file)) {
      const errors = [];
      errors.push({
        message: `Les formats de fichier autorisés sont : ${this.props.allowedExtensions.join(
          ", "
        )}`,
        intent: "error"
      });

      return this.setState({ errors });
    }

    const reader = new FileReader();
    const onChange = this.props.onChange;

    reader.readAsDataURL(file);

    reader.onloadend = e => {
      if (isFileImage(file.name) && this.props.maxImgWidth) {
        const handleResize = function(data: string) {
          const tmpUpload: IFile = {
            name: `${file.name}.png`,
            value_base64: data,
            originalFile: file
          };

          this.handleImage(tmpUpload);
          this.setState({ showModal: true, errors: null });
          if (onChange) {
            const file = { ...this.value, ...tmpUpload };
            onChange(eventFactory(this.props.name, file), file);
          } else {
            this.setState({ value: { ...this.value, ...tmpUpload }, errors: null });
          }
        }.bind(this);
        this.resizeImage(this.props.maxImgWidth, reader.result, handleResize);
      } else {
        const upload: IFile = {
          name: file.name,
          value_base64: reader.result,
          originalFile: file
        };

        if (isFileImage(file.name)) {
          this.handleImage(upload);
        }
        if (onChange) {
          onChange(eventFactory(this.props.name, upload), upload);
          if (isFileImage(file.name)) {
            this.setState({ showModal: true, errors: null });
          }
        } else {
          this.setState({ value: upload, showModal: isFileImage(file.name), errors: null });
        }
      }
    };
  };

  resizeImage = (
    maxWidth: number,
    img: any,
    onResize: (img: string) => void
  ) => {
    const image = new Image();
    // Set the Base64 string return from FileReader as source.
    image.src = img;
    // Validate the File Height and Width.
    image.onload = function() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
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
  };

  deleteFile = e => {
    if (e != null) {
      e.stopPropagation();
    }
    if (this.props.onChange) {
      this.props.onChange(eventFactory(this.props.name, null), null);
    }

    if (!this.isValueControlled) {
      this.setState(
        {
          value: null,
          errors: null
        },
        () => {
          this.updateWrapperHeight();
        }
      );
    } else {
      this.updateWrapperHeight();
    }
  };

  openFile = e => {
    if (e != null) {
      e.stopPropagation();
    }
    if (isFunction(this.props.source)) {
      this.props.source().then((file: IFile) => {
        window.open(getUrlToFile(file.id));
      });
    } else if (this.value != null && this.preview != null) {
      openFileAsBase64(this.preview as string, this.value.name);
    }
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  closeModal = () => {
    this.uploadFile();
    this.setState({ showModal: false });
  };

  cropFile = e => {
    e.stopPropagation();
    if (this.props.value != null) {
      const extension = this.props.value.name
        .split(".")
        .pop()
        .toLowerCase();
      this.setState({ showModal: true });
    }
  };

  onZoneClick = e => {
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
    const croppedCanvas = this.cropper.getCroppedCanvas();
    if (typeof croppedCanvas.toDataURL === "function") {

        const upload: IFile = {
          value_base64: croppedCanvas.toDataURL()
        };

        const onChange = this.props.onChange;

        // handle Image
        this.handleImage(upload);
        if (onChange) {
          const file = { ...this.value, ...upload };
          onChange(eventFactory(this.props.name, file), file);
        }

        if (!this.isValueControlled) {
          this.setState({
            errors: null,
            showModal: false,
            value: { ...this.value, ...upload }
          });
        } else {
          this.setState({
            errors: null,
            showModal: false
          });
        }
    }
  }

  render() {
    const theme: ThemeInterface = this.props.theme;
    const hasError: boolean =
      this.props.error !== undefined && this.props.touched;

    const isFileSelected: boolean = this.value != null;

    const iconTitleStyle = style({
      fontSize: "12px",
      padding: "4px",
      $nest: {
        "&:hover": {
          backgroundColor: theme.colorMap.primary || "#039eb2",
          cursor: "pointer",
          boxShadow: `1px 1px 2px ${theme.colorMap.primaryDark}`
        },
        "&.up-file-action.up-icon-wrapper svg, &.up-file-action.up-icon-wrapper svg path, &.up-file-action.up-icon-wrapper svg polygon, , &.up-file-action.up-icon-wrapper svg polyline": {
          fill: theme.colorMap.primary || "#039eb2",
          margin: "0px"
        },
        "&.up-file-action.up-icon-wrapper:hover svg, &.up-file-action.up-icon-wrapper:hover svg path, &.up-file-action.up-icon-wrapper:hover svg polygon, &.up-file-action.up-icon-wrapper:hover svg polyline": {
          fill: theme.colorMap.primaryFg || "white",
          margin: "0px"
        }
      }
    });

    return (
      <>
      <div
        className={wrapperDropStyle}
        ref={wrapperUpDropFile => {
          this.wrapperUpDropFile = wrapperUpDropFile;
        }}
      >
        {!isEmpty(this.props.label) && (
          <UpLabel
            text={`${this.props.label} ${this.props.required ? " *" : ""}`}
          >
            {this.props.onMouseOver && (
              <span
                className={classnames(iconTitleStyle, "icon-info")}
                onClick={this.props.onMouseOver}
              />
            )}
          </UpLabel>
        )}
        <div className={fileStyle} onClick={this.onZoneClick.bind(this)}>
          <Dropzone
            onMouseEnter={() => this.setState({ showOptions: true })}
            onMouseLeave={() => this.setState({ showOptions: false })}
            ref={node => {
              this.dropZoneRef = node;
            }}
            style={{
              backgroundSize: "100%",
              maxWidth: "100%",
              width:
                this.props.autoResizeContainer && this.state.width
                  ? `${this.state.width}px`
                  : "100%",
              height: this.state.height ? `${this.state.height}px` : "auto"
            }}
            className={classnames(
              "up-btn",
              baseStyle(this.props.showPreview ? this.preview : "", this.props.theme),
              isFileSelected ? boxUploaded : boxUpload
            )}
            name={this.props.name}
            disableClick
            onDrop={this.onFileDrop.bind(this)}
          >
            {isFileSelected && !this.isPDF && !this.isImage && (
              <UpNotification intent={"info"} displayMode={"text"}>
                <UpBox
                  onClick={e => e.stopPropagation()}
                  flexDirection={"column"}
                >
                  <UpParagraph>
                    {this.props.noPreviewMessage}
                    <br />
                    <UpLink
                      onClick={() => {
                        this.openFile(null);
                      }}
                    >
                      {this.props.openFileLabel}
                    </UpLink>
                  </UpParagraph>
                </UpBox>
              </UpNotification>
            )}
            {isFileSelected && !this.props.showPreview && (
              <UpNotification intent={"info"} displayMode={"text"}>
                <UpBox
                  onClick={e => e.stopPropagation()}
                  flexDirection={"column"}
                >
                  <UpParagraph>
                    {this.props.previewDisabledMessage}
                    <br />
                    <UpLink
                      onClick={() => {
                        this.openFile(null);
                      }}
                    >
                      {this.props.openFileLabel}
                    </UpLink>
                  </UpParagraph>
                </UpBox>
              </UpNotification>
            )}
            {this.props.showPreview && this.isPDF && (
              <UpPDFViewer onLoadSuccess={() => {}} base64PDFOrUrl={this.preview} />
            )}
            {(this.state.showOptions === true || isFileSelected === false) && (
              <div className={wrapperActionStyle(this.props)}>
                {isFileSelected === true && (
                  <>
                    {this.props.disabled !== true && (
                      <div onClick={e => e.stopPropagation()}>
                        <UpTooltip
                          content={`${this.props.deleteFileLabel} ${this
                            .fileName || ""}`}
                          place={"top"}
                        >
                          <UpSvgIcon
                            iconName={"delete"}
                            onClick={this.deleteFile}
                            color={this.props.theme.colorMap.primary}
                            className={classnames(
                              iconTitleStyle,
                              "up-file-action"
                            )}
                          />
                        </UpTooltip>
                      </div>
                    )}
                    {this.props.enableCrop &&
                      this.value &&
                      isFileImage(this.value.name) && (
                        <div onClick={e => e.stopPropagation()}>
                          <UpTooltip
                            content={this.props.resizeImageLabel}
                            place={"top"}
                          >
                            <UpSvgIcon
                              iconName={"crop"}
                              onClick={this.cropFile}
                              color={this.props.theme.colorMap.primary}
                              className={classnames(
                                iconTitleStyle,
                                "up-file-action"
                              )}
                            />
                          </UpTooltip>
                        </div>
                      )}
                    {this.value && (
                      <div onClick={e => e.stopPropagation()}>
                        <UpTooltip
                          content={`${this.props.openFileLabel} ${
                            this.fileName
                          }`}
                          place={"top"}
                        >
                          <UpSvgIcon
                            iconName={"read"}
                            onClick={this.openFile}
                            color={this.props.theme.colorMap.primary}
                            className={classnames(
                              iconTitleStyle,
                              "up-file-action"
                            )}
                          />
                        </UpTooltip>
                      </div>
                    )}
                  </>
                )}
                {isFileSelected === false && (
                  <UpTooltip content={this.props.selectFileLabel} place={"top"}>
                    <UpSvgIcon
                      iconName={"upload"}
                      color={this.props.theme.colorMap.primary}
                      className={classnames(iconTitleStyle, "up-file-action")}
                    />
                  </UpTooltip>
                )}
              </div>
            )}
          </Dropzone>
        </div>
        {isFileSelected && this.fileName && (
          <div className={wrapperFileNameStyle(this.props)}>
            <span>{this.fileName}</span>
          </div>
        )}
        {this.props.allowedExtensions &&
          this.props.allowedExtensions.length > 0 && (
            <span className={extensionsStyle(this.props)}>{`${
              this.props.allowExtensionsLabel
            } : ${this.props.allowedExtensions.join(", ")}`}</span>
          )}
        {this.state.errors && (
          <div className={wrapperErrorsStyle}>
            {this.state.errors.map((error, index) => (
              <UpNotification
                key={index}
                message={error.message}
                intent={error.intent}
              />
            ))}
          </div>
        )}
        {this.props.touched && hasError && <span>{this.props.error}</span>}
      </div>
      {
      this.props.enableCrop && this.state.showModal && this.value != null && (
        <UpModal onClose={this.closeModal} showModal={this.state.showModal}>
          <UpButton
            actionType={"save"}
            intent={"primary"}
            onClick={this.uploadFile.bind(this)}
          >
            Sauvegarder
          </UpButton>
          <Cropper
            ref={cropper => {
              this.cropper = cropper;
            }}
            src={this.value ? this.value.value_base64 : null}
            aspectRatio={this.ratio}
            guides={false}
            crop={this._crop.bind(this)}
            zoomable={false}
          />
        </UpModal>
      )
    }
    </>
    );
  }
}

export default withTheme<UpDropFileProps>(UpDropFile);
