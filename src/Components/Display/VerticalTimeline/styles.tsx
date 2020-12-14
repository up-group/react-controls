import { style } from "typestyle";

export const getStyles = () => style({
    $nest : {
      '& .up-vertical-align-title' : {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#596664'
      },
      '& .up-vertical-align-content': {
        height: '62px',
        marginLeft: '15px'
      },
      '& .up-vertical-align-content-title': {
        color: '#596664',
        fontSize: '18px'
      },
      '& .up-vertical-align-content-subtitle': {
        color:'#979797',
        fontSize: '14px'
      }
    }
  });
  
  export const verticalAlignStyle = style({
    $nest: {
      '&.up-vertical-align-circle.up-checkmark': {
        color: '#6DBD8E',
        textAlign: 'center',
        $nest:{
          '&::before': {
            content: '"✔"'
          },
        }
      },
      '&.up-vertical-align-circle': {
        border: `2px solid #6DBD8E`,
        height: 25,
        width: 25,
        boxSizing: 'border-box',
        borderRadius: '50%',
      },
      '&.up-vertical-align-line': {
        height: 37,
        borderRight: `4px solid #6DBD8E`,
        margin: 'auto',
      },
      '&.up-vertical-align-inactive': {
        borderColor: '#979797',
      },
    },
  });