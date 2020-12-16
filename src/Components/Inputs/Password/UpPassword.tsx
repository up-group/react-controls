import * as React from "react";
import { UpInputProps } from "../Input/types";
import UpInput from "../Input";
import { IconName } from "../../../Common/theming/icons";
import UpSvgIcon from "../../Display/SvgIcon";
import { style } from "typestyle";
import withTheme from "../../../Common/theming/withTheme";
import defaultTheme from "../../../Common/theming";
import * as classnames from "classnames";
import { isEmpty,ruleIsValid } from "../../../Common/utils";
import { NestedCSSProperties,CSSProperties } from 'typestyle/lib/types';
const fillColor = (props:UpInputProps) => {
  let color: string
  if(!props.touched) color= props.theme.colorMap.default
  if(!!props.value) color= props.theme.colorMap.success
  if(props.showError && props.hasError) color = props.theme.colorMap.error

  return color
}
const getStyles = (props: UpInputProps) =>
  style({
    position: "relative",
    $nest: {
      "&.up-password .up-icon-wrapper": {
        position: 'absolute',
        top: 4,
        right: 0,
        cursor: "pointer",
        zIndex: 10,
      },
      "&.up-password .up-icon-wrapper svg, &.up-password .up-icon-wrapper svg polygon, &.up-password .up-icon-wrapper svg path, &.up-password .up-icon-wrapper svg polyline": {
        fill: `${fillColor(props)} !important`,
      },
      "&.up-password .up-wrapper-error-tooltip":{
        display: 'none',
        background: 'transparent'
      }
    }
  });

  const getRulesStyle = (props: UpInputProps) =>
    style({
      display:'block',
      zIndex:1000,
      width:'100%',
      border:`0 1px 1px solid ${props.theme.colorMap.lightGrey1}`,
      borderTop:'unset',
      boxShadow:'0 0 5px 0 rgba(0,0,0,0.11)',
      fontSize: '12px',
      color: '#4E5B59',
      lineHeight:'18px',
      fontWeight: 400,
      marginTop: '0.5px'
    })

const getRuleStatus = (props: UpInputProps, regex: RegExp) =>
  style({
    height: '8px',
    width: '8px',
    backgroundColor: `${ruleIsValid(props.value, regex) ?
      props.theme.colorMap.success :
      props.theme.colorMap.lightGrey1
      }`,
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 10px',
  })

  interface Item {
      text: string;
      regex: RegExp;
  }

export interface UpPasswordProps extends UpInputProps {
  showPasswordOnClick?: boolean;
  rules?: Array<Item>
}

export interface UpPasswordState {
  isVisible: boolean;
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
          () => (this.updatingHide = null)
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

  render() {
    const iconEyeOpen: IconName = "eye-open";
    const iconEyeClose: IconName = "eye-close";
    const type = this.state.isVisible === true ? this.props.type : "password";

    const themeStyles = this.props.theme.styles.get("input") || {};
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
      <React.Fragment>
      <div
        className={classnames(
          style(themeStyles),
          getStyles(this.props),
          "up-password",
          onClickBehaviour ? onSide : ""
        )}
      >
        <div style={{ width: "100%" }}>
          <UpInput
            {...others}
            showSuccess={showSuccess}
            onBlur={onBlur}
            onFocus={onFocus}
            type={type}
            showValidationStatus={false}
            value={value}
          />
        </div>
          <UpSvgIcon
            onMouseOver={!onClickBehaviour ? this.show : null}
            onMouseOut={!onClickBehaviour ? this.hide : null}
            onClick={onClickBehaviour ? this.toggleVisible : null}
            iconName={
              !!this.state.isVisible  ? iconEyeOpen : iconEyeClose
            }
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
      </React.Fragment>
    );
  }
}

export default withTheme<UpPasswordProps>(UpPassword);

const onSide = style({
  display: "flex"
});
