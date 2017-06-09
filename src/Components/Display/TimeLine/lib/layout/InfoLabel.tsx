import * as React from 'react'
//import shouldPureComponentUpdate from 'react-pure-render/function'

export default class InfoLabel extends React.Component<any, any> {

    static defaultProps = {
        label: ''
    }

   // shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        var s : React.CSSProperties= {
            position: "fixed",
            left: "100px",
            bottom: "50px",
            background: "rgba(0, 0, 0, 0.5)",
            color: "green",
            padding: "10px",
            fontSize: "20px",
            borderRadius: "5px",
            zndex: "5"
        }

        return (
            <div style={s} className='rct-infolabel'>
                {this.props.label}
            </div>
        )
    }
}

//InfoLabel.propTypes = {
//    label: React.PropTypes.string.isRequired
//}
//InfoLabel.defaultProps = {
//    label: ''
//}
