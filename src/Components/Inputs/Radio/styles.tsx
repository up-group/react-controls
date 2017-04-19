import * as React from 'react'
import styled, { css } from 'styled-components'
import remStringFromPX from '../../../Common/utils'
import { StyledProps } from './'
import ThemeColorMap from '../../../Common/theming'
import SvgIcon from '../../Display/SvgIcon'
import * as classNames from 'classnames'

const BaseRadioButton: React.StatelessComponent<StyledProps> = (props) => {
    const { children, checked, className, name, text, value, iconName, onChange } = props;

    return (
      <label className={classNames("up-control", "up-radio", className)}>
        <input defaultChecked={checked} onChange={onChange} name={name} type="radio" value={value} />
        <span className="up-control-indicator"></span>
        {text}
      </label>
    )
}

export const StyledRadioButton = styled<StyledProps>(BaseRadioButton)`
.up-control-indicator {
  border-radius: 50%;
  font-size: 6px;
}
input:checked ~ .up-control-indicator::before, 
input:indeterminate ~ .up-control-indicator::before {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #ffffff;
    width: 1em;
    height: 1em;
    content: ""; 
}
`