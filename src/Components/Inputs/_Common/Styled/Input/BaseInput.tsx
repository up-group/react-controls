// Imports
import * as React from 'react'
import styled, {css} from '../../../../../Common/theming/themedComponents'
import SvgIcon from "../../../../Display/SvgIcon/index"
import { IconName, ThemeInterface } from "../../../../../Common/theming/types"
import { inputStyles, HeightLarge } from "./styles"
import { CommonInputTextWithIconProps } from '../../BaseControl/BaseInput'
import defaultTheme from '../../../../../Common/theming'

// Exports
export type InputType = 'text' | 'email' | 'number' | 'integer' | 'phone' | 'search';

export interface StyledProps extends CommonInputTextWithIconProps {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    type?: InputType;
    iconName?: IconName;
    hasError?: boolean;
    onChange?: (data: any) => void;
    className?: string; // Used for styled components
}

const BaseInput: React.StatelessComponent<StyledProps> = (props) => {
    const {className, type, iconName, placeholder, disabled, readonly, onChange } = props;

    var icon: any = null;
    if (iconName) {
        icon = <div className="up-icon">
            <SvgIcon iconName={iconName}
                width={20}
                height={20}
                color={props.color} />
        </div>;
    }
    return (<div className={className}>
        <div className="up-input-group">
            <input onChange={onChange} className="up-input" type="text" placeholder={placeholder} dir="auto" disabled={disabled} readOnly={readonly} />
            {icon}
        </div>
    </div>);
}

const sizeMap = {
    xsmall: "40px",
    small: "100px",
    medium: "150px",
    large: "250px",
    xlarge: "350px",
    xxlarge: "500px",
    fill: "100%",
};

const error = css`
.up-input {
  border-color:${(props) => (props.theme) ? props.theme.colorMap.danger : defaultTheme.colorMap.danger};
  border-width: 1px;
  border-style: solid;
}
`

export const InputStyled = styled<StyledProps>(BaseInput) `
  ${inputStyles}
  ${(props) => props.hasError ? error : css``}
  color: ${(props: StyledProps) => props.color};
  .up-input {
    width: ${(props: StyledProps) => sizeMap[props.width]};
    ${(props: StyledProps) => (props.height == "large" ? HeightLarge : css``)}
  }
`;