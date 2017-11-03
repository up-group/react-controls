import * as React from "react"

export interface UpDashboardProps {

}

export interface UpDashboardState {

}

export default class UpDashboard extends React.Component<UpDashboardProps, UpDashboardState>{
    public static defaultProps: UpDashboardProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        return <div>
            {this.props.children}
        </div>
    }
}