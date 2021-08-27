import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import classnames from 'classnames';
import { UpButtonGroupProps } from './types';
import { toRem } from '../../../Common/theming/utils';

const noGutterStyle = (props: UpButtonGroupProps): NestedCSSProperties => {
    if (props.gutter !== 0) {
        return {};
    }
    switch (props.isAddOn) {
        case 'none': {
            return {
                $nest: {
                    '& .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn': {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    },
                    '& .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn': {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    },
                    '& .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn': {
                        borderRadius: 0,
                    }
                }
            }
        }
        case 'right': {
            return {
                $nest: {
                    '& .up-btn-wrapper:first-child .up-btn': {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    },
                    '& .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn': {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    },
                    '& .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn': {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    },
                    '& .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn': {
                        borderRadius: 0,
                    }
                }
            };
        }
        case 'left': {
            return {
                $nest: {
                    '& .up-btn-wrapper:last-child .up-btn': {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    },
                    '& .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn': {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    },
                    '& .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn': {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    },
                    '& .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn': {
                        borderRadius: 0
                    },
                }
            };
        }
    }
};

const setGutter = (props: UpButtonGroupProps): NestedCSSProperties => {
    if (props.align === 'v') {
        return {
            $nest: {
                '& .up-btn-wrapper': {
                    marginBottom: toRem(props.gutter),
                },
            },
        };
    } else {
        return {
            $nest: {
                '& .up-btn-wrapper': {
                    marginRight: toRem(props.gutter),
                },
            },
        };
    }
};

const setAlignment = (props: UpButtonGroupProps): NestedCSSProperties => {
    if (props.align === 'v') {
        return {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        };
    } else {
        return {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        };
    }
};

const setWidth = (props: UpButtonGroupProps): NestedCSSProperties => {
    if (props.width === 'full') {
        return {
            width: '100%'
        };
    } else {
        return {
            width: 'auto'
        };
    }
};

export const getStyles = (props: UpButtonGroupProps) => {
    return classnames('up-buttons-wrapper', style(setGutter(props)), style(setAlignment(props)), style(noGutterStyle(props)), style(setWidth(props)));
};