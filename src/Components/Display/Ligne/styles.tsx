// Imports
import * as React from 'react'
import {UpLigneProps} from './'

const defaultProps: UpLigneProps = {
  color: '#000',
  textAlign: 'center',
};

//export const style = css`
//  text-align: ${(props: UpLigneProps) => props.textAlign || defaultProps.textAlign};
//  color: ${(props: UpLigneProps) => props.color || defaultProps.color};
//  display:'inline-block';
//`;

//export const SpanStyled = styled.span`
//  ${style}
//`;

const LigneStyled: React.StatelessComponent<UpLigneProps> = (props) => {
  const {dataFor, className, children, ...others} = props ;
  var tooltipProps = {} ;
  if (dataFor) {
      tooltipProps = {
          "data-tip": "tooltip",
          "data-for": dataFor
      }
  }
  
  return (<span className={className} {...tooltipProps} {...others}>
      {children}
      </span>)
};

export default LigneStyled