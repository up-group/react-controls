// Imports
//import { Margin } from '../Paragraph';
import UpHeading from './UpHeading'
// Exports
export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface UpHeadingProps {
  color?: string;
  textAlign?: string;
  tag?: Tag;
  truncate?: boolean;
  upcase?: boolean;
  //margin?: Margin;
}

export default UpHeading