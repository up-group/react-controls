// Imports
import * as React from 'react'
import UpLabel from '../../Display/Label/index'
import * as classNames from 'classnames'

import {style} from 'typestyle'

export type Size = 'small' | 'normal' | 'large'

export interface UpToggleStyledProps {
    className?:string;
}

export interface UpToggleProps {
    //position?:Position;
    value: any;
    checked?:boolean;
    defaultChecked?:boolean;
    disabled?:boolean;
    onChange?:(event) =>void;
    onFocus?:(event) =>void;
    onBlur?:(event) =>void;
    icons?:any;
    size?:Size;
    className?:string;
}

const WrapperStyle = style({
  display:"inline-block",
  $nest : {
    "svg" : {
       margin:"0px"
    },
    ".up-toggle" : {
      touchAction: "pan-x",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      backgroundColor: "transparent",
      border: 0,
      padding: 0,
      "-webkit-touch-callout": "none",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
      "-webkit-tap-highlight-color": "transparent"
    },

    ".up-toggle-screenreader-only" : {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px"
    },

    ".up-toggle--disabled" : {
      cursor: "not-allowed",
      opacity: 0.5,
      "-webkit-transition": "opacity 0.25s",
      transition: "opacity 0.25s"
    },

    ".up-toggle-track" : {
      width: "50px",
      backgroundColor: "#4D4D4D",
      "-webkit-transition": "all 0.2s ease",
      "-moz-transition": "all 0.2s ease",
      transition: "all 0.2s ease"
    },

    ".up-toggle:hover:not(.up-toggle--disabled) .up-toggle-track" : {
      backgroundColor: "#000000"
    },

    ".up-toggle--checked .up-toggle-track" : {
      backgroundColor: "#19AB27"
    },

    ".up-toggle--checked:hover:not(.up-toggle--disabled) .up-toggle-track" : {
      backgroundColor: "#128D15"
    },

    ".up-toggle-track-check" : {
      position: "absolute",
      width: "14px",
      height: "10px",
      top: "0px",
      bottom: "0px",
      marginTop: "auto",
      marginBottom: "auto",
      lineHeight: 0,
      left: "8px",
      opacity: 0,
      "-webkit-transition": "opacity 0.25s ease",
      "-moz-transition": "opacity 0.25s ease",
      transition: "opacity 0.25s ease"
    },
    ".up-toggle--checked .up-toggle-track-check" : {
      opacity: 1,
      "-webkit-transition": "opacity 0.25s ease",
      "-moz-transition": "opacity 0.25s ease",
      transition: "opacity 0.25s ease",
    },
    ".up-toggle-track-x" : {
      position: "absolute",
      width: "10px",
      height: "10px",
      marginTop: "auto",
      marginBottom: "auto",
      lineHeight: 0,
      opacity: 1,
      "-webkit-transition": "opacity 0.25s ease",
      "-moz-transition": "opacity 0.25s ease",
      transition: "opacity 0.25s ease"
    },
    ".up-toggle--checked .up-toggle-track-x" : {
      opacity: 0
    }, 
    ".up-toggle-thumb" : {
      transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms",
      position: "absolute",
      backgroundColor: '#FAFAFA',
      "-webkit-box-sizing": 'border-box',
      "-moz-box-sizing": 'border-box',
      boxSizing: 'border-box',
      "-webkit-transition": "all 0.25s ease",
      "-moz-transition": "all 0.25s ease"
    },
    ".up-toggle--checked .up-toggle-thumb" : {
      left: "30px",
      borderColor: "#19AB27"
    },
    ".up-toggle--focus .up-toggle-thumb" : {
      "-webkit-box-shadow": "0px 0px 3px 2px #0099E0",
      "-moz-box-shadow": "0px 0px 3px 2px #0099E0",
      boxShadow: "0px 0px 2px 3px #0099E0"
    },
    ".up-toggle:active:not(.up-toggle--disabled) .up-toggle-thumb" : {
      "-webkit-box-shadow": "0px 0px 5px 5px #0099E0",
      "-moz-box-shadow": "0px 0px 5px 5px #0099E0",
      boxShadow: '0px 0px 5px 5px #0099E0'
    }
  }
}) ;

const DefaultChecked = () => (
  <svg width='14' height='11' viewBox='0 0 14 11'>
    <title>
      switch-check
    </title>
    <path d='M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0' fill='#fff' fillRule='evenodd' />
  </svg>
)

const DefaultUnchecked = () => <svg width='10' height='10' viewBox='0 0 10 10'>
<title>
  switch-x
</title>
<path d='M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12' fill='#fff' fillRule='evenodd' />
</svg> ;

// Exports
export default class UpToggle extends React.PureComponent<UpToggleProps, any> {
  previouslyChecked : boolean ;
  input:any;
  moved:boolean;
  startX:number;
  activated:boolean;

  public static defaultProps = {
      icons: {
        checked: <DefaultChecked />,
        unchecked: <DefaultUnchecked />,
    },
    size:'normal'
  }

  constructor (props) {
    super(props)
    this.previouslyChecked = !!(props.checked || props.defaultChecked)
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false,
    }
  }

  private pointerCoord (event) {
    // get coordinates for either a mouse click
    // or a touch depending on the given event
    if (event) {
      const changedTouches = event.changedTouches
      if (changedTouches && changedTouches.length > 0) {
        const touch = changedTouches[0]
        return { x: touch.clientX, y: touch.clientY }
      }
      const pageX = event.pageX
      if (pageX !== undefined) {
        return { x: pageX, y: event.pageY }
      }
    }
    return { x: 0, y: 0 }
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({checked: !!nextProps.checked})
    }
  }

  handleClick = (event) => {
    const checkbox = this.input ;
    if (event.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox.checked ;
      event.stopPropagation() ;
      event.preventDefault() ;
      checkbox.focus() ;
      checkbox.click() ;
      return ;
    }
  }

  handleTouchStart = (event) => {
    this.startX = this.pointerCoord(event).x
    this.activated = true
  }

  handleTouchMove = (event) => {
    if (!this.activated) return
    this.moved = true

    if (this.startX) {
      let currentX = this.pointerCoord(event).x
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({ checked: false })
        this.startX = currentX
        this.activated = true
      } else if (currentX - 15 > this.startX) {
        this.setState({ checked: true })
        this.startX = currentX
        this.activated = (currentX < this.startX + 5)
      }
    }
  }

  handleTouchEnd = (event) => {
    if (!this.moved) return
    const checkbox = this.input
    event.preventDefault()

    if (this.startX) {
      let endX = this.pointerCoord(event).x
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: false })
          this.previouslyChecked = this.state.checked
          checkbox.click()
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: true })
          this.previouslyChecked = this.state.checked
          checkbox.click()
        }
      }

      this.activated = false
      this.startX = null
      this.moved = false
    }
  }

  handleFocus = (event) => {
    const { onFocus } = this.props

    if (onFocus) {
      onFocus(event)
    }

    this.setState({ hasFocus: true })
  }

  handleBlur = (event) => {
    const { onBlur } = this.props

    if (onBlur) {
      onBlur(event)
    }

    this.setState({ hasFocus: false })
  }

  handleChangeEvent = (event) => {
    if(!this.props.hasOwnProperty('checked')) {
      const checked =
      this.setState({checked : event.target.checked }) ;
    }
    
    if(this.props.onChange) 
      this.props.onChange(event.target.checked) ;
  }

  getIcon = (type) => {
    const { icons } = this.props
    if (!icons) {
      return null
    }
    return icons[type] === undefined
      ? null
      : icons[type]
  }

  getTrackHeight = () => {
    var height ='auto' ;
    switch(this.props.size) {
      case 'small' :
        height = '14px' ;
        break ;
      case 'normal' :
      height = '24px' ;
        break ;
      case 'large' :
        height = '32px' ;
        break;
    }
    return height ;
  }

  getTrackWidth = () => {
    var width ='auto' ;
    switch(this.props.size) {
      case 'small' :
        width = '34px' ;
        break ;
      case 'normal' :
        width = '54px' ;
        break ;
      case 'large' :
        width = '32px' ;
        break;
    }
    return width ;
  }

  getThumbWidth = () => {
    var width ='auto' ;
    switch(this.props.size) {
      case 'small' :
        width = '18px' ;
        break ;
      case 'normal' :
        width = '22px' ;
        break ;
      case 'large' :
        width = '10px' ;
        break;
    }
    return width ;
  }

  getThumbHeight = () => {
    var width ='auto' ;
    switch(this.props.size) {
      case 'small' :
        width = '18px' ;
        break ;
      case 'normal' :
        width = '22px' ;
        break ;
      case 'large' :
        width = '30px' ;
        break;
    }
    return width ;
  }

  getTrackBorder = () => {
    var border ='auto' ;
    switch(this.props.size) {
      case 'small' :
        border = '24px' ;
        break ;
      case 'normal' :
        border = '34px' ;
        break ;
      case 'large' :
        border = '6px' ;
        break;
    }
    return border ;
  }

  getThumbBorder = () => {
    var border ='auto' ;
    switch(this.props.size) {
      case 'small' :
        border = '50%' ;
        break ;
      case 'normal' :
        border = '50%' ;
        break ;
      case 'large' :
        border = '6px' ;
        break;
    }
    return border ;
  }

  getThumbPosition = () => {
    var position = {
      top: "1px",
      left: "1px"
    }
    if(this.props.size == 'small') {
      position = {
        top: "-2px",
        left: "-2px"
      };
    }
    return position;
  }

  getThumbSelectedPosition = () => {
    var position = {
      left: "31px"
    }
    if(this.props.size == 'small') {
      position = {
        left: "20px"
      };
    } else if(this.props.size == 'large') {
      position = {
        left: "21px"
      };
    }
    return position;
  }

  getTrackXPosition = () => {
    var position = {
      top: "0px",
      bottom: "0px",
      right: "10px",
    }

    if(this.props.size == 'large') {
      position.right = "5px";
    }

    return position;
  }

  getTrackCheckPosition = () => {
    var position = {
      top: "0px",
      bottom: "0px",
      left: "8px",
    }

    if(this.props.size == 'large') {
      position.left = "5px";
    }

    return position;
  }
  
  render () {
    const { className, onChange, size, icons: _icons, ...inputProps } = this.props
    
    const classes = classNames('up-toggle', {
      'up-toggle--checked': this.state.checked,
      'up-toggle--focus': this.state.hasFocus,
      'up-toggle--disabled': this.props.disabled,
    }, className)

    const SizeStyle = style({
      $nest : {
        ".up-toggle-track" : {
            height: this.getTrackHeight(),
            width: this.getTrackWidth(),
            padding: 0,
            borderRadius: this.getTrackBorder()
        },
        ".up-toggle-thumb" : {
          width: this.getThumbWidth(), 
          height: this.getThumbHeight(),
          border: "1px solid #4D4D4D",
          borderRadius: this.getThumbBorder(),
          ...this.getThumbPosition()
        },
        ".up-toggle-track-x" : {
          ...this.getTrackXPosition()
        },
        ".up-toggle--checked .up-toggle-thumb" : {
          ...this.getThumbSelectedPosition()
        },
        ".up-toggle-track-check" : {
          ...this.getTrackCheckPosition()
        }
      }
    });

    return (
      <div className={classNames(WrapperStyle, SizeStyle)}>
        <div className={classes} 
          onClick={this.handleClick}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}>
          <div className='up-toggle-track'>
            <div className='up-toggle-track-check'>
              {size != 'small' ? this.getIcon('checked') : null}
            </div>
            <div className='up-toggle-track-x'>
              {size != 'small' ? this.getIcon('unchecked'): null}
            </div>
          </div>
          <div className='up-toggle-thumb' />
        </div>
        <input
            {...inputProps}
            onChange={this.handleChangeEvent}
            ref={ref => { this.input = ref }}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onClick = {(event) => event.stopPropagation()}
            className='up-toggle-screenreader-only'
            type='checkbox' />
      </div>
    )
  }
}