import { Margin } from '../Paragraph';

export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface UpHeadingProps {
  /** To set color*/
  color?: string;
  /** To set the horizontal alignment of a text element*/
  textAlign?: string;
  /** HTML headings*/
  tag?: Tag;
  /** To truncate long texts*/
  truncate?: boolean;
  /** To to capitalize element's text*/
  upcase?: boolean;
  /** To set margin*/
  margin?: Margin;
  /** To add customized className*/
  className?: string;
}
