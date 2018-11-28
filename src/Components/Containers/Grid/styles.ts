import { media, style } from "typestyle";

// Imports 
export const GridStyles : string = style(
  {
    $nest : {
      '& .up-row' : {
        position: 'relative',
        marginLeft: 0,
        marginRight: 0,
        height: 'auto',
        zoom: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      '& .up-row:before,.up-row:after' : {
        content: " ",
        display: 'table',
      },
      '& .up-row:after' : {
        clear: 'both',
        visibility: 'hidden',
        fontSize: 0,
        height: 0,
      },
      '& .up-row-flex' : {
        display: 'flex',
        '-webkit-box-orient': 'horizontal',
        '-webkit-box-direction': 'normal',
        '-webkit-flex-direction': 'row',
        '-ms-flex-direction': 'row',
        flexDirection: 'row',
        '-webkit-flex-wrap': 'wrap',
        '-ms-flex-wrap': 'wrap',
        flexWrap: 'wrap',
      },
      '& .up-row-flex:before,& .up-row-flex:after' : {
        display: 'flex',
      },
      '& .up-row-flex-start' : {
        '-webkit-box-pack': 'start',
        '-webkit-justify-content': 'flex-start',
        '-ms-flex-pack': 'start',
        justifyContent: 'flex-start',
      },
      '& .up-row-flex-center' : {
        '-webkit-box-pack': 'center',
        '-webkit-justify-content': 'center',
        '-ms-flex-pack': 'center',
        justifyContent: 'center',
      },
      '& .up-row-flex-end' : {
        '-webkit-box-pack': 'end',
        '-webkit-justify-content': 'flex-end',
        '-ms-flex-pack': 'end',
        justifyContent: 'flex-end',
      },
      '& .up-row-flex-space-between' : {
        '-webkit-box-pack': 'justify',
        '-webkit-justify-content': 'space-between',
        '-ms-flex-pack': 'justify',
        justifyContent: 'space-between',
      },
      '& .up-row-flex-space-around' : {
        '-webkit-justify-content': 'space-around',
        '-ms-flex-pack': 'distribute',
        justifycontent: 'space-around',
      },
      '& .up-row-flex-top' : {
        '-webkit-box-align': 'start',
        '-webkit-align-items': 'flex-start',
        '-ms-flex-align': 'start',
        alignItems: 'flex-start',
      },
      '& .up-row-flex-middle' : {
        '-webkit-box-align': 'center',
        '-webkit-align-items': 'center',
        '-ms-flex-align': 'center',
        alignItems: 'center',
    },
    '& .up-row-flex-bottom' : {
      '-webkit-box-align': 'end',
      '-webkit-align-items': 'flex-end',
      '-ms-flex-align': 'end',
      alignItems: 'flex-end',
    },
    '& .up-col' : {
      position: 'relative',
      display: 'block',
    },
    '.up-col-1, .up-col-xs-1, .up-col-sm-1, .up-col-md-1, .up-col-lg-1, .up-col-2, .up-col-xs-2, .up-col-sm-2, .up-col-md-2, .up-col-lg-2, .up-col-3, .up-col-xs-3, .up-col-sm-3, .up-col-md-3, .up-col-lg-3, .up-col-4, .up-col-xs-4, .up-col-sm-4, .up-col-md-4, .up-col-lg-4, .up-col-5, .up-col-xs-5, .up-col-sm-5, .up-col-md-5, .up-col-lg-5, .up-col-6, .up-col-xs-6, .up-col-sm-6, .up-col-md-6, .up-col-lg-6, .up-col-7, .up-col-xs-7, .up-col-sm-7, .up-col-md-7, .up-col-lg-7, .up-col-8, .up-col-xs-8, .up-col-sm-8, .up-col-md-8, .up-col-lg-8, .up-col-9, .up-col-xs-9, .up-col-sm-9, .up-col-md-9, .up-col-lg-9, .up-col-10, .up-col-xs-10, .up-col-sm-10, .up-col-md-10, .up-col-lg-10, .up-col-11, .up-col-xs-11, .up-col-sm-11, .up-col-md-11, .up-col-lg-11, .up-col-12, .up-col-xs-12, .up-col-sm-12, .up-col-md-12, .up-col-lg-12, .up-col-13, .up-col-xs-13, .up-col-sm-13, .up-col-md-13, .up-col-lg-13, .up-col-14, .up-col-xs-14, .up-col-sm-14, .up-col-md-14, .up-col-lg-14, .up-col-15, .up-col-xs-15, .up-col-sm-15, .up-col-md-15, .up-col-lg-15, .up-col-16, .up-col-xs-16, .up-col-sm-16, .up-col-md-16, .up-col-lg-16, .up-col-17, .up-col-xs-17, .up-col-sm-17, .up-col-md-17, .up-col-lg-17, .up-col-18, .up-col-xs-18, .up-col-sm-18, .up-col-md-18, .up-col-lg-18, .up-col-19, .up-col-xs-19, .up-col-sm-19, .up-col-md-19, .up-col-lg-19, .up-col-20, .up-col-xs-20, .up-col-sm-20, .up-col-md-20, .up-col-lg-20, .up-col-21, .up-col-xs-21, .up-col-sm-21, .up-col-md-21, .up-col-lg-21, .up-col-22, .up-col-xs-22, .up-col-sm-22, .up-col-md-22, .up-col-lg-22, .up-col-23, .up-col-xs-23, .up-col-sm-23, .up-col-md-23, .up-col-lg-23, .up-col-24, .up-col-xs-24, .up-col-sm-24, .up-col-md-24, .up-col-lg-24' : {
      position: 'relative',
      minHeight: '1px',
      paddingLeft: 0,
      paddingRight: 0,
    },
    '.up-col-1, .up-col-2, .up-col-3, .up-col-4, .up-col-5, .up-col-6, .up-col-7, .up-col-8, .up-col-9, .up-col-10, .up-col-11, .up-col-12, .up-col-13, .up-col-14, .up-col-15, .up-col-16, .up-col-17, .up-col-18, .up-col-19, .up-col-20, .up-col-21, .up-col-22, .up-col-23, .up-col-24' : {
      '-webkit-box-flex': 0,
      '-webkit-flex': '0 0 auto',
          '-ms-flex': '0 0 auto',
              flex: '0 0 auto',
    },
    '& .up-col-24' : {
      display: 'block',
      width: '100%',
    },
    '& .up-col-push-24' : {
      left: '100%',
    },
    '& .up-col-pull-24' : {
      right: '100%',
    },
    '& .up-col-offset-24' : {
      marginLeft: '100%',
    },
    '& .up-col-order-24' : {
      '-webkit-box-ordinal-group': 25,
      '-webkit-order': 24,
      '-ms-flex-order': 24,
      order: 24,
    },
    '& .up-col-23' : {
      display: 'block',
      width: '95.83333333%',
    },
    '& .up-col-push-23' : {
      left: '95.83333333%',
    },
    '& .up-col-pull-23' : {
      right: '95.83333333%',
    },
    '& .up-col-offset-23' : {
      marginLeft:'95.83333333%',
    },
    '& .up-col-order-23' : {
      '-webkit-box-ordinal-group': 24,
      '-webkit-order': 23,
          '-ms-flex-order': 23,
              order: 23,
    },
    '& .up-col-22' : {
      display: 'block',
      width: '91.66666667%',
    },
    '.up-col-push-22' : {
      left: '91.66666667%',
    },
    '.up-col-pull-22' : {
      right: '91.66666667%',
    },
    '.up-col-offset-22' : {
      marginLeft: '91.66666667%',
    },
    '.up-col-order-22' : {
      '-webkit-box-ordinal-group': 23,
      '-webkit-order': 22,
          '-ms-flex-order': 22,
              order: 22,
    },
    '.up-col-21' : {
      display: 'block',
      width: '87.5%',
    },
    '.up-col-push-21' : {
      left: '87.5%',
    },
    '.up-col-pull-21' : {
      right: '87.5%',
    },
    '.up-col-offset-21' : {
      marginLeft: '87.5%',
    },
    '.up-col-order-21' : {
      '-webkit-box-ordinal-group': 22,
      '-webkit-order': 21,
          '-ms-flex-order': 21,
              order: 21,
    },
    '.up-col-20' : {
      display: 'block',
      width:'83.33333333%',
    },
  '.up-col-push-20' : {
    left:'83.33333333%',
  },
  '.up-col-pull-20' : {
    right:'83.33333333%',
  },
  '.up-col-offset-20' : {
    marginLeft:'83.33333333%',
  },
  '.up-col-order-20' : {
    '-webkit-box-ordinal-group': 21,
    '-webkit-order': 20,
        '-ms-flex-order': 20,
            order: 20,
  },
  '.up-col-19' : {
    display: 'block',
    width:'79.16666667%',
  },
  '.up-col-push-19' : {
    left:'79.16666667%',
  },
  '.up-col-pull-19' : {
    right:'79.16666667%',
  },
  '.up-col-offset-19' : {
    marginLeft:'79.16666667%',
  },
  '.up-col-order-19' : {
    '-webkit-box-ordinal-group': 20,
    '-webkit-order': 19,
        '-ms-flex-order': 19,
            order: 19,
  },
  '.up-col-18' : {
    display: 'block',
    width: '75%',
  },
  '.up-col-push-18' : {
    left: '75%',
  },
  '.up-col-pull-18' : {
    right: '75%',
  },
  '.up-col-offset-18' : {
    marginLeft: '75%',
  },
  '.up-col-order-18' : {
    '-webkit-box-ordinal-group': 19,
    '-webkit-order': 18,
        '-ms-flex-order': 18,
            order: 18,
  },
  '.up-col-17' : {
    display: 'block',
    width:'70.83333333%',
  },
  '.up-col-push-17' : {
    left:'70.83333333%',
  },
  '.up-col-pull-17' : {
    right:'70.83333333%',
  },
  '.up-col-offset-17' : {
    marginLeft:'70.83333333%',
  },
  '.up-col-order-17' : {
    '-webkit-box-ordinal-group': 18,
    '-webkit-order': 17,
        '-ms-flex-order': 17,
            order: 17,
  },
  '.up-col-16' : {
    display: 'block',
    width:'66.66666667%',
  },
  '.up-col-push-16' : {
    left:'66.66666667%',
  },
  '.up-col-pull-16' : {
    right:'66.66666667%',
  },
  '.up-col-offset-16' : {
    marginLeft:'66.66666667%',
  },
  '.up-col-order-16' : {
    '-webkit-box-ordinal-group': 17,
    '-webkit-order': 16,
        '-ms-flex-order': 16,
            order: 16,
  },
  '.up-col-15' : {
    display: 'block',
    width:'62.5%',
  },
  '.up-col-push-15' : {
    left:'62.5%',
  },
  '.up-col-pull-15' : {
    right:'62.5%',
  },
  '.up-col-offset-15' : {
    marginLeft:'62.5%',
  },
  '.up-col-order-15' : {
    '-webkit-box-ordinal-group': 16,
    '-webkit-order': 15,
        '-ms-flex-order': 15,
            order: 15,
  },
  '.up-col-14' : {
    display: 'block',
    width:'58.33333333%',
  },
  '.up-col-push-14' : {
    left:'58.33333333%',
  },
  '.up-col-pull-14' : {
    right:'58.33333333%',
  },
  '.up-col-offset-14' : {
    marginLeft:'58.33333333%',
  },
  '.up-col-order-14' : {
    '-webkit-box-ordinal-group': 15,
    '-webkit-order': 14,
        '-ms-flex-order': 14,
            order: 14,
  },
  '.up-col-13' : {
    display: 'block',
    width:'54.16666667%',
  },
  '.up-col-push-13' : {
    left:'54.16666667%',
  },
  '.up-col-pull-13' : {
    right:'54.16666667%',
  },
  '.up-col-offset-13' : {
    marginLeft:'54.16666667%',
  },
  '.up-col-order-13' : {
    '-webkit-box-ordinal-group': 14,
    '-webkit-order': 13,
        '-ms-flex-order': 13,
            order: 13,
  },
  '.up-col-12' : {
    display: 'block',
    width: '50%',
  },
  '.up-col-push-12' : {
    left: '50%',
  },
  '.up-col-pull-12' : {
    right: '50%',
  },
  '.up-col-offset-12' : {
    marginLeft: '50%',
  },
  '.up-col-order-12' : {
    '-webkit-box-ordinal-group': 13,
    '-webkit-order': 12,
        '-ms-flex-order': 12,
            order: 12,
  },
  '.up-col-11' : {
    display: 'block',
    width:'45.83333333%',
  },
  '.up-col-push-11' : {
    left:'45.83333333%',
  },
  '.up-col-pull-11' : {
    right:'45.83333333%',
  },
  '.up-col-offset-11' : {
    marginLeft:'45.83333333%',
  },
  '.up-col-order-11' : {
    '-webkit-box-ordinal-group': 12,
    '-webkit-order': 11,
        '-ms-flex-order': 11,
            order: 11,
  },
  '.up-col-10' : {
    display: 'block',
    width:'41.66666667%',
  },
  '.up-col-push-10' : {
    left:'41.66666667%',
  },
  '.up-col-pull-10' : {
    right:'41.66666667%',
  },
  '.up-col-offset-10' : {
    marginLeft:'41.66666667%',
  },
  '.up-col-order-10' : {
    '-webkit-box-ordinal-group': 11,
    '-webkit-order': 10,
        '-ms-flex-order': 10,
            order: 10,
  },
  '.up-col-9' : {
    display: 'block',
    width:'37.5%',
  },
  '.up-col-push-9' : {
    left:'37.5%',
  },
  '.up-col-pull-9' : {
    right:'37.5%',
  },
  '.up-col-offset-9' : {
    marginLeft:'37.5%',
  },
  '.up-col-order-9' : {
    '-webkit-box-ordinal-group': 10,
    '-webkit-order': 9,
        '-ms-flex-order': 9,
            order: 9,
  },
  '.up-col-8' : {
    display: 'block',
    width:'33.33333333%',
  },
  '.up-col-push-8' : {
    left:'33.33333333%',
  },
  '.up-col-pull-8' : {
    right:'33.33333333%',
  },
  '.up-col-offset-8' : {
    marginLeft:'33.33333333%',
  },
  '.up-col-order-8' : {
    '-webkit-box-ordinal-group': 9,
    '-webkit-order': 8,
        '-ms-flex-order': 8,
            order: 8,
  },
  '.up-col-7' : {
    display: 'block',
    width:'29.16666667%',
  },
  '.up-col-push-7' : {
    left:'29.16666667%',
  },
  '.up-col-pull-7' : {
    right:'29.16666667%',
  },
  '.up-col-offset-7' : {
    marginLeft:'29.16666667%',
  },
  '.up-col-order-7' : {
    '-webkit-box-ordinal-group': 8,
    '-webkit-order': 7,
        '-ms-flex-order': 7,
            order: 7,
  },
  '.up-col-6' : {
    display: 'block',
    width: '25%',
  },
  '.up-col-push-6' : {
    left: '25%',
  },
  '.up-col-pull-6' : {
    right: '25%',
  },
  '.up-col-offset-6' : {
    marginLeft: '25%',
  },
  '.up-col-order-6' : {
    '-webkit-box-ordinal-group': 7,
    '-webkit-order': 6,
        '-ms-flex-order': 6,
            order: 6,
  },
  '.up-col-5' : {
    display: 'block',
    width:'20.83333333%',
  },
  '.up-col-push-5' : {
    left:'20.83333333%',
  },
  '.up-col-pull-5' : {
    right:'20.83333333%',
  },
  '.up-col-offset-5' : {
    marginLeft:'20.83333333%',
  },
  '.up-col-order-5' : {
    '-webkit-box-ordinal-group': 6,
    '-webkit-order': 5,
        '-ms-flex-order': 5,
            order: 5,
  },
  '.up-col-4' : {
    display: 'block',
    width:'16.66666667%',
  },
  '.up-col-push-4' : {
    left:'16.66666667%',
  },
  '.up-col-pull-4' : {
    right:'16.66666667%',
  },
  '.up-col-offset-4' : {
    marginLeft:'16.66666667%',
  },
  '.up-col-order-4' : {
    '-webkit-box-ordinal-group': 5,
    '-webkit-order': 4,
        '-ms-flex-order': 4,
            order: 4,
  },
  '.up-col-3' : {
    display: 'block',
    width:'12.5%',
  },
  '.up-col-push-3' : {
    left:'12.5%',
  },
  '.up-col-pull-3' : {
    right:'12.5%',
  },
  '.up-col-offset-3' : {
    marginLeft:'12.5%',
  },
  '.up-col-order-3' : {
    '-webkit-box-ordinal-group': 4,
    '-webkit-order': 3,
        '-ms-flex-order': 3,
            order: 3,
  },
  '.up-col-2' : {
    display: 'block',
    width:'8.33333333%',
  },
  '.up-col-push-2' : {
    left:'8.33333333%',
  },
  '.up-col-pull-2' : {
    right:'8.33333333%',
  },
  '.up-col-offset-2' : {
    marginLeft:'8.33333333%',
  },
  '.up-col-order-2' : {
    '-webkit-box-ordinal-group': 3,
    '-webkit-order': 2,
        '-ms-flex-order': 2,
            order: 2,
  },
  '.up-col-1' : {
    display: 'block',
    width:'4.16666667%',
  },
  '.up-col-push-1' : {
    left:'4.16666667%',
  },
  '.up-col-pull-1' : {
    right:'4.16666667%',
  },
  '.up-col-offset-1' : {
    marginLeft:'4.16666667%',
  },
  '.up-col-order-1' : {
    '-webkit-box-ordinal-group': 2,
    '-webkit-order': 1,
        '-ms-flex-order': 1,
            order: 1,
  },
  '.up-col-0' : {
    display: 'none',
  },
  '.up-col-push-0' : {
    left: 'auto',
  },
  '.up-col-pull-0' : {
    right: 'auto',
  },
  '.up-col-offset-0' : {
    marginLeft: 0,
  },
  '.up-col-order-0' : {
    '-webkit-box-ordinal-group': 1,
    '-webkit-order': 0,
        '-ms-flex-order': 0,
            order: 0,
  },
  '.up-col-xs-1, .up-col-xs-2, .up-col-xs-3, .up-col-xs-4, .up-col-xs-5, .up-col-xs-6, .up-col-xs-7, .up-col-xs-8, .up-col-xs-9, .up-col-xs-10, .up-col-xs-11, .up-col-xs-12, .up-col-xs-13, .up-col-xs-14, .up-col-xs-15, .up-col-xs-16, .up-col-xs-17, .up-col-xs-18, .up-col-xs-19, .up-col-xs-20, .up-col-xs-21, .up-col-xs-22, .up-col-xs-23, .up-col-xs-24' : {
    '-webkit-box-flex': 0,
    '-webkit-flex': '0 0 auto',
        '-ms-flex': '0 0 auto',
            flex: '0 0 auto',
  },
  '.up-col-xs-24' : {
    display: 'block',
    width: '100%',
  },
  '.up-col-xs-push-24' : {
    left: '100%',
  },
  '.up-col-xs-pull-24' : {
    right: '100%',
  },
  '.up-col-xs-offset-24' : {
    marginLeft: '100%',
  },
  '.up-col-xs-order-24' : {
    '-webkit-box-ordinal-group': 25,
    '-webkit-order': 24,
        '-ms-flex-order': 24,
            order: 24,
  },
  '.up-col-xs-23' : {
    display: 'block',
    width:'95.83333333%',
  },
  '.up-col-xs-push-23' : {
    left:'95.83333333%',
  },
  '.up-col-xs-pull-23' : {
    right:'95.83333333%',
  },
  '.up-col-xs-offset-23' : {
    marginLeft:'95.83333333%',
  },
  '.up-col-xs-order-23' : {
    '-webkit-box-ordinal-group': 24,
    '-webkit-order': 23,
        '-ms-flex-order': 23,
            order: 23,
  },
  '.up-col-xs-22' : {
    display: 'block',
    width:'91.66666667%',
  },
  '.up-col-xs-push-22' : {
    left:'91.66666667%',
  },
  '.up-col-xs-pull-22' : {
    right:'91.66666667%',
  },
  '.up-col-xs-offset-22' : {
    marginLeft:'91.66666667%',
  },
  '.up-col-xs-order-22' : {
    '-webkit-box-ordinal-group': 23,
    '-webkit-order': 22,
        '-ms-flex-order': 22,
            order: 22,
  },
  '.up-col-xs-21' : {
    display: 'block',
    width:'87.5%',
  },
  '.up-col-xs-push-21' : {
    left:'87.5%',
  },
  '.up-col-xs-pull-21' : {
    right:'87.5%',
  },
  '.up-col-xs-offset-21' : {
    marginLeft:'87.5%',
  },
  '.up-col-xs-order-21' : {
    '-webkit-box-ordinal-group': 22,
    '-webkit-order': 21,
        '-ms-flex-order': 21,
            order: 21,
  },
  '.up-col-xs-20' : {
    display: 'block',
    width:'83.33333333%',
  },
  '.up-col-xs-push-20' : {
    left:'83.33333333%',
  },
  '.up-col-xs-pull-20' : {
    right:'83.33333333%',
  },
  '.up-col-xs-offset-20' : {
    marginLeft:'83.33333333%',
  },
  '.up-col-xs-order-20' : {
    '-webkit-box-ordinal-group': 21,
    '-webkit-order': 20,
        '-ms-flex-order': 20,
            order: 20,
  },
  '.up-col-xs-19' : {
    display: 'block',
    width:'79.16666667%',
  },
  '.up-col-xs-push-19' : {
    left:'79.16666667%',
  },
  '.up-col-xs-pull-19' : {
    right:'79.16666667%',
  },
  '.up-col-xs-offset-19' : {
    marginLeft:'79.16666667%',
  },
  '.up-col-xs-order-19' : {
    '-webkit-box-ordinal-group': 20,
    '-webkit-order': 19,
        '-ms-flex-order': 19,
            order: 19,
  },
  '.up-col-xs-18' : {
    display: 'block',
    width: '75%',
  },
  '.up-col-xs-push-18' : {
    left: '75%',
  },
  '.up-col-xs-pull-18' : {
    right: '75%',
  },
  '.up-col-xs-offset-18' : {
    marginLeft: '75%',
  },
  '.up-col-xs-order-18' : {
    '-webkit-box-ordinal-group': 19,
    '-webkit-order': 18,
        '-ms-flex-order': 18,
            order: 18,
  },
  '.up-col-xs-17' : {
    display: 'block',
    width:'70.83333333%',
  },
  '.up-col-xs-push-17' : {
    left:'70.83333333%',
  },
  '.up-col-xs-pull-17' : {
    right:'70.83333333%',
  },
  '.up-col-xs-offset-17' : {
    marginLeft:'70.83333333%',
  },
  '.up-col-xs-order-17' : {
    '-webkit-box-ordinal-group': 18,
    '-webkit-order': 17,
        '-ms-flex-order': 17,
            order: 17,
  },
  '.up-col-xs-16' : {
    display: 'block',
    width:'66.66666667%',
  },
  '.up-col-xs-push-16' : {
    left:'66.66666667%',
  },
  '.up-col-xs-pull-16' : {
    right:'66.66666667%',
  },
  '.up-col-xs-offset-16' : {
    marginLeft:'66.66666667%',
  },
  '.up-col-xs-order-16' : {
    '-webkit-box-ordinal-group': 17,
    '-webkit-order': 16,
        '-ms-flex-order': 16,
            order: 16,
  },
  '.up-col-xs-15' : {
    display: 'block',
    width:'62.5%',
  },
  '.up-col-xs-push-15' : {
    left:'62.5%',
  },
  '.up-col-xs-pull-15' : {
    right:'62.5%',
  },
  '.up-col-xs-offset-15' : {
    marginLeft:'62.5%',
  },
  '.up-col-xs-order-15' : {
    '-webkit-box-ordinal-group': 16,
    '-webkit-order': 15,
        '-ms-flex-order': 15,
            order: 15,
  },
  '.up-col-xs-14' : {
    display: 'block',
    width:'58.33333333%',
  },
  '.up-col-xs-push-14' : {
    left:'58.33333333%',
  },
  '.up-col-xs-pull-14' : {
    right:'58.33333333%',
  },
  '.up-col-xs-offset-14' : {
    marginLeft:'58.33333333%',
  },
  '.up-col-xs-order-14' : {
    '-webkit-box-ordinal-group': 15,
    '-webkit-order': 14,
        '-ms-flex-order': 14,
            order: 14,
  },
  '.up-col-xs-13' : {
    display: 'block',
    width:'54.16666667%',
  },
  '.up-col-xs-push-13' : {
    left:'54.16666667%',
  },
  '.up-col-xs-pull-13' : {
    right:'54.16666667%',
  },
  '.up-col-xs-offset-13' : {
    marginLeft:'54.16666667%',
  },
  '.up-col-xs-order-13' : {
    '-webkit-box-ordinal-group': 14,
    '-webkit-order': 13,
        '-ms-flex-order': 13,
            order: 13,
  },
  '.up-col-xs-12' : {
    display: 'block',
    width: '50%',
  },
  '.up-col-xs-push-12' : {
    left: '50%',
  },
  '.up-col-xs-pull-12' : {
    right: '50%',
  },
  '.up-col-xs-offset-12' : {
    marginLeft: '50%',
  },
  '.up-col-xs-order-12' : {
    '-webkit-box-ordinal-group': 13,
    '-webkit-order': 12,
        '-ms-flex-order': 12,
            order: 12,
  },
  '.up-col-xs-11' : {
    display: 'block',
    width:'45.83333333%',
  },
  '.up-col-xs-push-11' : {
    left:'45.83333333%',
  },
  '.up-col-xs-pull-11' : {
    right:'45.83333333%',
  },
  '.up-col-xs-offset-11' : {
    marginLeft:'45.83333333%',
  },
  '.up-col-xs-order-11' : {
    '-webkit-box-ordinal-group': 12,
    '-webkit-order': 11,
        '-ms-flex-order': 11,
            order: 11,
  },
  '.up-col-xs-10' : {
    display: 'block',
    width:'41.66666667%',
  },
  '.up-col-xs-push-10' : {
    left:'41.66666667%',
  },
  '.up-col-xs-pull-10' : {
    right:'41.66666667%',
  },
  '.up-col-xs-offset-10' : {
    marginLeft:'41.66666667%',
  },
  '.up-col-xs-order-10' : {
    '-webkit-box-ordinal-group': 11,
    '-webkit-order': 10,
        '-ms-flex-order': 10,
            order: 10,
  },
  '.up-col-xs-9' : {
    display: 'block',
    width:'37.5%',
  },
  '.up-col-xs-push-9' : {
    left:'37.5%',
  },
  '.up-col-xs-pull-9' : {
    right:'37.5%',
  },
  '.up-col-xs-offset-9' : {
    marginLeft:'37.5%',
  },
  '.up-col-xs-order-9' : {
    '-webkit-box-ordinal-group': 10,
    '-webkit-order': 9,
        '-ms-flex-order': 9,
            order: 9,
  },
  '.up-col-xs-8' : {
    display: 'block',
    width:'33.33333333%',
  },
  '.up-col-xs-push-8' : {
    left:'33.33333333%',
  },
  '.up-col-xs-pull-8' : {
    right:'33.33333333%',
  },
  '.up-col-xs-offset-8' : {
    marginLeft:'33.33333333%',
  },
  '.up-col-xs-order-8' : {
    '-webkit-box-ordinal-group': 9,
    '-webkit-order': 8,
        '-ms-flex-order': 8,
            order: 8,
  },
  '.up-col-xs-7' : {
    display: 'block',
    width:'29.16666667%',
  },
  '.up-col-xs-push-7' : {
    left:'29.16666667%',
  },
  '.up-col-xs-pull-7' : {
    right:'29.16666667%',
  },
  '.up-col-xs-offset-7' : {
    marginLeft:'29.16666667%',
  },
  '.up-col-xs-order-7' : {
    '-webkit-box-ordinal-group': 8,
    '-webkit-order': 7,
        '-ms-flex-order': 7,
            order: 7,
  },
  '.up-col-xs-6' : {
    display: 'block',
    width: '25%',
  },
  '.up-col-xs-push-6' : {
    left: '25%',
  },
  '.up-col-xs-pull-6' : {
    right: '25%',
  },
  '.up-col-xs-offset-6' : {
    marginLeft: '25%',
  },
  '.up-col-xs-order-6' : {
    '-webkit-box-ordinal-group': 7,
    '-webkit-order': 6,
        '-ms-flex-order': 6,
            order: 6,
  },
  '.up-col-xs-5' : {
    display: 'block',
    width:'20.83333333%',
  },
  '.up-col-xs-push-5' : {
    left:'20.83333333%',
  },
  '.up-col-xs-pull-5' : {
    right:'20.83333333%',
  },
  '.up-col-xs-offset-5' : {
    marginLeft:'20.83333333%',
  },
  '.up-col-xs-order-5' : {
    '-webkit-box-ordinal-group': 6,
    '-webkit-order': 5,
        '-ms-flex-order': 5,
            order: 5,
  },
  '.up-col-xs-4' : {
    display: 'block',
    width:'16.66666667%',
  },
  '.up-col-xs-push-4' : {
    left:'16.66666667%',
  },
  '.up-col-xs-pull-4' : {
    right:'16.66666667%',
  },
  '.up-col-xs-offset-4' : {
    marginLeft:'16.66666667%',
  },
  '.up-col-xs-order-4' : {
    '-webkit-box-ordinal-group': 5,
    '-webkit-order': 4,
        '-ms-flex-order': 4,
            order: 4,
  },
  '.up-col-xs-3' : {
    display: 'block',
    width:'12.5%',
  },
  '.up-col-xs-push-3' : {
    left:'12.5%',
  },
  '.up-col-xs-pull-3' : {
    right:'12.5%',
  },
  '.up-col-xs-offset-3' : {
    marginLeft:'12.5%',
  },
  '.up-col-xs-order-3' : {
    '-webkit-box-ordinal-group': 4,
    '-webkit-order': 3,
        '-ms-flex-order': 3,
            order: 3,
  },
  '.up-col-xs-2' : {
    display: 'block',
    width:'8.33333333%',
  },
  '.up-col-xs-push-2' : {
    left:'8.33333333%',
  },
  '.up-col-xs-pull-2' : {
    right:'8.33333333%',
  },
  '.up-col-xs-offset-2' : {
    marginLeft:'8.33333333%',
  },
  '.up-col-xs-order-2' : {
    '-webkit-box-ordinal-group': 3,
    '-webkit-order': 2,
        '-ms-flex-order': 2,
            order: 2,
  },
  '.up-col-xs-1' : {
    display: 'block',
    width:'4.16666667%',
  },
  '.up-col-xs-push-1' : {
    left:'4.16666667%',
  },
  '.up-col-xs-pull-1' : {
    right:'4.16666667%',
  },
  '.up-col-xs-offset-1' : {
    marginLeft:'4.16666667%',
  },
  '.up-col-xs-order-1' : {
    '-webkit-box-ordinal-group': 2,
    '-webkit-order': 1,
        '-ms-flex-order': 1,
            order: 1,
  },
  '.up-col-xs-0' : {
    display: 'none',
  },
  '.up-col-xs-push-0' : {
    left: 'auto',
  },
  '.up-col-xs-pull-0' : {
    right: 'auto',
  },
  '.up-col-xs-offset-0' : {
    marginLeft: 0,
  },
  '.up-col-xs-order-0' : {
    '-webkit-box-ordinal-group': 1,
    '-webkit-order': 0,
        '-ms-flex-order': 0,
            order: 0,
  }
    }
  },
  media ({minWidth: '768px'}, 
  {
    $nest : {
    '.up-col-sm-1, .up-col-sm-2, .up-col-sm-3, .up-col-sm-4, .up-col-sm-5, .up-col-sm-6, .up-col-sm-7, .up-col-sm-8, .up-col-sm-9, .up-col-sm-10, .up-col-sm-11, .up-col-sm-12, .up-col-sm-13, .up-col-sm-14, .up-col-sm-15, .up-col-sm-16, .up-col-sm-17, .up-col-sm-18, .up-col-sm-19, .up-col-sm-20, .up-col-sm-21, .up-col-sm-22, .up-col-sm-23, .up-col-sm-24' : {
    '-webkit-box-flex': 0,
    '-webkit-flex': '0 0 auto',
        '-ms-flex': '0 0 auto',
            flex: '0 0 auto',
    },
    '.up-col-sm-24' : {
      display: 'block',
      width: '100%',
    },
    '.up-col-sm-push-24' : {
      left: '100%',
    },
    '.up-col-sm-pull-24' : {
      right: '100%',
    },
    '.up-col-sm-offset-24' : {
      marginLeft: '100%',
    },
    '.up-col-sm-order-24' : {
      '-webkit-box-ordinal-group': 25,
      '-webkit-order': 24,
          '-ms-flex-order': 24,
              order: 24,
    },
    '.up-col-sm-23' : {
      display: 'block',
      width:'95.83333333%',
    },
    '.up-col-sm-push-23' : {
      left:'95.83333333%',
    },
    '.up-col-sm-pull-23' : {
      right:'95.83333333%',
    },
    '.up-col-sm-offset-23' : {
      marginLeft:'95.83333333%',
    },
    '.up-col-sm-order-23' : {
      '-webkit-box-ordinal-group': 24,
      '-webkit-order': 23,
          '-ms-flex-order': 23,
              order: 23,
    },
    '.up-col-sm-22' : {
      display: 'block',
      width:'91.66666667%',
    },
    '.up-col-sm-push-22' : {
      left:'91.66666667%',
    },
    '.up-col-sm-pull-22' : {
      right:'91.66666667%',
    },
    '.up-col-sm-offset-22' : {
      marginLeft:'91.66666667%',
    },
    '.up-col-sm-order-22' : {
      '-webkit-box-ordinal-group': 23,
      '-webkit-order': 22,
          '-ms-flex-order': 22,
              order: 22,
    },
    '.up-col-sm-21' : {
      display: 'block',
      width:'87.5%',
    },
    '.up-col-sm-push-21' : {
      left:'87.5%',
    },
    '.up-col-sm-pull-21' : {
      right:'87.5%',
    },
    '.up-col-sm-offset-21' : {
      marginLeft:'87.5%',
    },
    '.up-col-sm-order-21' : {
      '-webkit-box-ordinal-group': 22,
      '-webkit-order': 21,
          '-ms-flex-order': 21,
              order: 21,
    },
    '.up-col-sm-20' : {
      display: 'block',
      width:'83.33333333%',
    },
    '.up-col-sm-push-20' : {
      left:'83.33333333%',
    },
    '.up-col-sm-pull-20' : {
      right:'83.33333333%',
    },
    '.up-col-sm-offset-20' : {
      marginLeft:'83.33333333%',
    },
    '.up-col-sm-order-20' : {
      '-webkit-box-ordinal-group': 21,
      '-webkit-order': 20,
          '-ms-flex-order': 20,
              order: 20,
    },
    '.up-col-sm-19' : {
      display: 'block',
      width:'79.16666667%',
    },
    '.up-col-sm-push-19' : {
      left:'79.16666667%',
    },
    '.up-col-sm-pull-19' : {
      right:'79.16666667%',
    },
    '.up-col-sm-offset-19' : {
      marginLeft:'79.16666667%',
    },
    '.up-col-sm-order-19' : {
      '-webkit-box-ordinal-group': 20,
      '-webkit-order': 19,
          '-ms-flex-order': 19,
              order: 19,
    },
    '.up-col-sm-18' : {
      display: 'block',
      width: '75%',
    },
    '.up-col-sm-push-18' : {
      left: '75%',
    },
    '.up-col-sm-pull-18' : {
      right: '75%',
    },
    '.up-col-sm-offset-18' : {
      marginLeft: '75%',
    },
    '.up-col-sm-order-18' : {
      '-webkit-box-ordinal-group': 19,
      '-webkit-order': 18,
          '-ms-flex-order': 18,
              order: 18,
    },
    '.up-col-sm-17' : {
      display: 'block',
      width:'70.83333333%',
    },
    '.up-col-sm-push-17' : {
      left:'70.83333333%',
    },
    '.up-col-sm-pull-17' : {
      right:'70.83333333%',
    },
    '.up-col-sm-offset-17' : {
      marginLeft:'70.83333333%',
    },
    '.up-col-sm-order-17' : {
      '-webkit-box-ordinal-group': 18,
      '-webkit-order': 17,
          '-ms-flex-order': 17,
              order: 17,
    },
    '.up-col-sm-16' : {
      display: 'block',
      width:'66.66666667%',
    },
    '.up-col-sm-push-16' : {
      left:'66.66666667%',
    },
    '.up-col-sm-pull-16' : {
      right:'66.66666667%',
    },
    '.up-col-sm-offset-16' : {
      marginLeft:'66.66666667%',
    },
    '.up-col-sm-order-16' : {
      '-webkit-box-ordinal-group': 17,
      '-webkit-order': 16,
          '-ms-flex-order': 16,
              order: 16,
    },
    '.up-col-sm-15' : {
      display: 'block',
      width:'62.5%',
    },
    '.up-col-sm-push-15' : {
      left:'62.5%',
    },
    '.up-col-sm-pull-15' : {
      right:'62.5%',
    },
    '.up-col-sm-offset-15' : {
      marginLeft:'62.5%',
    },
    '.up-col-sm-order-15' : {
      '-webkit-box-ordinal-group': 16,
      '-webkit-order': 15,
          '-ms-flex-order': 15,
              order: 15,
    },
    '.up-col-sm-14' : {
      display: 'block',
      width:'58.33333333%',
    },
    '.up-col-sm-push-14' : {
      left:'58.33333333%',
    },
    '.up-col-sm-pull-14' : {
      right:'58.33333333%',
    },
    '.up-col-sm-offset-14' : {
      marginLeft:'58.33333333%',
    },
    '.up-col-sm-order-14' : {
      '-webkit-box-ordinal-group': 15,
      '-webkit-order': 14,
          '-ms-flex-order': 14,
              order: 14,
    },
    '.up-col-sm-13' : {
      display: 'block',
      width:'54.16666667%',
    },
    '.up-col-sm-push-13' : {
      left:'54.16666667%',
    },
    '.up-col-sm-pull-13' : {
      right:'54.16666667%',
    },
    '.up-col-sm-offset-13' : {
      marginLeft:'54.16666667%',
    },
    '.up-col-sm-order-13' : {
      '-webkit-box-ordinal-group': 14,
      '-webkit-order': 13,
          '-ms-flex-order': 13,
              order: 13,
    },
    '.up-col-sm-12' : {
      display: 'block',
      width: '50%',
    },
    '.up-col-sm-push-12' : {
      left: '50%',
    },
    '.up-col-sm-pull-12' : {
      right: '50%',
    },
    '.up-col-sm-offset-12' : {
      marginLeft: '50%',
    },
    '.up-col-sm-order-12' : {
      '-webkit-box-ordinal-group': 13,
      '-webkit-order': 12,
          '-ms-flex-order': 12,
              order: 12,
    },
    '.up-col-sm-11' : {
      display: 'block',
      width:'45.83333333%',
    },
    '.up-col-sm-push-11' : {
      left:'45.83333333%',
    },
    '.up-col-sm-pull-11' : {
      right:'45.83333333%',
    },
    '.up-col-sm-offset-11' : {
      marginLeft:'45.83333333%',
    },
    '.up-col-sm-order-11' : {
      '-webkit-box-ordinal-group': 12,
      '-webkit-order': 11,
          '-ms-flex-order': 11,
              order: 11,
    },
    '.up-col-sm-10' : {
      display: 'block',
      width:'41.66666667%',
    },
    '.up-col-sm-push-10' : {
      left:'41.66666667%',
    },
    '.up-col-sm-pull-10' : {
      right:'41.66666667%',
    },
    '.up-col-sm-offset-10' : {
      marginLeft:'41.66666667%',
    },
    '.up-col-sm-order-10' : {
      '-webkit-box-ordinal-group': 11,
      '-webkit-order': 10,
          '-ms-flex-order': 10,
              order: 10,
    },
    '.up-col-sm-9' : {
      display: 'block',
      width:'37.5%',
    },
    '.up-col-sm-push-9' : {
      left:'37.5%',
    },
    '.up-col-sm-pull-9' : {
      right:'37.5%',
    },
    '.up-col-sm-offset-9' : {
      marginLeft:'37.5%',
    },
    '.up-col-sm-order-9' : {
      '-webkit-box-ordinal-group': 10,
      '-webkit-order': 9,
          '-ms-flex-order': 9,
              order: 9,
    },
    '.up-col-sm-8' : {
      display: 'block',
      width:'33.33333333%',
    },
    '.up-col-sm-push-8' : {
      left:'33.33333333%',
    },
    '.up-col-sm-pull-8' : {
      right:'33.33333333%',
    },
    '.up-col-sm-offset-8' : {
      marginLeft:'33.33333333%',
    },
    '.up-col-sm-order-8' : {
      '-webkit-box-ordinal-group': 9,
      '-webkit-order': 8,
          '-ms-flex-order': 8,
              order: 8,
    },
    '.up-col-sm-7' : {
      display: 'block',
      width:'29.16666667%',
    },
    '.up-col-sm-push-7' : {
      left:'29.16666667%',
    },
    '.up-col-sm-pull-7' : {
      right:'29.16666667%',
    },
    '.up-col-sm-offset-7' : {
      marginLeft:'29.16666667%',
    },
    '.up-col-sm-order-7' : {
      '-webkit-box-ordinal-group': 8,
      '-webkit-order': 7,
          '-ms-flex-order': 7,
              order: 7,
    },
    '.up-col-sm-6' : {
      display: 'block',
      width: '25%',
    },
    '.up-col-sm-push-6' : {
      left: '25%',
    },
    '.up-col-sm-pull-6' : {
      right: '25%',
    },
    '.up-col-sm-offset-6' : {
      marginLeft: '25%',
    },
    '.up-col-sm-order-6' : {
      '-webkit-box-ordinal-group': 7,
      '-webkit-order': 6,
          '-ms-flex-order': 6,
              order: 6,
    },
    '.up-col-sm-5' : {
      display: 'block',
      width:'20.83333333%',
    },
    '.up-col-sm-push-5' : {
      left:'20.83333333%',
    },
    '.up-col-sm-pull-5' : {
      right:'20.83333333%',
    },
    '.up-col-sm-offset-5' : {
      marginLeft:'20.83333333%',
    },
    '.up-col-sm-order-5' : {
      '-webkit-box-ordinal-group': 6,
      '-webkit-order': 5,
          '-ms-flex-order': 5,
              order: 5,
    },
    '.up-col-sm-4' : {
      display: 'block',
      width:'16.66666667%',
    },
    '.up-col-sm-push-4' : {
      left:'16.66666667%',
    },
    '.up-col-sm-pull-4' : {
      right:'16.66666667%',
    },
    '.up-col-sm-offset-4' : {
      marginLeft:'16.66666667%',
    },
    '.up-col-sm-order-4' : {
      '-webkit-box-ordinal-group': 5,
      '-webkit-order': 4,
          '-ms-flex-order': 4,
              order: 4,
    },
    '.up-col-sm-3' : {
      display: 'block',
      width:'12.5%',
    },
    '.up-col-sm-push-3' : {
      left:'12.5%',
    },
    '.up-col-sm-pull-3' : {
      right:'12.5%',
    },
    '.up-col-sm-offset-3' : {
      marginLeft:'12.5%',
    },
    '.up-col-sm-order-3' : {
      '-webkit-box-ordinal-group': 4,
      '-webkit-order': 3,
          '-ms-flex-order': 3,
              order: 3,
    },
    '.up-col-sm-2' : {
      display: 'block',
      width:'8.33333333%',
    },
    '.up-col-sm-push-2' : {
      left:'8.33333333%',
    },
    '.up-col-sm-pull-2' : {
      right:'8.33333333%',
    },
    '.up-col-sm-offset-2' : {
      marginLeft:'8.33333333%',
    },
    '.up-col-sm-order-2' : {
      '-webkit-box-ordinal-group': 3,
      '-webkit-order': 2,
          '-ms-flex-order': 2,
              order: 2,
    },
    '.up-col-sm-1' : {
      display: 'block',
      width:'4.16666667%',
    },
    '.up-col-sm-push-1' : {
      left:'4.16666667%',
    },
    '.up-col-sm-pull-1' : {
      right:'4.16666667%',
    },
    '.up-col-sm-offset-1' : {
      marginLeft:'4.16666667%',
    },
    '.up-col-sm-order-1' : {
      '-webkit-box-ordinal-group': 2,
      '-webkit-order': 1,
          '-ms-flex-order': 1,
              order: 1,
    },
    '.up-col-sm-0' : {
      display: 'none',
    },
    '.up-col-push-0' : {
      left: 'auto',
    },
    '.up-col-pull-0' : {
      right: 'auto',
    },
    '.up-col-sm-push-0' : {
      left: 'auto',
    },
    '.up-col-sm-pull-0' : {
      right: 'auto',
    },
    '.up-col-sm-offset-0' : {
      marginLeft: 0,
    },
    '.up-col-sm-order-0' : {
      '-webkit-box-ordinal-group': 1,
      '-webkit-order': 0,
          '-ms-flex-order': 0,
              order: 0,
    },
  }}),
  media({minWidth: '992px'}, {
    $nest : {  
      '.up-col-md-1, .up-col-md-2, .up-col-md-3, .up-col-md-4, .up-col-md-5, .up-col-md-6, .up-col-md-7, .up-col-md-8, .up-col-md-9, .up-col-md-10, .up-col-md-11, .up-col-md-12, .up-col-md-13, .up-col-md-14, .up-col-md-15, .up-col-md-16, .up-col-md-17, .up-col-md-18, .up-col-md-19, .up-col-md-20, .up-col-md-21, .up-col-md-22, .up-col-md-23, .up-col-md-24' : {
      '-webkit-box-flex': 0,
      '-webkit-flex': '0 0 auto',
      '-ms-flex': '0 0 auto',
            flex: '0 0 auto',
      },
      '.up-col-md-24' : {
        display: 'block',
        width: '100%',
      },
    '.up-col-md-push-24' : {
      left: '100%',
    },
    '.up-col-md-pull-24' : {
      right: '100%',
    },
    '.up-col-md-offset-24' : {
      marginLeft: '100%',
    },
    '.up-col-md-order-24' : {
      '-webkit-box-ordinal-group': 25,
      '-webkit-order': 24,
          '-ms-flex-order': 24,
              order: 24,
    },
    '.up-col-md-23' : {
      display: 'block',
      width:'95.83333333%',
    },
    '.up-col-md-push-23' : {
      left:'95.83333333%',
    },
    '.up-col-md-pull-23' : {
      right:'95.83333333%',
    },
    '.up-col-md-offset-23' : {
      marginLeft:'95.83333333%',
    },
    '.up-col-md-order-23' : {
      '-webkit-box-ordinal-group': 24,
      '-webkit-order': 23,
          '-ms-flex-order': 23,
              order: 23,
    },
    '.up-col-md-22' : {
      display: 'block',
      width:'91.66666667%',
    },
    '.up-col-md-push-22' : {
      left:'91.66666667%',
    },
    '.up-col-md-pull-22' : {
      right:'91.66666667%',
    },
    '.up-col-md-offset-22' : {
      marginLeft:'91.66666667%',
    },
    '.up-col-md-order-22' : {
      '-webkit-box-ordinal-group': 23,
      '-webkit-order': 22,
          '-ms-flex-order': 22,
              order: 22,
    },
    '.up-col-md-21' : {
      display: 'block',
      width:'87.5%',
    },
    '.up-col-md-push-21' : {
      left:'87.5%',
    },
    '.up-col-md-pull-21' : {
      right:'87.5%',
    },
    '.up-col-md-offset-21' : {
      marginLeft:'87.5%',
    },
    '.up-col-md-order-21' : {
      '-webkit-box-ordinal-group': 22,
      '-webkit-order': 21,
          '-ms-flex-order': 21,
              order: 21,
    },
    '.up-col-md-20' : {
      display: 'block',
      width:'83.33333333%',
    },
    '.up-col-md-push-20' : {
      left:'83.33333333%',
    },
    '.up-col-md-pull-20' : {
      right:'83.33333333%',
    },
    '.up-col-md-offset-20' : {
      marginLeft:'83.33333333%',
    },
    '.up-col-md-order-20' : {
      '-webkit-box-ordinal-group': 21,
      '-webkit-order': 20,
          '-ms-flex-order': 20,
              order: 20,
    },
    '.up-col-md-19' : {
      display: 'block',
      width:'79.16666667%',
    },
    '.up-col-md-push-19' : {
      left:'79.16666667%',
    },
    '.up-col-md-pull-19' : {
      right:'79.16666667%',
    },
    '.up-col-md-offset-19' : {
      marginLeft:'79.16666667%',
    },
    '.up-col-md-order-19' : {
      '-webkit-box-ordinal-group': 20,
      '-webkit-order': 19,
          '-ms-flex-order': 19,
              order: 19,
    },
    '.up-col-md-18' : {
      display: 'block',
      width: '75%',
    },
    '.up-col-md-push-18' : {
      left: '75%',
    },
    '.up-col-md-pull-18' : {
      right: '75%',
    },
    '.up-col-md-offset-18' : {
      marginLeft: '75%',
    },
    '.up-col-md-order-18' : {
      '-webkit-box-ordinal-group': 19,
      '-webkit-order': 18,
          '-ms-flex-order': 18,
              order: 18,
    },
    '.up-col-md-17' : {
      display: 'block',
      width:'70.83333333%',
    },
    '.up-col-md-push-17' : {
      left:'70.83333333%',
    },
    '.up-col-md-pull-17' : {
      right:'70.83333333%',
    },
    '.up-col-md-offset-17' : {
      marginLeft:'70.83333333%',
    },
    '.up-col-md-order-17' : {
      '-webkit-box-ordinal-group': 18,
      '-webkit-order': 17,
          '-ms-flex-order': 17,
              order: 17,
    },
    '.up-col-md-16' : {
      display: 'block',
      width:'66.66666667%',
    },
    '.up-col-md-push-16' : {
      left:'66.66666667%',
    },
    '.up-col-md-pull-16' : {
      right:'66.66666667%',
    },
    '.up-col-md-offset-16' : {
      marginLeft:'66.66666667%',
    },
    '.up-col-md-order-16' : {
      '-webkit-box-ordinal-group': 17,
      '-webkit-order': 16,
          '-ms-flex-order': 16,
              order: 16,
    },
    '.up-col-md-15' : {
      display: 'block',
      width:'62.5%',
    },
    '.up-col-md-push-15' : {
      left:'62.5%',
    },
    '.up-col-md-pull-15' : {
      right:'62.5%',
    },
    '.up-col-md-offset-15' : {
      marginLeft:'62.5%',
    },
    '.up-col-md-order-15' : {
      '-webkit-box-ordinal-group': 16,
      '-webkit-order': 15,
          '-ms-flex-order': 15,
              order: 15,
    },
    '.up-col-md-14' : {
      display: 'block',
      width:'58.33333333%',
    },
    '.up-col-md-push-14' : {
      left:'58.33333333%',
    },
    '.up-col-md-pull-14' : {
      right:'58.33333333%',
    },
    '.up-col-md-offset-14' : {
      marginLeft:'58.33333333%',
    },
    '.up-col-md-order-14' : {
      '-webkit-box-ordinal-group': 15,
      '-webkit-order': 14,
          '-ms-flex-order': 14,
              order: 14,
    },
    '.up-col-md-13' : {
      display: 'block',
      width:'54.16666667%',
    },
    '.up-col-md-push-13' : {
      left:'54.16666667%',
    },
    '.up-col-md-pull-13' : {
      right:'54.16666667%',
    },
    '.up-col-md-offset-13' : {
      marginLeft:'54.16666667%',
    },
    '.up-col-md-order-13' : {
      '-webkit-box-ordinal-group': 14,
      '-webkit-order': 13,
          '-ms-flex-order': 13,
              order: 13,
    },
    '.up-col-md-12' : {
      display: 'block',
      width: '50%',
    },
    '.up-col-md-push-12' : {
      left: '50%',
    },
    '.up-col-md-pull-12' : {
      right: '50%',
    },
    '.up-col-md-offset-12' : {
      marginLeft: '50%',
    },
    '.up-col-md-order-12' : {
      '-webkit-box-ordinal-group': 13,
      '-webkit-order': 12,
          '-ms-flex-order': 12,
              order: 12,
    },
    '.up-col-md-11' : {
      display: 'block',
      width:'45.83333333%',
    },
    '.up-col-md-push-11' : {
      left:'45.83333333%',
    },
    '.up-col-md-pull-11' : {
      right:'45.83333333%',
    },
    '.up-col-md-offset-11' : {
      marginLeft:'45.83333333%',
    },
    '.up-col-md-order-11' : {
      '-webkit-box-ordinal-group': 12,
      '-webkit-order': 11,
          '-ms-flex-order': 11,
              order: 11,
    },
    '.up-col-md-10' : {
      display: 'block',
      width:'41.66666667%',
    },
    '.up-col-md-push-10' : {
      left:'41.66666667%',
    },
    '.up-col-md-pull-10' : {
      right:'41.66666667%',
    },
    '.up-col-md-offset-10' : {
      marginLeft:'41.66666667%',
    },
    '.up-col-md-order-10' : {
      '-webkit-box-ordinal-group': 11,
      '-webkit-order': 10,
          '-ms-flex-order': 10,
              order: 10,
    },
    '.up-col-md-9' : {
      display: 'block',
      width:'37.5%',
    },
    '.up-col-md-push-9' : {
      left:'37.5%',
    },
    '.up-col-md-pull-9' : {
      right:'37.5%',
    },
    '.up-col-md-offset-9' : {
      marginLeft:'37.5%',
    },
    '.up-col-md-order-9' : {
      '-webkit-box-ordinal-group': 10,
      '-webkit-order': 9,
          '-ms-flex-order': 9,
              order: 9,
    },
    '.up-col-md-8' : {
      display: 'block',
      width:'33.33333333%',
    },
    '.up-col-md-push-8' : {
      left:'33.33333333%',
    },
    '.up-col-md-pull-8' : {
      right:'33.33333333%',
    },
    '.up-col-md-offset-8' : {
      marginLeft:'33.33333333%',
    },
    '.up-col-md-order-8' : {
      '-webkit-box-ordinal-group': 9,
      '-webkit-order': 8,
          '-ms-flex-order': 8,
              order: 8,
    },
    '.up-col-md-7' : {
      display: 'block',
      width:'29.16666667%',
    },
    '.up-col-md-push-7' : {
      left:'29.16666667%',
    },
    '.up-col-md-pull-7' : {
      right:'29.16666667%',
    },
    '.up-col-md-offset-7' : {
      marginLeft:'29.16666667%',
    },
    '.up-col-md-order-7' : {
      '-webkit-box-ordinal-group': 8,
      '-webkit-order': 7,
          '-ms-flex-order': 7,
              order: 7,
    },
    '.up-col-md-6' : {
      display: 'block',
      width: '25%',
    },
    '.up-col-md-push-6' : {
      left: '25%',
    },
    '.up-col-md-pull-6' : {
      right: '25%',
    },
    '.up-col-md-offset-6' : {
      marginLeft: '25%',
    },
    '.up-col-md-order-6' : {
      '-webkit-box-ordinal-group': 7,
      '-webkit-order': 6,
          '-ms-flex-order': 6,
              order: 6,
    },
    '.up-col-md-5' : {
      display: 'block',
      width:'20.83333333%',
    },
    '.up-col-md-push-5' : {
      left:'20.83333333%',
    },
    '.up-col-md-pull-5' : {
      right:'20.83333333%',
    },
    '.up-col-md-offset-5' : {
      marginLeft:'20.83333333%',
    },
    '.up-col-md-order-5' : {
      '-webkit-box-ordinal-group': 6,
      '-webkit-order': 5,
          '-ms-flex-order': 5,
              order: 5,
    },
    '.up-col-md-4' : {
      display: 'block',
      width:'16.66666667%',
    },
    '.up-col-md-push-4' : {
      left:'16.66666667%',
    },
    '.up-col-md-pull-4' : {
      right:'16.66666667%',
    },
    '.up-col-md-offset-4' : {
      marginLeft:'16.66666667%',
    },
    '.up-col-md-order-4' : {
      '-webkit-box-ordinal-group': 5,
      '-webkit-order': 4,
          '-ms-flex-order': 4,
              order: 4,
    },
    '.up-col-md-3' : {
      display: 'block',
      width:'12.5%',
    },
    '.up-col-md-push-3' : {
      left:'12.5%',
    },
    '.up-col-md-pull-3' : {
      right:'12.5%',
    },
    '.up-col-md-offset-3' : {
      marginLeft:'12.5%',
    },
    '.up-col-md-order-3' : {
      '-webkit-box-ordinal-group': 4,
      '-webkit-order': 3,
          '-ms-flex-order': 3,
              order: 3,
    },
    '.up-col-md-2' : {
      display: 'block',
      width:'8.33333333%',
    },
    '.up-col-md-push-2' : {
      left:'8.33333333%',
    },
    '.up-col-md-pull-2' : {
      right:'8.33333333%',
    },
    '.up-col-md-offset-2' : {
      marginLeft:'8.33333333%',
    },
    '.up-col-md-order-2' : {
      '-webkit-box-ordinal-group': 3,
      '-webkit-order': 2,
          '-ms-flex-order': 2,
              order: 2,
    },
    '.up-col-md-1' : {
      display: 'block',
      width:'4.16666667%',
    },
    '.up-col-md-push-1' : {
      left:'4.16666667%',
    },
    '.up-col-md-pull-1' : {
      right:'4.16666667%',
    },
    '.up-col-md-offset-1' : {
      marginLeft:'4.16666667%',
    },
    '.up-col-md-order-1' : {
      '-webkit-box-ordinal-group': 2,
      '-webkit-order': 1,
          '-ms-flex-order': 1,
              order: 1,
    },
    '.up-col-md-0' : {
      display: 'none',
    },
    '.up-col-push-0' : {
      left: 'auto',
    },
    '.up-col-pull-0' : {
      right: 'auto',
    },
    '.up-col-md-push-0' : {
      left: 'auto',
    },
    '.up-col-md-pull-0' : {
      right: 'auto',
    },
    '.up-col-md-offset-0' : {
      marginLeft: 0,
    },
    '.up-col-md-order-0' : {
      '-webkit-box-ordinal-group': 1,
      '-webkit-order': 0,
          '-ms-flex-order': 0,
              order: 0,
    },
    }
  }),
  media({minWidth: '1200px'}, {
    $nest : {
    '.up-col-lg-1, .up-col-lg-2, .up-col-lg-3, .up-col-lg-4, .up-col-lg-5, .up-col-lg-6, .up-col-lg-7, .up-col-lg-8, .up-col-lg-9, .up-col-lg-10, .up-col-lg-11, .up-col-lg-12, .up-col-lg-13, .up-col-lg-14, .up-col-lg-15, .up-col-lg-16, .up-col-lg-17, .up-col-lg-18, .up-col-lg-19, .up-col-lg-20, .up-col-lg-21, .up-col-lg-22, .up-col-lg-23, .up-col-lg-24' : {
      '-webkit-box-flex': 0,
      '-webkit-flex': '0 0 auto',
      '-ms-flex': '0 0 auto',
      flex: '0 0 auto',
    },
  '.up-col-lg-24' : {
    display: 'block',
    width: '100%',
  },
  '.up-col-lg-push-24' : {
    left: '100%',
  },
  '.up-col-lg-pull-24' : {
    right: '100%',
  },
  '.up-col-lg-offset-24' : {
    marginLeft: '100%',
  },
  '.up-col-lg-order-24' : {
    '-webkit-box-ordinal-group': 25,
    '-webkit-order': 24,
        '-ms-flex-order': 24,
            order: 24,
  },
  '.up-col-lg-23' : {
    display: 'block',
    width:'95.83333333%',
  },
  '.up-col-lg-push-23' : {
    left:'95.83333333%',
  },
  '.up-col-lg-pull-23' : {
    right:'95.83333333%',
  },
  '.up-col-lg-offset-23' : {
    marginLeft:'95.83333333%',
  },
  '.up-col-lg-order-23' : {
    '-webkit-box-ordinal-group': 24,
    '-webkit-order': 23,
        '-ms-flex-order': 23,
            order: 23,
  },
  '.up-col-lg-22' : {
    display: 'block',
    width:'91.66666667%',
  },
  '.up-col-lg-push-22' : {
    left:'91.66666667%',
  },
  '.up-col-lg-pull-22' : {
    right:'91.66666667%',
  },
  '.up-col-lg-offset-22' : {
    marginLeft:'91.66666667%',
  },
  '.up-col-lg-order-22' : {
    '-webkit-box-ordinal-group': 23,
    '-webkit-order': 22,
        '-ms-flex-order': 22,
            order: 22,
  },
  '.up-col-lg-21' : {
    display: 'block',
    width:'87.5%',
  },
  '.up-col-lg-push-21' : {
    left:'87.5%',
  },
  '.up-col-lg-pull-21' : {
    right:'87.5%',
  },
  '.up-col-lg-offset-21' : {
    marginLeft:'87.5%',
  },
  '.up-col-lg-order-21' : {
    '-webkit-box-ordinal-group': 22,
    '-webkit-order': 21,
        '-ms-flex-order': 21,
            order: 21,
  },
  '.up-col-lg-20' : {
    display: 'block',
    width:'83.33333333%',
  },
  '.up-col-lg-push-20' : {
    left:'83.33333333%',
  },
  '.up-col-lg-pull-20' : {
    right:'83.33333333%',
  },
  '.up-col-lg-offset-20' : {
    marginLeft:'83.33333333%',
  },
  '.up-col-lg-order-20' : {
    '-webkit-box-ordinal-group': 21,
    '-webkit-order': 20,
        '-ms-flex-order': 20,
            order: 20,
  },
  '.up-col-lg-19' : {
    display: 'block',
    width:'79.16666667%',
  },
  '.up-col-lg-push-19' : {
    left:'79.16666667%',
  },
  '.up-col-lg-pull-19' : {
    right:'79.16666667%',
  },
  '.up-col-lg-offset-19' : {
    marginLeft:'79.16666667%',
  },
  '.up-col-lg-order-19' : {
    '-webkit-box-ordinal-group': 20,
    '-webkit-order': 19,
        '-ms-flex-order': 19,
            order: 19,
  },
  '.up-col-lg-18' : {
    display: 'block',
    width: '75%',
  },
  '.up-col-lg-push-18' : {
    left: '75%',
  },
  '.up-col-lg-pull-18' : {
    right: '75%',
  },
  '.up-col-lg-offset-18' : {
    marginLeft: '75%',
  },
  '.up-col-lg-order-18' : {
    '-webkit-box-ordinal-group': 19,
    '-webkit-order': 18,
        '-ms-flex-order': 18,
            order: 18,
  },
  '.up-col-lg-17' : {
    display: 'block',
    width:'70.83333333%',
  },
  '.up-col-lg-push-17' : {
    left:'70.83333333%',
  },
  '.up-col-lg-pull-17' : {
    right:'70.83333333%',
  },
  '.up-col-lg-offset-17' : {
    marginLeft:'70.83333333%',
  },
  '.up-col-lg-order-17' : {
    '-webkit-box-ordinal-group': 18,
    '-webkit-order': 17,
        '-ms-flex-order': 17,
            order: 17,
  },
  '.up-col-lg-16' : {
    display: 'block',
    width:'66.66666667%',
  },
  '.up-col-lg-push-16' : {
    left:'66.66666667%',
  },
  '.up-col-lg-pull-16' : {
    right:'66.66666667%',
  },
  '.up-col-lg-offset-16' : {
    marginLeft:'66.66666667%',
  },
  '.up-col-lg-order-16' : {
    '-webkit-box-ordinal-group': 17,
    '-webkit-order': 16,
        '-ms-flex-order': 16,
            order: 16,
  },
  '.up-col-lg-15' : {
    display: 'block',
    width:'62.5%',
  },
  '.up-col-lg-push-15' : {
    left:'62.5%',
  },
  '.up-col-lg-pull-15' : {
    right:'62.5%',
  },
  '.up-col-lg-offset-15' : {
    marginLeft:'62.5%',
  },
  '.up-col-lg-order-15' : {
    '-webkit-box-ordinal-group': 16,
    '-webkit-order': 15,
        '-ms-flex-order': 15,
            order: 15,
  },
  '.up-col-lg-14' : {
    display: 'block',
    width:'58.33333333%',
  },
  '.up-col-lg-push-14' : {
    left:'58.33333333%',
  },
  '.up-col-lg-pull-14' : {
    right:'58.33333333%',
  },
  '.up-col-lg-offset-14' : {
    marginLeft:'58.33333333%',
  },
  '.up-col-lg-order-14' : {
    '-webkit-box-ordinal-group': 15,
    '-webkit-order': 14,
        '-ms-flex-order': 14,
            order: 14,
  },
  '.up-col-lg-13' : {
    display: 'block',
    width:'54.16666667%',
  },
  '.up-col-lg-push-13' : {
    left:'54.16666667%',
  },
  '.up-col-lg-pull-13' : {
    right:'54.16666667%',
  },
  '.up-col-lg-offset-13' : {
    marginLeft:'54.16666667%',
  },
  '.up-col-lg-order-13' : {
    '-webkit-box-ordinal-group': 14,
    '-webkit-order': 13,
        '-ms-flex-order': 13,
            order: 13,
  },
  '.up-col-lg-12' : {
    display: 'block',
    width: '50%',
  },
  '.up-col-lg-push-12' : {
    left: '50%',
  },
  '.up-col-lg-pull-12' : {
    right: '50%',
  },
  '.up-col-lg-offset-12' : {
    marginLeft: '50%',
  },
  '.up-col-lg-order-12' : {
    '-webkit-box-ordinal-group': 13,
    '-webkit-order': 12,
        '-ms-flex-order': 12,
            order: 12,
  },
  '.up-col-lg-11' : {
    display: 'block',
    width:'45.83333333%',
  },
  '.up-col-lg-push-11' : {
    left:'45.83333333%',
  },
  '.up-col-lg-pull-11' : {
    right:'45.83333333%',
  },
  '.up-col-lg-offset-11' : {
    marginLeft:'45.83333333%',
  },
  '.up-col-lg-order-11' : {
    '-webkit-box-ordinal-group': 12,
    '-webkit-order': 11,
        '-ms-flex-order': 11,
            order: 11,
  },
  '.up-col-lg-10' : {
    display: 'block',
    width:'41.66666667%',
  },
  '.up-col-lg-push-10' : {
    left:'41.66666667%',
  },
  '.up-col-lg-pull-10' : {
    right:'41.66666667%',
  },
  '.up-col-lg-offset-10' : {
    marginLeft:'41.66666667%',
  },
  '.up-col-lg-order-10' : {
    '-webkit-box-ordinal-group': 11,
    '-webkit-order': 10,
        '-ms-flex-order': 10,
            order: 10,
  },
  '.up-col-lg-9' : {
    display: 'block',
    width:'37.5%',
  },
  '.up-col-lg-push-9' : {
    left:'37.5%',
  },
  '.up-col-lg-pull-9' : {
    right:'37.5%',
  },
  '.up-col-lg-offset-9' : {
    marginLeft:'37.5%',
  },
  '.up-col-lg-order-9' : {
    '-webkit-box-ordinal-group': 10,
    '-webkit-order': 9,
        '-ms-flex-order': 9,
            order: 9,
  },
  '.up-col-lg-8' : {
    display: 'block',
    width:'33.33333333%',
  },
  '.up-col-lg-push-8' : {
    left:'33.33333333%',
  },
  '.up-col-lg-pull-8' : {
    right:'33.33333333%',
  },
  '.up-col-lg-offset-8' : {
    marginLeft:'33.33333333%',
  },
  '.up-col-lg-order-8' : {
    '-webkit-box-ordinal-group': 9,
    '-webkit-order': 8,
        '-ms-flex-order': 8,
            order: 8,
  },
  '.up-col-lg-7' : {
    display: 'block',
    width:'29.16666667%',
  },
  '.up-col-lg-push-7' : {
    left:'29.16666667%',
  },
  '.up-col-lg-pull-7' : {
    right:'29.16666667%',
  },
  '.up-col-lg-offset-7' : {
    marginLeft:'29.16666667%',
  },
  '.up-col-lg-order-7' : {
    '-webkit-box-ordinal-group': 8,
    '-webkit-order': 7,
        '-ms-flex-order': 7,
            order: 7,
  },
  '.up-col-lg-6' : {
    display: 'block',
    width: '25%',
  },
  '.up-col-lg-push-6' : {
    left: '25%',
  },
  '.up-col-lg-pull-6' : {
    right: '25%',
  },
  '.up-col-lg-offset-6' : {
    marginLeft: '25%',
  },
  '.up-col-lg-order-6' : {
    '-webkit-box-ordinal-group': 7,
    '-webkit-order': 6,
        '-ms-flex-order': 6,
            order: 6,
  },
  '.up-col-lg-5' : {
    display: 'block',
    width:'20.83333333%',
  },
  '.up-col-lg-push-5' : {
    left:'20.83333333%',
  },
  '.up-col-lg-pull-5' : {
    right:'20.83333333%',
  },
  '.up-col-lg-offset-5' : {
    marginLeft:'20.83333333%',
  },
  '.up-col-lg-order-5' : {
    '-webkit-box-ordinal-group': 6,
    '-webkit-order': 5,
        '-ms-flex-order': 5,
            order: 5,
  },
  '.up-col-lg-4' : {
    display: 'block',
    width:'16.66666667%',
  },
  '.up-col-lg-push-4' : {
    left:'16.66666667%',
  },
  '.up-col-lg-pull-4' : {
    right:'16.66666667%',
  },
  '.up-col-lg-offset-4' : {
    marginLeft:'16.66666667%',
  },
  '.up-col-lg-order-4' : {
    '-webkit-box-ordinal-group': 5,
    '-webkit-order': 4,
        '-ms-flex-order': 4,
            order: 4,
  },
  '.up-col-lg-3' : {
    display: 'block',
    width:'12.5%',
  },
  '.up-col-lg-push-3' : {
    left:'12.5%',
  },
  '.up-col-lg-pull-3' : {
    right:'12.5%',
  },
  '.up-col-lg-offset-3' : {
    marginLeft:'12.5%',
  },
  '.up-col-lg-order-3' : {
    '-webkit-box-ordinal-group': 4,
    '-webkit-order': 3,
        '-ms-flex-order': 3,
            order: 3,
  },
  '.up-col-lg-2' : {
    display: 'block',
    width:'8.33333333%',
  },
  '.up-col-lg-push-2' : {
    left:'8.33333333%',
  },
  '.up-col-lg-pull-2' : {
    right:'8.33333333%',
  },
  '.up-col-lg-offset-2' : {
    marginLeft:'8.33333333%',
  },
  '.up-col-lg-order-2' : {
    '-webkit-box-ordinal-group': 3,
    '-webkit-order': 2,
        '-ms-flex-order': 2,
            order: 2,
  },
  '.up-col-lg-1' : {
    display: 'block',
    width:'4.16666667%',
  },
  '.up-col-lg-push-1' : {
    left:'4.16666667%',
  },
  '.up-col-lg-pull-1' : {
    right:'4.16666667%',
  },
  '.up-col-lg-offset-1' : {
    marginLeft:'4.16666667%',
  },
  '.up-col-lg-order-1' : {
    '-webkit-box-ordinal-group': 2,
    '-webkit-order': 1,
        '-ms-flex-order': 1,
            order: 1,
  },
  '.up-col-lg-0' : {
    display: 'none',
  },
  '.up-col-push-0' : {
    left: 'auto',
  },
  '.up-col-pull-0' : {
    right: 'auto',
  },
  '.up-col-lg-push-0' : {
    left: 'auto',
  },
  '.up-col-lg-pull-0' : {
    right: 'auto',
  },
  '.up-col-lg-offset-0' : {
    marginLeft: 0,
  },
  '.up-col-lg-order-0' : {
    '-webkit-box-ordinal-group': 1,
    '-webkit-order': 0,
        '-ms-flex-order': 0,
            order: 0,
  },
    }
  }),
  media({ minWidth: '1600px'}, {
    $nest : {
  '.up-col-xl-1, .up-col-xl-2, .up-col-xl-3, .up-col-xl-4, .up-col-xl-5, .up-col-xl-6, .up-col-xl-7, .up-col-xl-8, .up-col-xl-9, .up-col-xl-10, .up-col-xl-11, .up-col-xl-12, .up-col-xl-13, .up-col-xl-14, .up-col-xl-15, .up-col-xl-16, .up-col-xl-17, .up-col-xl-18, .up-col-xl-19, .up-col-xl-20, .up-col-xl-21, .up-col-xl-22, .up-col-xl-23, .up-col-xl-24' : {
    '-webkit-box-flex': 0,
    '-webkit-flex': '0 0 auto',
        '-ms-flex': '0 0 auto',
            flex: '0 0 auto',
  },
  '.up-col-xl-24' : {
    display: 'block',
    width: '100%',
  },
  '.up-col-xl-push-24' : {
    left: '100%',
  },
  '.up-col-xl-pull-24' : {
    right: '100%',
  },
  '.up-col-xl-offset-24' : {
    marginLeft: '100%',
  },
  '.up-col-xl-order-24' : {
    '-webkit-box-ordinal-group': 25,
    '-webkit-order': 24,
        '-ms-flex-order': 24,
            order: 24,
  },
  '.up-col-xl-23' : {
    display: 'block',
    width:'95.83333333%',
  },
  '.up-col-xl-push-23' : {
    left:'95.83333333%',
  },
  '.up-col-xl-pull-23' : {
    right:'95.83333333%',
  },
  '.up-col-xl-offset-23' : {
    marginLeft:'95.83333333%',
  },
  '.up-col-xl-order-23' : {
    '-webkit-box-ordinal-group': 24,
    '-webkit-order': 23,
        '-ms-flex-order': 23,
            order: 23,
  },
  '.up-col-xl-22' : {
    display: 'block',
    width:'91.66666667%',
  },
  '.up-col-xl-push-22' : {
    left:'91.66666667%',
  },
  '.up-col-xl-pull-22' : {
    right:'91.66666667%',
  },
  '.up-col-xl-offset-22' : {
    marginLeft:'91.66666667%',
  },
  '.up-col-xl-order-22' : {
    '-webkit-box-ordinal-group': 23,
    '-webkit-order': 22,
        '-ms-flex-order': 22,
            order: 22,
  },
  '.up-col-xl-21' : {
    display: 'block',
    width:'87.5%',
  },
  '.up-col-xl-push-21' : {
    left:'87.5%',
  },
  '.up-col-xl-pull-21' : {
    right:'87.5%',
  },
  '.up-col-xl-offset-21' : {
    marginLeft:'87.5%',
  },
  '.up-col-xl-order-21' : {
    '-webkit-box-ordinal-group': 22,
    '-webkit-order': 21,
        '-ms-flex-order': 21,
            order: 21,
  },
  '.up-col-xl-20' : {
    display: 'block',
    width:'83.33333333%',
  },
  '.up-col-xl-push-20' : {
    left:'83.33333333%',
  },
  '.up-col-xl-pull-20' : {
    right:'83.33333333%',
  },
  '.up-col-xl-offset-20' : {
    marginLeft:'83.33333333%',
  },
  '.up-col-xl-order-20' : {
    '-webkit-box-ordinal-group': 21,
    '-webkit-order': 20,
        '-ms-flex-order': 20,
            order: 20,
  },
  '.up-col-xl-19' : {
    display: 'block',
    width:'79.16666667%',
  },
  '.up-col-xl-push-19' : {
    left:'79.16666667%',
  },
  '.up-col-xl-pull-19' : {
    right:'79.16666667%',
  },
  '.up-col-xl-offset-19' : {
    marginLeft:'79.16666667%',
  },
  '.up-col-xl-order-19' : {
    '-webkit-box-ordinal-group': 20,
    '-webkit-order': 19,
        '-ms-flex-order': 19,
            order: 19,
  },
  '.up-col-xl-18' : {
    display: 'block',
    width: '75%',
  },
  '.up-col-xl-push-18' : {
    left: '75%',
  },
  '.up-col-xl-pull-18' : {
    right: '75%',
  },
  '.up-col-xl-offset-18' : {
    marginLeft: '75%',
  },
  '.up-col-xl-order-18' : {
    '-webkit-box-ordinal-group': 19,
    '-webkit-order': 18,
        '-ms-flex-order': 18,
            order: 18,
  },
  '.up-col-xl-17' : {
    display: 'block',
    width:'70.83333333%',
  },
  '.up-col-xl-push-17' : {
    left:'70.83333333%',
  },
  '.up-col-xl-pull-17' : {
    right:'70.83333333%',
  },
  '.up-col-xl-offset-17' : {
    marginLeft:'70.83333333%',
  },
  '.up-col-xl-order-17' : {
    '-webkit-box-ordinal-group': 18,
    '-webkit-order': 17,
        '-ms-flex-order': 17,
            order: 17,
  },
  '.up-col-xl-16' : {
    display: 'block',
    width:'66.66666667%',
  },
  '.up-col-xl-push-16' : {
    left:'66.66666667%',
  },
  '.up-col-xl-pull-16' : {
    right:'66.66666667%',
  },
  '.up-col-xl-offset-16' : {
    marginLeft:'66.66666667%',
  },
  '.up-col-xl-order-16' : {
    '-webkit-box-ordinal-group': 17,
    '-webkit-order': 16,
        '-ms-flex-order': 16,
            order: 16,
  },
  '.up-col-xl-15' : {
    display: 'block',
    width:'62.5%',
  },
  '.up-col-xl-push-15' : {
    left:'62.5%',
  },
  '.up-col-xl-pull-15' : {
    right:'62.5%',
  },
  '.up-col-xl-offset-15' : {
    marginLeft:'62.5%',
  },
  '.up-col-xl-order-15' : {
    '-webkit-box-ordinal-group': 16,
    '-webkit-order': 15,
        '-ms-flex-order': 15,
            order: 15,
  },
  '.up-col-xl-14' : {
    display: 'block',
    width:'58.33333333%',
  },
  '.up-col-xl-push-14' : {
    left:'58.33333333%',
  },
  '.up-col-xl-pull-14' : {
    right:'58.33333333%',
  },
  '.up-col-xl-offset-14' : {
    marginLeft:'58.33333333%',
  },
  '.up-col-xl-order-14' : {
    '-webkit-box-ordinal-group': 15,
    '-webkit-order': 14,
        '-ms-flex-order': 14,
            order: 14,
  },
  '.up-col-xl-13' : {
    display: 'block',
    width:'54.16666667%',
  },
  '.up-col-xl-push-13' : {
    left:'54.16666667%',
  },
  '.up-col-xl-pull-13' : {
    right:'54.16666667%',
  },
  '.up-col-xl-offset-13' : {
    marginLeft:'54.16666667%',
  },
  '.up-col-xl-order-13' : {
    '-webkit-box-ordinal-group': 14,
    '-webkit-order': 13,
        '-ms-flex-order': 13,
            order: 13,
  },
  '.up-col-xl-12' : {
    display: 'block',
    width: '50%',
  },
  '.up-col-xl-push-12' : {
    left: '50%',
  },
  '.up-col-xl-pull-12' : {
    right: '50%',
  },
  '.up-col-xl-offset-12' : {
    marginLeft: '50%',
  },
  '.up-col-xl-order-12' : {
    '-webkit-box-ordinal-group': 13,
    '-webkit-order': 12,
        '-ms-flex-order': 12,
            order: 12,
  },
  '.up-col-xl-11' : {
    display: 'block',
    width:'45.83333333%',
  },
  '.up-col-xl-push-11' : {
    left:'45.83333333%',
  },
  '.up-col-xl-pull-11' : {
    right:'45.83333333%',
  },
  '.up-col-xl-offset-11' : {
    marginLeft:'45.83333333%',
  },
  '.up-col-xl-order-11' : {
    '-webkit-box-ordinal-group': 12,
    '-webkit-order': 11,
        '-ms-flex-order': 11,
            order: 11,
  },
  '.up-col-xl-10' : {
    display: 'block',
    width:'41.66666667%',
  },
  '.up-col-xl-push-10' : {
    left:'41.66666667%',
  },
  '.up-col-xl-pull-10' : {
    right:'41.66666667%',
  },
  '.up-col-xl-offset-10' : {
    marginLeft:'41.66666667%',
  },
  '.up-col-xl-order-10' : {
    '-webkit-box-ordinal-group': 11,
    '-webkit-order': 10,
        '-ms-flex-order': 10,
            order: 10,
  },
  '.up-col-xl-9' : {
    display: 'block',
    width:'37.5%',
  },
  '.up-col-xl-push-9' : {
    left:'37.5%',
  },
  '.up-col-xl-pull-9' : {
    right:'37.5%',
  },
  '.up-col-xl-offset-9' : {
    marginLeft:'37.5%',
  },
  '.up-col-xl-order-9' : {
    '-webkit-box-ordinal-group': 10,
    '-webkit-order': 9,
        '-ms-flex-order': 9,
            order: 9,
  },
  '.up-col-xl-8' : {
    display: 'block',
    width:'33.33333333%',
  },
  '.up-col-xl-push-8' : {
    left:'33.33333333%',
  },
  '.up-col-xl-pull-8' : {
    right:'33.33333333%',
  },
  '.up-col-xl-offset-8' : {
    marginLeft:'33.33333333%',
  },
  '.up-col-xl-order-8' : {
    '-webkit-box-ordinal-group': 9,
    '-webkit-order': 8,
        '-ms-flex-order': 8,
            order: 8,
  },
  '.up-col-xl-7' : {
    display: 'block',
    width:'29.16666667%',
  },
  '.up-col-xl-push-7' : {
    left:'29.16666667%',
  },
  '.up-col-xl-pull-7' : {
    right:'29.16666667%',
  },
  '.up-col-xl-offset-7' : {
    marginLeft:'29.16666667%',
  },
  '.up-col-xl-order-7' : {
    '-webkit-box-ordinal-group': 8,
    '-webkit-order': 7,
        '-ms-flex-order': 7,
            order: 7,
  },
  '.up-col-xl-6' : {
    display: 'block',
    width: '25%',
  },
  '.up-col-xl-push-6' : {
    left: '25%',
  },
  '.up-col-xl-pull-6' : {
    right: '25%',
  },
  '.up-col-xl-offset-6' : {
    marginLeft: '25%',
  },
  '.up-col-xl-order-6' : {
    '-webkit-box-ordinal-group': 7,
    '-webkit-order': 6,
        '-ms-flex-order': 6,
            order: 6,
  },
  '.up-col-xl-5' : {
    display: 'block',
    width:'20.83333333%',
  },
  '.up-col-xl-push-5' : {
    left:'20.83333333%',
  },
  '.up-col-xl-pull-5' : {
    right:'20.83333333%',
  },
  '.up-col-xl-offset-5' : {
    marginLeft:'20.83333333%',
  },
  '.up-col-xl-order-5' : {
    '-webkit-box-ordinal-group': 6,
    '-webkit-order': 5,
        '-ms-flex-order': 5,
            order: 5,
  },
  '.up-col-xl-4' : {
    display: 'block',
    width:'16.66666667%',
  },
  '.up-col-xl-push-4' : {
    left:'16.66666667%',
  },
  '.up-col-xl-pull-4' : {
    right:'16.66666667%',
  },
  '.up-col-xl-offset-4' : {
    marginLeft:'16.66666667%',
  },
  '.up-col-xl-order-4' : {
    '-webkit-box-ordinal-group': 5,
    '-webkit-order': 4,
        '-ms-flex-order': 4,
            order: 4,
  },
  '.up-col-xl-3' : {
    display: 'block',
    width:'12.5%',
  },
  '.up-col-xl-push-3' : {
    left:'12.5%',
  },
  '.up-col-xl-pull-3' : {
    right:'12.5%',
  },
  '.up-col-xl-offset-3' : {
    marginLeft:'12.5%',
  },
  '.up-col-xl-order-3' : {
    '-webkit-box-ordinal-group': 4,
    '-webkit-order': 3,
        '-ms-flex-order': 3,
            order: 3,
  },
  '.up-col-xl-2' : {
    display: 'block',
    width:'8.33333333%',
  },
  '.up-col-xl-push-2' : {
    left:'8.33333333%',
  },
  '.up-col-xl-pull-2' : {
    right:'8.33333333%',
  },
  '.up-col-xl-offset-2' : {
    marginLeft:'8.33333333%',
  },
  '.up-col-xl-order-2' : {
    '-webkit-box-ordinal-group': 3,
    '-webkit-order': 2,
        '-ms-flex-order': 2,
            order: 2,
  },
  '.up-col-xl-1' : {
    display: 'block',
    width:'4.16666667%',
  },
  '.up-col-xl-push-1' : {
    left:'4.16666667%',
  },
  '.up-col-xl-pull-1' : {
    right:'4.16666667%',
  },
  '.up-col-xl-offset-1' : {
    marginLeft:'4.16666667%',
  },
  '.up-col-xl-order-1' : {
    '-webkit-box-ordinal-group': 2,
    '-webkit-order': 1,
        '-ms-flex-order': 1,
            order: 1,
  },
  '.up-col-xl-0' : {
    display: 'none',
  },
  '.up-col-push-0' : {
    left: 'auto',
  },
  '.up-col-pull-0' : {
    right: 'auto',
  },
  '.up-col-xl-push-0' : {
    left: 'auto',
  },
  '.up-col-xl-pull-0' : {
    right: 'auto',
  },
  '.up-col-xl-offset-0' : {
    marginLeft: 0,
  },
  '.up-col-xl-order-0' : {
    '-webkit-box-ordinal-group': 1,
    '-webkit-order': 0,
        '-ms-flex-order': 0,
            order: 0,
  },
    }
  }))
