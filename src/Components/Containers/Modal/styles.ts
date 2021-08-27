import { style, media } from 'typestyle';
import classnames from 'classnames';
import { fullAnimationProp } from '../../../Common/theming/animations';
import { WithThemeProps } from '../../../Common/theming';
import { UpModalProps, DisplayMode } from './types';
import { toRem } from '../../../Common/theming/utils';

const cssModal = ({ modalWidth, displayMode, showModal, theme, screenPosition }: UpModalProps & WithThemeProps) => style({
    $nest: {
        "& .up-modal": {
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1050,
            overflowY: 'auto',
            outline: 0,
            opacity: 0,
            visibility: !showModal ? 'hidden' : 'visible',
            $nest: {
                '&.fade': {
                    visibility: 'hidden',
                    transition: '.5s ease-in-out',
                    $nest: {
                        '& .up-modal_dialog': {
                            transition: 'transform 1s ease-out',
                            transform: 'translate(0, -25%)',
                            ...(modalWidth !== 'default' && {
                                overflowY: 'hidden',
                                maxWidth: modalWidth === 'half' ? '50%' : 'auto',
                                marginLeft: displayMode === 'fromRight' ? (modalWidth === 'full' ? '0' : modalWidth === 'half' ? '50%' : 'unset') : '0',
                                transition: 'unset',
                                transform: 'unset'
                            })
                        }
                    }
                },
                '&.in': {
                    visibility: 'visible',
                    transition: '.5s ease-in-out',
                    animationDuration: '1s',
                    opacity: 1,
                    ...(modalWidth !== 'default' && {
                        ...animationProp('fadeIn', displayMode)
                    }),
                    $nest: {
                        '& .up-modal_dialog': {
                            transition: 'transform 1s ease-out',
                            transform: 'translate(0, 0)',
                            ...(modalWidth !== 'default' && {
                                marginLeft: displayMode === 'fromRight' ? (modalWidth === 'full' ? '0' : modalWidth === 'half' ? '50%' : 'unset') : 'auto',
                                marginRight: displayMode === 'fromLeft' ? (modalWidth === 'full' ? '0' : modalWidth === 'half' ? '50%' : 'unset') : 'auto',
                                overflowY: 'hidden'
                            })
                        }
                    }
                }
            }
        },
        "& .up-modal_dialog": {
            position: 'relative', 
            ...(screenPosition === 'center' && {
                top: '40%',
                transform: 'translateY(-100%) !important'
            }),
            ...(modalWidth === 'default' ?
                {
                    minWidth: '600px',
                    maxWidth: '70%',
                    margin: `${toRem(30)} auto`
                }
                :
                {
                    maxWidth: `${modalWidth === 'half' ? 50 : 100}%`,
                }
            )
        },
        "& .up-modal_content": {
            position: 'relative',
            backgroundColor: '#fff',
            border: '1px solid #999',
            borderRadius: toRem(6),
            outline: 0,
            boxShadow: '0 3px 9px rgba(0, 0, 0, .5)',
            ...(modalWidth !== 'default' && {
                padding: `${toRem(150)} ${toRem(105)} ${toRem(15)}`,
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                borderRadius: '0',
            })
        },
        "& .up-modal_header": {
            display: 'flex',
            justifyContent: 'space-between',
            padding: toRem(15),
        },
        "& .up-modal_title": {
            margin: 0,
            fontWeight: 400,
            color: theme ? theme.colorMap.grey1 : '#808080',
            ...(modalWidth !== 'default' && {
                fontSize: toRem(18),
                fontWeight: 'bold',
            })
        },
        "& .up-modal_close": {
            cursor: 'pointer',
            $nest: {
                '& svg': {
                    width: toRem(20),
                    height: toRem(20),
                    $nest: {
                        '& path': {
                            fill: theme ? theme.colorMap.gray1 : '#808080',
                        }
                    },
                }
            },
            ...(modalWidth !== 'default' && {
                position: 'absolute',
                top: toRem(50),
                right: toRem(50),
                zIndex: 1000,
            })
        },
        "& .up-modal_body": {
            padding: toRem(15)
        },
        "& .up-modal_footer": {
            padding: toRem(15),
            textAlign: "right",
            borderTop: "1px solid #e5e5e5",
        },
        "& .up-modal_backdrop": {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#0d0e0e',
            opacity: 0.7,
            overflow: 'hidden',
            zIndex: 1040,
            $nest: {
                '&.fade': {
                    filter: 'alpha(opacity=0)',
                    opacity: 0
                },
                '&.in': {
                    filter: 'alpha(opacity=50)',
                    opacity: 0.5
                }
            }
        }
    }
});

const animationProp: any = (fade: string, displayMode: DisplayMode) => {
    if (fade === 'fadeIn') return fullAnimationProp(0.5, 'ease', fade, displayMode);
};

export const getStyles = (props: UpModalProps & WithThemeProps) => {
    return classnames(cssModal(props));
};