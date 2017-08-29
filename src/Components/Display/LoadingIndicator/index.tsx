// Adapted from https://grommet.github.io/docs/spinning
import * as React from 'react';
import Box from '../../Containers/Box';
import SvgIcon, { Circle } from './styles';

export type LoadingIndicatorDisplayMode = "inline" | "modal" 

export interface LoadingIndicatorProps extends React.Props<typeof LoadingIndicator> {
  isLoading: boolean;
  displayMode?:LoadingIndicatorDisplayMode;
  message?:string;
  title?:string;
}
export default function LoadingIndicator({
  isLoading,
  displayMode,
  message,
  title
}: LoadingIndicatorProps): JSX.Element {
  if (!isLoading) {
    return null;
  }

  var _displayMode = displayMode ;
  if(_displayMode==null) {
    _displayMode = "inline" ;
  }

  var LoadingRender ;
  if(_displayMode=="inline") {
    LoadingRender = () => (<Box
      boxSize={{ horizontal: 'small' }}
      pad="medium"
      alignItems="center"
      justifyContent="center"
    >
      <SvgIcon viewBox="0 0 48 48">
        <Circle
          cx="24"
          cy="24"
          r="21"
          stroke="#007acc"
          strokeWidth="6"
          fill="none"
        />
      </SvgIcon>
      {message && 
        <p>{message}</p>
      }
    </Box>) ;
  } else {
    LoadingRender = () => (<aside
          className="loading-screen" style={{"position":"fixed","top":0,"right":0,"bottom":0,"left":0,"zIndex":9999,backgroundColor:"white","opacity":0.8}}>
      <div style={{"position":"absolute", "top":"50%", "left":"40%", "marginTop":"-7em"}}>
          <div className="loading-header">
            <SvgIcon viewBox="0 0 48 48">
                <Circle
                  cx="24"
                  cy="24"
                  r="21"
                  stroke="#007acc"
                  strokeWidth="6"
                  fill="none"
                />
              </SvgIcon>
              <hgroup style={{"textShadow": "0px 0px 0.1ex"}} className="">
                  <h3 className="">
                      <span>{title}</span><br />
                  </h3>
              </hgroup>
              <p  className="loading-status text-info"
                  style={{"text-align":"center"}}>{message}</p>
          </div>
      </div>
      </aside>);
  }

  return (
    <LoadingRender />
  );
};
