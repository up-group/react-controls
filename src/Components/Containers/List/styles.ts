import calculateSize from './styleUtils';
import styled, {css} from '../../../Common/theming/themedComponents';
import ThemeColorMap from '../../../Common/theming'
import { PropsStyled } from './types';
import { marginCss } from "../../Display/Paragraph/styles";

const borderWarning = css`
  border-radius:3px;
  border-color:${props => (props.theme.colorMap)?props.theme.colorMap.warning: ThemeColorMap.warning};
  border-width:1px;
  border-style: solid;
  padding:6px;
`;

function setBorder(props:PropsStyled) {
  if(props.border) {
    return borderWarning ;
  } else {
    return css``;
  }
}


export const UnorderedListStyled = styled.ul`
  text-align: center;
  list-style-type:${(props: PropsStyled) => props.type};
  font-size: ${(props: PropsStyled) => calculateSize(props.fontSize)};
  text-align: ${(props: PropsStyled) => props.textAlign};
  color: ${(props: PropsStyled) => props.color};
  font-weight: ${(props: PropsStyled) => props.fontWeight};
  ${(props: PropsStyled) => marginCss(props.margin)};
`;

export const OrderedListStyled = styled.ol`
  text-align: center;
  font-size: ${(props: PropsStyled) => calculateSize(props.fontSize)};
  text-align: ${(props: PropsStyled) => props.textAlign};
  color: ${(props: PropsStyled) => props.color};
  font-weight: ${(props: PropsStyled) => props.fontWeight};
  ${(props: PropsStyled) => marginCss(props.margin)};
`;

export const ListItemStyled = styled.li`
  text-align: center;
  font-size: ${(props: PropsStyled) => calculateSize(props.fontSize)};
  text-align: ${(props: PropsStyled) => props.textAlign};
  color: ${(props: PropsStyled) => props.color};
  font-weight: ${(props: PropsStyled) => props.fontWeight};
  ${(props: PropsStyled) => marginCss(props.margin)};
  ${(props) => setBorder(props)};
`;

export const DefinitionListStyled = styled.dl`
  text-align: center;
  font-size: ${(props: PropsStyled) => calculateSize(props.fontSize)};
  text-align: ${(props: PropsStyled) => props.textAlign};
  color: ${(props: PropsStyled) => props.color};
  font-weight: ${(props: PropsStyled) => props.fontWeight};
  ${(props: PropsStyled) => marginCss(props.margin)};
`;

export const DefinitionDataStyled = styled.dd`
  text-align: center;
  font-size: ${(props: PropsStyled) => calculateSize(props.fontSize)};
  text-align: ${(props: PropsStyled) => props.textAlign};
  color: ${(props: PropsStyled) => props.color};
  font-weight: ${(props: PropsStyled) => props.fontWeight};
  ${(props: PropsStyled) => marginCss(props.margin)};
`;

export const DefinitionTermStyled = styled.dt`
  text-align: center;
  font-size: ${(props: PropsStyled) => calculateSize(props.fontSize)};
  text-align: ${(props: PropsStyled) => props.textAlign};
  color: ${(props: PropsStyled) => props.color};
  font-weight: ${(props: PropsStyled) => props.fontWeight};
  ${(props: PropsStyled) => marginCss(props.margin)};
`;