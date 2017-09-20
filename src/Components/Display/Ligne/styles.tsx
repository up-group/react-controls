// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import { ThemeInterface } from "../../../Common/theming/types";
import { ThemeProps, InterpolationFunction } from "styled-components/typings/styled-components";
import {UpLigneProps} from './'

const defaultProps: UpLigneProps = {
  color: '#fff',
  textAlign: 'center'
};

export const style = css`
  text-align: ${(props: UpLigneProps) => props.textAlign || defaultProps.textAlign};
  color: ${(props: UpLigneProps) => props.color || defaultProps.color};
`;

export const SpanStyled = styled.span`
  ${style}
`;

const LigneStyled: React.StatelessComponent<UpLigneProps> = (props) => {
  const {dataFor, ...others} = props ;
  var tooltipProps = {} ;
  if (dataFor) {
      tooltipProps = {
          "data-tip": "tooltip",
          "data-for": dataFor
      }
  }
  
  return <SpanStyled {...tooltipProps} {...others}></SpanStyled>
};

export default LigneStyled