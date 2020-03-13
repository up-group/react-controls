import * as React from "react";
import { UpInputProps } from "../Input/types";
import UpInput from "../Input";
import { IconName } from "../../../Common/theming/icons";
import UpSvgIcon from "../../Display/SvgIcon";
import { style } from "typestyle";
import withTheme from "../../../Common/theming/withTheme";
import defaultTheme from "../../../Common/theming";
import * as classnames from "classnames";
import { isEmpty } from "../../../Common/utils";

const getStyles = (props: UpInputProps) =>
  style({
    position: "absolute",
    top: 4,
    right: "12px",
    cursor: "pointer",
    zIndex: 10,
    $nest: {
      "&.up-password-icon:hover svg, &.up-password-icon:hover svg polygon, &.up-password-icon:hover svg path, &.up-password-icon:hover svg polyline": {
        fill: props.theme.colorMap.primary
      }
    }
  });

export interface UpPasswordProps extends UpInputProps {
  onClickBehaviour?: boolean;
}

export interface UpPasswordState {
  isVisible: boolean;
  focused?: boolean;
  touched?: boolean;
}

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
        this.setState(
          {
            isVisible: false
          },
        ),
      500
    );
  };

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
  };

  hasError = () => {
    const value = this.props.value
    const matchValue = value.match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/')
    return matchValue && matchValue.length 
  }

  render() {
    const iconEyeOpen: IconName = "eye-open";
    const iconEyeClose: IconName = "eye-close";
    const type = this.state.isVisible === true ? this.props.type : "password";

    const themeStyles = this.props.theme.styles.get("input") || {};
    const {
      showSuccess,
      onBlur,
      onFocus,
      onClickBehaviour,
      ...others
    } = this.props;

    return (
      <div
        className={classnames(
          style(themeStyles),
          "up-password",
          onClickBehaviour ? onSide : ""
        )}
        style={{ position: "relative" }}
      >
        <div style={{ width: "100%" }}>
          <UpInput
            {...others}
            showSuccess={showSuccess}
            onBlur={onBlur}
            onFocus={onFocus}
            type={type}
            iconName={this.props.iconPosition === "left" ? "lock-closed" : null}
          />
        </div>

        {!onClickBehaviour && (
          <UpSvgIcon
            className={classnames(getStyles(this.props), "up-password-icon")}
            onMouseOver={this.show}
            onMouseOut={this.hide}
            iconName={
              this.state.isVisible === true ? iconEyeOpen : iconEyeClose
            }
          />
        )}
        {onClickBehaviour && (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
              margin: "0px 0px 0px 8px"
            }}
          >
            <UpSvgIcon
              color={defaultTheme.colorMap.primary}
              className={classnames("up-password-icon")}
              onClick={this.toggleVisible}
              iconName={this.state.isVisible ? iconEyeOpen : iconEyeClose}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withTheme<UpPasswordProps>(UpPassword);

const onSide = style({
  display: "flex"
});
