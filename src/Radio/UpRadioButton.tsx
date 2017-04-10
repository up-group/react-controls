// import React, { Component, PropTypes } from 'react';
// import UpLabel from './UpLabel.jsx';
//
// export default class UpRadioButton extends Component {
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
//     const options = this.props.options;
//     const name = this.props.name;
//
//     return (
//       <div>
//       {options.map((option) => (
//         <UpLabel key={`Key_${name}_${option.value}`} position="right" text={option.text}>
//             <input name={name} type="radio" value={option.value} />
//         </UpLabel>
//       ))}
//       </div>
//     );
//   }
// }
//
// UpRadioButton.defaultProps = {
//     type : '',
//     name:'MyRadio',
//     options:[],
//     wrapperClass : ''
// };
//
// UpRadioButton.propTypes = {
//   type: React.PropTypes.string,
//   name: React.PropTypes.string.isRequired,
//   wrapperClass: React.PropTypes.string,
//   options:React.PropTypes.array
// }
