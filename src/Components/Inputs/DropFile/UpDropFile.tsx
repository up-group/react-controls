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
import classnames from 'classnames';
import UpDefaultTheme, { WithThemeProps, withTheme } from '../../../Common/theming';
import { ThemeInterface } from "../../../Common/theming/types";
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
import { IFile, UpDropFileProps, UpDropFileState } from './types';
import { baseStyle, boxUpload, boxUploaded, extensionsStyle, fileStyle, wrapperActionStyle, wrapperDropStyle, wrapperErrorsStyle, wrapperFileNameStyle } from './styles';
import { toRem } from '../../../Common/theming/utils';
import { style } from 'typestyle/lib';


const isFileImage = (fileName: string): boolean => {
    if (fileName != null) {
        const extension = fileName.split('.').pop().toLowerCase();
        if (extension === 'jpeg' || extension === 'jpg' || extension === 'png' || extension === 'bmp') {
            return true;
        }
    }
    return false;
};

const getUrlToFile = (id) => null;

class UpDropFile extends React.Component<UpDropFileProps & WithThemeProps, UpDropFileState> {
    cropper;
    dropZoneRef;
    wrapperUpDropFile: HTMLDivElement;

    static defaultProps: Partial<UpDropFileProps> & WithThemeProps = {
        maxImgWidth: 600,
        theme: UpDefaultTheme,
        autoResizeContainer: false,
        showPreview: true,
        previewDisabledMessage: "La présvisualisation est désactivée.",
        noPreviewMessage: "Aucune prévisualisation disponible pour ce type de fichier.",
        openFileLabel: "Ouvrir le fichier",
        deleteFileLabel: "Supprimer le fichier",
        selectFileLabel: "Choisir un fichier",
        dropLabel: "Déposez ici votre fichier",
        separatorLabel: "ou",
        resizeImageLabel: "Redimensionner l'image",
        allowExtensionsLabel: "Formats autorisés",
        showOptions: true,
        displaySelectFile: false
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
        image.onload = function () {
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
                .catch(errors => { });
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
            getMimeTypeFromBase64(this.value.value_base64 as string) === "application/pdf"
        );
    }

    get isImage() {
        return (
            this.value != null &&
            this.value.value_base64 != null &&
            getMimeTypeFromBase64(this.value.value_base64 as string).startsWith("image/")
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
        else {
            this.setState({ errors: null })
        }

        const reader = new FileReader();
        const onChange = this.props.onChange;

        reader.readAsDataURL(file);

        reader.onloadend = e => {
            if (isFileImage(file.name) && this.props.maxImgWidth) {
                const handleResize = function (data: string) {
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
                        this.setState({ value: { ...this.value, ...tmpUpload } });
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
        image.onload = function () {
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
        const hasError: boolean = this.props.error !== undefined && this.props.touched;
        const isFileSelected: boolean = this.value != null;

        const iconTitleStyle = style({
            fontSize: toRem(12),
            padding: toRem(4),
            $nest: {
                "&:hover": {
                    backgroundColor: theme.colorMap.primary || "#039eb2",
                    cursor: "pointer",
                    boxShadow: `1px 1px 2px ${theme.colorMap.primaryDark}`
                },
                "&.up-file-action.up-icon-wrapper svg, &.up-file-action.up-icon-wrapper svg path, &.up-file-action.up-icon-wrapper svg polygon, , &.up-file-action.up-icon-wrapper svg polyline": {
                    fill: theme.colorMap.primary || "#039eb2",
                    margin: 0
                },
                "&.up-file-action.up-icon-wrapper:hover svg, &.up-file-action.up-icon-wrapper:hover svg path, &.up-file-action.up-icon-wrapper:hover svg polygon, &.up-file-action.up-icon-wrapper:hover svg polyline": {
                    fill: theme.colorMap.primaryFg || "white",
                    margin: 0
                }
            }
        });

        return (
            <>
                <div
                    className={classnames(wrapperDropStyle, "up-dropfile")}
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
                            tabIndex={this.props.tabIndex}
                            style={{
                                backgroundSize: "100%",
                                maxWidth: "100%",
                                width: this.props.autoResizeContainer && this.state.width
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
                            {!isFileSelected && this.props.displaySelectFile && (
                                <div style={{ padding: '3rem' }}>
                                    <p>{this.props.dropLabel}</p>
                                    <p>{this.props.separatorLabel}</p>
                                    <div>
                                        <UpButton
                                            intent='primary'
                                            onClick={e => this.onZoneClick(e)}
                                        >
                                            {this.props.selectFileLabel}
                                        </UpButton>
                                    </div>
                                </div>
                            )}
                            {isFileSelected && !this.isPDF && !this.isImage && this.props.showPreview && (
                                <div style={{
                                    display: 'flex',
                                    placeContent: 'center',
                                    padding: '3rem'
                                }}>
                                    <UpSvgIcon iconName='file2' height={61} width={43} />
                                </div>
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
                                <UpPDFViewer onLoadSuccess={() => { }} base64PDFOrUrl={this.preview} />
                            )}
                            {this.props.showOptions === true && (this.state.showOptions === true || isFileSelected === false) && (
                                <div className={wrapperActionStyle(this.props)}>
                                    {isFileSelected === true && (
                                        <>
                                            {this.props.disabled !== true && (
                                                <div onClick={e => e.stopPropagation()}>
                                                    <UpTooltip
                                                        content={`${this.props.deleteFileLabel} ${this.fileName || ""}`}
                                                        place={"top"}
                                                    >
                                                        <UpSvgIcon
                                                            iconName={"trash-can"}
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
                                                        content={`${this.props.openFileLabel} ${this.fileName}`}
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
                            <span style={{ cursor: 'pointer' }}>
                                <UpSvgIcon
                                    width={15}
                                    height={15}
                                    iconName={"trash-can"}
                                    color='#4E5B59'
                                    onClick={this.deleteFile}
                                />
                            </span>
                        </div>
                    )}
                    {this.props.allowedExtensions &&
                        this.props.allowedExtensions.length > 0 && (
                            <span className={extensionsStyle(this.props)}>
                                {`${this.props.allowExtensionsLabel} : ${this.props.allowedExtensions.join(", ")}`}
                            </span>
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

export { UpDropFile };
export default withTheme<UpDropFileProps>(UpDropFile);
