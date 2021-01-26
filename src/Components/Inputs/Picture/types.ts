import { CustomStyles, WithThemeProps } from '../../../Common/theming/types';

export type UpPictureCustomStylesKeys = 'cameraWrapper' | 'pictureWrapper';

export type UpPictureCustomStyles = CustomStyles<UpPictureCustomStylesKeys, Partial<UpPictureProps>, UpPictureState>;

export type LabelsPictureKeys = 'activation' | 'takePicture' | 'noCameraSupported';

export type LabelsPicture = { [key in LabelsPictureKeys]: string };

export type Image = {
    data: string
    width: number,
    height: number
};

export interface UpPictureProps extends WithThemeProps {
    width?: number;
    height?: number;
    labels?: LabelsPicture;
    customStyles?: UpPictureCustomStyles;
    onChange?: (event, value: Image) => void;
    name?: string;
};

export interface UpPictureState {
    enableVideo?: boolean;
    supportsCamera?: boolean;
    image?: Image;
    isCameraReady?: boolean;
};