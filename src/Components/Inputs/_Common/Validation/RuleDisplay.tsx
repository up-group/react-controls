import * as React from "react";
import { style } from "typestyle";
import defaultTheme, { WithThemeProps } from "../../../../Common/theming";

export interface RuleDisplayProps {
  rule: string;
  hasError: boolean;
}

const RuleDisplayStyle = props =>
  style({
    position: "relative",
    cursor: "help",
    height: "100%",
    $nest: {
      "& .up-wrapper-rule-inline": {
        display: "inline-block",
        color: props.hasError
          ? props.theme.colorMap.error
          : props.theme.colorMap.default,
        fontSize: "8pt"
      }
    }
  });

export default class RuleDisplay extends React.Component<
  RuleDisplayProps & WithThemeProps
> {
  static defaultProps = {
    theme: defaultTheme
  };

  constructor(p, c) {
    super(p, c);
  }

  render() {
    return (
      <div className={RuleDisplayStyle(this.props)}>
        {this.props.children}
        <div className={"up-wrapper-rule-inline"}>{this.props.rule}</div>
      </div>
    );
  }
}
