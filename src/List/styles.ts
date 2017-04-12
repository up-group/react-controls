import calculateSize from './styleUtils';
import styled from 'styled-components';
import { PropsStyled } from './types';
import { marginCss } from '../Paragraph/styles';

export const UnorderedListStyled = styled.ul`
  text-align: center;
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