// import React, { Component, PropTypes } from 'react';
//
// export default class UpLabel extends Component {
//   constructor(props) {
//     super(props) ;
//   }
//   componentWillUnmount() {
//
//   }
//   componentDidMount() {
//
//   }
//   render() {
//       const position = this.props.position ;
//       if(position==='right') {
//         return (
//           <label>
//           {this.props.children}
//           <span className="up-label-text">{this.props.text}</span>
//           </label>
//         );
//       } else {
//         return (
//           <label>
//           <span className="up-label-text">{this.props.text}</span>
//           {this.props.children}
//           </label>
//         );
//       }
//   }
// }
//
// UpLabel.defaultProps = {
//   text:'',
//   position:'left'
// };
//
// UpLabel.propTypes = {
//   text:React.PropTypes.string.isRequired,
//   position:React.PropTypes.string
// };
