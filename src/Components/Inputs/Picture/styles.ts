import { UpPictureCustomStyles, UpPictureCustomStylesKeys, UpPictureProps, UpPictureState } from './types';
import { getCustomStyles } from '../../../Common/theming/types';
import { toRem } from '../../../Common/theming/utils';

export const getPictureCustomStyle = (key: UpPictureCustomStylesKeys, customStyles: UpPictureCustomStyles, props: Partial<UpPictureProps>, state?: UpPictureState) => {
    return getCustomStyles<UpPictureCustomStylesKeys, Partial<UpPictureProps>, UpPictureState>(key, customStyles, props, state);
};

export const getCameraWrapperStyles = (props: UpPictureProps, state: UpPictureState) => {
    return {
        $nest: {
            '&.up-camera-wrapper video': {
                margin: `${toRem(10)} 0`,
                border: `1px solid ${props.theme.colorMap.primary}`,
                borderRadius: props.theme.borderRadius
            }
        }
    }
};

export const getPictureWrapperStyles = (props: UpPictureProps, state: UpPictureState) => {
    return {
        $nest: {
            '&.up-picture-wrapper': {
                margin: `${toRem(10)} 0`,
            }
        }
    }
};