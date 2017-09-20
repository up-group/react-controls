// Imports
import UpLigne from './UpLigne' ;

export interface UpLigneProps {
  color?: string;
  textAlign?: string;
  dataFor?:string; // for tooltip
}

export interface UpLignePropsStyledProps extends UpLigneProps {}

export default UpLigne