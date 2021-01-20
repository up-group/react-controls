import * as classnames from 'classnames';
import * as React from 'react';
import { style } from 'typestyle';
import UpBox from '../../Containers/Box';
import UpSvgIcon from '../SvgIcon';
import UpButton from '../../Inputs/Button/UpButton';
import { UpInformationProps } from './types';
import { boxWrapperStyle, buttonStyle, contentStyle, contentWrapperStyle, getCustomStyle, titleStyle } from './styles';

const UpInformation: React.FunctionComponent<UpInformationProps> = (props) => {

    const {
        iconName,
        iconSize,
        iconColor,
        title,
        content,
        action,
        children
    } = props;

    const contentClassStyle = classnames('up-box-content', style({ ...contentStyle, ...getCustomStyle('content', props) }));

    return (
        <UpBox className={classnames('up-information', style({ ...boxWrapperStyle, ...getCustomStyle('informationWrapper', props) }))}>
            {title && iconName && (
                <div
                    style={{
                        marginBottom: 5
                    }}>
                    <UpSvgIcon
                        iconName={iconName}
                        width={iconSize}
                        height={iconSize}
                        color={iconColor}
                        style={{
                            verticalAlign: 'middle',
                            marginRight: 15
                        }}
                    />
                    <span className={classnames('up-information-title', style({ ...titleStyle, ...getCustomStyle('title', props) }))}>{title}</span>
                </div>
            )}
            <UpBox
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                className={classnames('up-information-content-wrapper', style({ ...contentWrapperStyle, ...getCustomStyle('contentWrapper', props) }))}>
                {content && (
                    <UpBox
                        flexDirection={'column'}
                        justifyContent={'flex-start'}
                        alignItems={'flex-start'}>
                        <p className={contentClassStyle}>{content}</p>
                        {children && (
                            <p className={contentClassStyle}>{children}</p>
                        )}
                    </UpBox>
                )}
                {action &&
                    <UpBox className={classnames('up-information-button-wrapper', style({ ...buttonStyle, ...getCustomStyle('button', props) }))}>
                        <UpButton
                            fontSize={'small'}
                            tooltip={action.tooltip}
                            iconName={action.iconName}
                            intent={action.intent}
                            actionType={action.actionType}
                            onClick={action.onClick}
                            width={'full'}
                        >
                            <span>{action.libelle}</span>
                        </UpButton>
                    </UpBox>
                }
            </UpBox>
        </UpBox>
    );
};

export default UpInformation;