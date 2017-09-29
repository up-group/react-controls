// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import { ThemeInterface } from "../../../Common/theming/types";
import { ThemeProps, InterpolationFunction } from "styled-components/typings/styled-components";
import {UpLigneProps} from './'

const defaultProps: UpLigneProps = {
  color: '#000',
  textAlign: 'center',
};

export const style = css`
  text-align: ${(props: UpLigneProps) => props.textAlign || defaultProps.textAlign};
  color: ${(props: UpLigneProps) => props.color || defaultProps.color};
  display:'inline-block';
`;

export const SpanStyled = styled.span`
  ${style}
`;

const LigneStyled: React.StatelessComponent<UpLigneProps> = (props) => {
  const {dataFor, className, children, ...others} = props ;
  var tooltipProps = {} ;
  if (dataFor) {
      tooltipProps = {
          "data-tip": "tooltip",
          "data-for": dataFor
      }
  }
  
  return (<SpanStyled className={className} {...tooltipProps} {...others}>
      {children}
      </SpanStyled>)
};

export default LigneStyled