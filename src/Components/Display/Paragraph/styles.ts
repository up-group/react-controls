// Imports
import styled, {css} from '../../../Common/theming/themedComponents';
import { ThemeInterface } from "../../../Common/theming/types";
import { ThemeProps, InterpolationFunction } from "styled-components/typings/styled-components";
import remStringFromPX from '../../../Common/utils';
import {UpParagraphProps, SizeMap, MarginSizeMap, Margin, ParagraphSize} from './'

// Exports
const sizeMap: SizeMap = {
  small: 14,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const marginSizeMap: MarginSizeMap = {
  none: 0,
  small: 12,
  medium: 24,
  large: 48,
};

export function calculateMargin(margin: Margin): string {
  return remStringFromPX(marginSizeMap[margin]);
};

export function calculateSize(size: ParagraphSize): string {
  return remStringFromPX(sizeMap[size]);
};

const defaultProps: UpParagraphProps = {
  color: '#fff',
  textAlign: 'center',
  paragraphSize: 'medium',
  margin: 'medium',
};

export function marginCss(margin: Margin) {
  return css`
    margin-top: ${calculateMargin(margin)};
    margin-bottom: ${calculateMargin(margin)};
  `;
};

export const style = css`
  max-width: 630px;
  text-align: ${(props: UpParagraphProps) => props.textAlign || defaultProps.textAlign};
  color: ${(props: UpParagraphProps) => props.color || defaultProps.color};
  ${(props: UpParagraphProps) => marginCss(props.margin || defaultProps.margin)};
  font-size: ${(props: UpParagraphProps) => calculateSize(props.paragraphSize || defaultProps.paragraphSize)};
`;

const ParagraphStyled = styled.p`
  ${style}
`;

export default ParagraphStyled;