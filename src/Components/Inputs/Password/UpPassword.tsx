import * as React from 'react'
import { BaseControlState } from '../_Common/BaseControl/BaseControl';
import { UpInputProps } from '../Input/types';
import UpInput from '../Input';
import { IconName } from '../../../Common/theming/icons';
import UpSvgIcon from '../../Display/SvgIcon';
import { style } from 'typestyle';
import withTheme from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import * as classnames from 'classnames' ;
import { runInThisContext } from 'vm';

const getStyles = (props: UpInputProps) =>
  style({
    position: "absolute",
    top: 0,
    right: "0",
    cursor: "pointer",
    zIndex: 10,
    $nest: {
      "&.up-password:hover svg, &.up-password:hover svg polygon, &.up-password:hover svg path, &.up-password:hover svg polyline": {
        fill: props.theme.colorMap.primary
      }
    }
  });

export interface UpPasswordProps extends UpInputProps {}

export interface UpPasswordState {
    isVisible : boolean;
}

class UpPassword extends React.Component<UpPasswordProps, UpPasswordState>  {

    updatingShow
    updatingHide

    static defaultProps = {
        theme: defaultTheme
    }

    constructor(p, c) {
        super(p, c);
        this.state = {
            isVisible : false,
        }
    }

    toggleVisible = (e) => {
        this.setState({
            isVisible : !this.state.isVisible,
        })
    }

    get isHidden() {
        return this.state.isVisible === false ;
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
          this.setState(
            {
              isVisible: false
            },
            () => (this.updatingHide = null)
          ),
        500
      );
    }

    show = () => {
      if (this.isShown || this.updatingShow) {
        return;
      }

      this.updatingShow = setTimeout(
        () =>
          this.setState(
            {
              isVisible: true
            },
            () => (this.updatingShow = null)
          ),
        0
      );
    }

    get showStatus() {
      return (this.props.hasError && this.props.showError) || (!this.props.hasError && this.props.value && this.props.showSuccess) ;
    }

    render() {
        const iconEyeOpen : IconName = 'eye-open' ;
        const iconEyeClose : IconName = 'eye-close' ;
        const type = this.state.isVisible === true ? this.props.type : 'password' ;
        const themeStyles = this.props.theme.styles.get("input") || {};
        return (
          <div
            className={style(themeStyles)}
            style={{ position: "relative" }}
          >
            <UpInput
              {...this.props}
              type={type}
              iconName={
                this.props.iconPosition === "left"
                  ? "lock-closed"
                  : null
              }
            />
            {!this.showStatus &&
            <UpSvgIcon
              className={classnames(
                getStyles(this.props),
                "up-password"
              )}
              onMouseOver={this.show}
              onMouseOut={this.hide}
              iconName={
                this.state.isVisible === true
                  ? iconEyeClose
                  : iconEyeOpen
              }
            />
            }
          </div>
        );
    }
}

export default withTheme<UpInputProps>(UpPassword)