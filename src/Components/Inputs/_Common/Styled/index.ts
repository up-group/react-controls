import {css} from '../../../../Common/theming/themedComponents';

export const sizeMap = {
  xsmall: "40px",
  small: "100px",
  medium: "150px",
  large: "250px",
  xlarge: "350px",
  xxlarge: "500px",
  fill: "100%",
};

export const CommonCheckableStyle = props => css`
  position:relative;
  display: block;
  cursor: pointer;
  min-height: 20px;
  padding-left: 26px;
  text-transform: none;
  line-height: 16px;  
  
  svg {
    margin:4px 4px 4px 0px;
    display:inline-block;
    float:left;
  }

  .up-control-indicator {
    line-height: 1;
    font-family: "Icons16", sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: #f5f8fa;
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #f5f8fa;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    border: none;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip: padding-box;
    cursor: pointer;
    width: 16px;
    height: 16px;
    line-height: 16px;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none; 
  }
 .up-control-indicator::before {
      position: relative;
      content: ""; 
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    z-index:0;
    visibility:hidden;
  }
  input:checked ~ .up-control-indicator, 
  input:indeterminate ~ .up-control-indicator {
    background: #137cbd;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #137cbd;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color: #ffffff; 
  }
  &:hover .up-control-indicator {
    background: #ebf1f5;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #ebf1f5; 
  }
  &:hover input:checked ~ .up-control-indicator, 
  &:hover input:indeterminate ~ .up-control-indicator {
    background: #106ba3;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #106ba3;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); 
  }
  input:not(:disabled):active ~ .up-control-indicator {
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background: #d8e1e8; 
  }
  input:not(:disabled):active:checked ~ .up-control-indicator, 
  input:not(:disabled):active:indeterminate ~ .up-control-indicator {
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background: #0e5a8a; 
  }
  input:focus ~ .up-control-indicator {
    outline: rgba(19, 124, 189, 0.5) auto 2px;
    outline-offset: 2px;
    -moz-outline-radius: 6px; 
  }
  input:disabled ~ .up-control-indicator {
    box-shadow: none;
    background: rgba(206, 217, 224, 0.5);
    cursor: not-allowed; 
  }
  input:disabled:checked ~ .up-control-indicator, 
  input:disabled:indeterminate ~ .up-control-indicator {
    box-shadow: none;
    background: rgba(19, 124, 189, 0.5); 
  }
  .up-control-indicator {
    border-radius: 3px;
    font-size: 16px; 
  }
  input:checked ~ .up-control-indicator::before, 
  input:indeterminate ~ .up-control-indicator::before {
    content: ""; 
  }
  input:indeterminate ~ .up-control-indicator::before {
    content: ""; 
  }
`;