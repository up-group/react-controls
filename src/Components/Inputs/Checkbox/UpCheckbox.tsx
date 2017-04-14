// import React, { Component, PropTypes } from 'react';
// import UpLabel from './UpLabel.jsx';
//
// export default class UpCheckbox extends Component {
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
//     const type = this.props.type ;
//     const options = this.props.options ;
//     return (
//       <div>
//       {options.map((option) => (
//         <UpLabel key={`Key_${option.name}_${option.value}`} position="right" text={option.text}>
//             <input name={option.name} type="checkbox" value={option.value} />
//         </UpLabel>
//       ))}
//       </div>
//     );
//   }
// }
//
// UpCheckbox.defaultProps = {
//     type : '',
//     wrapperClass : '',
//     options:[]
// };
//
// UpCheckbox.propTypes = {
//   type: React.PropTypes.string,
//   wrapperClass: React.PropTypes.string,
//   options:React.PropTypes.array
// }
