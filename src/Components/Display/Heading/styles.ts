// Imports
import styled, {css} from '../../../Common/theming/themedComponents';
import { marginCss } from '../Paragraph/styles';
import { UpHeadingProps, Tag } from './';
import { ThemeInterface } from "../../../Common/theming/types";
import remStringFromPX from '../../../Common/utils';

const sizeMap = {
  h1: 36,
  h2: 30,
  h3: 24,
  h4: 18,
  h5: 16
};

const calculateSize = (tag: Tag): string => remStringFromPX(sizeMap[tag]);

const truncateCss = (truncate: boolean) => {
  if (truncate) {
    return css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }
  return '';
};

const textTransformCss = (upcase: boolean) => {
  if (upcase) {
    return css`
      text-transform: uppercase;
    `;
  }
  return '';
};

const HeadingStyles = css`
  font-size: ${(props: UpHeadingProps) => calculateSize(props.tag)};
  text-align: ${(props: UpHeadingProps) => props.textAlign};
  color: ${(props: UpHeadingProps) => props.color};
  ${(props: UpHeadingProps) => truncateCss(props.truncate)};
  ${(props: UpHeadingProps) => textTransformCss(props.upcase)};
  ${(props: UpHeadingProps) => marginCss(props.margin)};
`;

export const H1 = styled.h1`
  ${HeadingStyles}
`;

export const H2 = styled.h2`
  ${HeadingStyles}
`;

export const H3 = styled.h3`
  ${HeadingStyles}
`;

export const H4 = styled.h4`
  ${HeadingStyles}
`;

export const H5 = styled.h5`
  ${HeadingStyles}
`;
