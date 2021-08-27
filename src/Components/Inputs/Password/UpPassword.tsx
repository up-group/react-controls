import * as React from 'react';
import UpInput from '../Input';
import { IconName } from '../../../Common/theming/icons';
import UpSvgIcon from '../../Display/SvgIcon';
import { style } from 'typestyle';
import withTheme from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import classnames from 'classnames';
import { isEmpty } from '../../../Common/utils';
import { UpPasswordProps, UpPasswordState } from './types';
import { getRulesStyle, getRuleStatus, getStyles, onSide } from './styles';

class UpPassword extends React.Component<UpPasswordProps, UpPasswordState> {
    updatingShow;
    updatingHide;

    static defaultProps = {
        theme: defaultTheme
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            isVisible: false
        };
    }

    toggleVisible = e => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    };

    get isHidden() {
        return this.state.isVisible === false;
    }

    get isShown() {
        return this.state.isVisible === true;
    }

    hide = () => {
        if (this.isHidden || this.updatingShow) {
            return;
        }

        this.updatingHide = setTimeout(
            () =>
                this.setState({ isVisible: false }, () => (
                    this.updatingHide = null
                )), 500
        );
    };

    show = () => {
        if (this.isShown || this.updatingShow) {
            return;
        }

        this.updatingShow = setTimeout(
            () =>
                this.setState({ isVisible: true }, () => (
                    this.updatingShow = null
                )), 0
        );
    };

    render() {
        const iconEyeOpen: IconName = 'eye-open';
        const iconEyeClose: IconName = 'eye-close';
        const type = this.state.isVisible === true ? this.props.type : 'password';

        const themeStyles = this.props.theme.styles.get('input') || {};
        const {
            showSuccess,
            onBlur,
            showError,
            onFocus,
            showPasswordOnClick: onClickBehaviour,
            rules,
            value,
            focused,
            ...others
        } = this.props;

        return (
            <>
                <div
                    className={classnames(
                        style(themeStyles),
                        getStyles(this.props),
                        'up-password',
                        onClickBehaviour ? onSide : ''
                    )}
                >
                    <div style={{ width: '100%' }}>
                        <UpInput
                            {...others}
                            showSuccess={showSuccess}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            type={type}
                            showValidationStatus={false}
                        />
                    </div>
                    <UpSvgIcon
                        onMouseOver={!onClickBehaviour ? this.show : null}
                        onMouseOut={!onClickBehaviour ? this.hide : null}
                        onClick={onClickBehaviour ? this.toggleVisible : null}
                        iconName={!!this.state.isVisible ? iconEyeOpen : iconEyeClose}
                    />
                </div>
                { focused && !isEmpty(rules) && (
                    <div className={classnames(getRulesStyle(this.props), 'password-rules')}>
                        {rules.map(({ text, regex }) =>
                        (
                            <div key={text} style={{ display: 'flex', alignItems: 'center' }}>
                                <span className={getRuleStatus(this.props, regex)} />
                                <p>{text}</p>
                            </div>
                        )
                        )}
                    </div>
                )}
            </>
        );
    }
};

export { UpPassword };
export default withTheme<UpPasswordProps>(UpPassword);
