import * as React from "react" ;
import { Component } from "react";

interface IUpTooltipProps extends React.Props<UpTooltip> {
  title: string,
  wrapperClass?: string,
  placement: string
}

interface IUpTooltipState {

}

export default class UpTooltip extends Component<IUpTooltipProps, IUpTooltipState> {

   public static defaultProps : IUpTooltipProps = {
       title : '',
       wrapperClass : 'up-tooltip',
       placement : 'bottom'
    };

  constructor(props: IUpTooltipProps) {
    super(props) ;
  }
  componentWillUnmount() {
    //var $element = $(":first-child", this.refs.tooltip) ;
    //if ($element.data('bs.tooltip')) {
    //      $element.tooltip('destroy');
    //}
  }
  componentDidMount() {
    //var $element = $(":first-child", this.refs.tooltip) ;
    //$element.tooltip(this.props);
  }
  render() {
    const wrapperClass = this.props.wrapperClass || '' ;
    return (
      <div ref="tooltip" className={wrapperClass}>
        {this.props.children}
      </div>
    );
  }
}
