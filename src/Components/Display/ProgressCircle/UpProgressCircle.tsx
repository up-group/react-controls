import * as React from 'react';
import { style } from 'typestyle';

import defaultTheme, { UpThemeColorMap as colorMap}  from '../../../Common/theming/'

import Currency from '../Currency';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { NestedCSSProperties } from 'typestyle/lib/types';
import UpTooltip, { UpTooltipProps } from '../Tooltip';


const display1LeftGreyLevel1: NestedCSSProperties = {
    fontFamily: 'Roboto',
    fontSize: '34px',
    fontWeight: 500,
    textAlign: 'left',
    color: colorMap.gray1,
  };
  
const body1RightGreyLevel1: NestedCSSProperties = {
    fontFamily: 'Roboto',
    fontSize: '14px',
    textAlign: 'left',
    color: colorMap.gray1,
};
  
const body1CenterGreyLevel1: NestedCSSProperties = {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    textAlign: 'center',
    color: colorMap.gray1,
  };

export type ModeProgress = 'determinate' | 'indeterminate';
export type ModeDisplayValue = 'none' | 'percentage' | 'fraction';

export interface IProgressCircleProps extends WithThemeProps {
  completedColor?: string; // color of the progress bar
  uncompletedColor?: string; // the color of the progress uncompleted
  backgroundColor?: string;
  labelStyle?: object;
  valueLabelStyle?: object;
  uniteStyle?: object;
  max?: number;
  min?: number;
  size?: number; // The diameter of the progress in pixels.
  thickness?: number; // Stroke width in pixels.
  value?: number; // The value of progress, only works in determinate mode.
  shadow?: boolean;
  uniteLabel?: string;
  modeDisplayValue?: ModeDisplayValue;
  clockWise?: boolean;
}

const CircularProgressStyle = style({
  position: 'absolute',
  top: 0,
  left: 0,
});

const CompletedCircularProgressStyle = style({
  zIndex: 5,
});

const WrapperCircularProgressStyle = style({
  position: 'relative',
  display: 'block',
  margin: 'auto',
  boxShadow: '0 0 1em black',
  borderRadius: '100%',
  $nest: {
    '&:after': {},
    svg: {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'rotate(-90deg)',
    },
    '& svg > circle': {
      strokeDashArray :'0',
      filter: 'url(#dropshadow)',
      transition : 'all 1s linear',
    },
  },
});

const DefaultValueLabelStyle = {
  ...display1LeftGreyLevel1,
  fontSize: '2rem',
  marginRight: '8px',
};

const DefaultWrapperValueLabelStyle = style({
  ...body1RightGreyLevel1,
  marginBottom:'8px',
  textAlign: 'center',
});

const Shadow = (
  <defs>
    <filter
      id="dropshadow"
      x="-40%"
      y="-40%"
      width="200%"
      height="200%"
      filterUnits="userSpaceOnUse"
    >
      <feGaussianBlur stdDeviation="3" />
      <feOffset dx="-2" dy="6" result="offsetblur" />
      <feFlood floodColor={colorMap.gray2} floodOpacity="0.50" />
      <feComposite in2="offsetblur" operator="in" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

const DisplayValue = ({value,
    max,
    modeDisplayValue,
    valueLabelStyle}) => {
  switch (modeDisplayValue) {
    case 'none':
      return null;
    case 'fraction':
      return (
        <div className={DefaultWrapperValueLabelStyle}>
          <span className={style(valueLabelStyle)}>
            <Currency value={value} />
          </span>
          <span> / <Currency value={max} /></span>
        </div>
      );
    case 'percentage':
      return (
        <div className={style(valueLabelStyle)}>
          <span>{Math.ceil(value / max * 100)}</span>
        </div>
      );
  }
  return null;
};

const DisplayUnite = ({ uniteLabel, uniteStyle }) => {
  return  (uniteLabel ? <div className={style(uniteStyle)}>{uniteLabel}</div> : null) ;
};

export interface IProgressCircleState {
  completedDashOffset : number
}

const getCompletedOffset = (value: number, maxValue : number, size: number, clockWise : boolean): number => {
  const r = size;
  const c = Math.PI * (r * 2);
  let v = value ;
  if (value < 0) {
    v = 0;
  }
  if (value > maxValue) {
    v = maxValue;
  }
  const offsetValue = (maxValue - value) / maxValue * c ;
  return clockWise ?  -offsetValue : offsetValue ;
};

const getRadius = (size) => {
  return  Math.abs(size / 2 - 10) ;
}

class ProgressCircle extends React.PureComponent<IProgressCircleProps, IProgressCircleState> {
  // The ref to the completed circle
  circle;

  static defaultProps: IProgressCircleProps = {
    min: 0,
    max: 100,
    size: 120,
    thickness: 5,
    value: 0,
    completedColor: colorMap.primary,
    uncompletedColor: colorMap.disabledBg,
    backgroundColor: colorMap.white,
    shadow: true,
    uniteLabel: '',
    modeDisplayValue: 'fraction',
    clockWise: true,
    theme: defaultTheme,
  };

  private completedDashOffset: any;

  constructor(props) {
    super(props);
    this.state = {
      completedDashOffset : getCompletedOffset(0, props.max, getRadius(props.size), props.clockWise),
    };
  }

  static getDerivedStateFromProps(props: IProgressCircleProps, state: IProgressCircleState) {
    return  {
      completedDashOffset : getCompletedOffset(props.value, props.max, getRadius(props.size), props.clockWise),
    }
  }

  componentDidMount() {
    const {
      value,
      max,
      clockWise,
      size,
    } = this.props;

    const r = getRadius(size) ;
    this.completedDashOffset =
    setTimeout( // change to some random crap every 800 ms
      () =>
        this.setState({
          completedDashOffset: getCompletedOffset(value, max, r, clockWise),
        }),
      300,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.completedDashOffset);
  }


  render() {
    const {
      completedColor,
      uncompletedColor,
      thickness,
      value,
      size,
      backgroundColor,
      shadow,
      max,
      modeDisplayValue,
      uniteStyle,
      uniteLabel,
      valueLabelStyle,
    } = this.props;

    const LabelCircularProgressStyle = style({
      position: 'absolute',
      top: '38px',
      left: '28px',
      right:'0px',
      width: `${size - 20 - 36}px`,
      textAlign: 'center',
    });

    const r = getRadius(size) ;
    const fullDashOffset = Math.PI * 2 * r ;
    const unCompletedDashOffset = 0;

    const renderValue = <div className={LabelCircularProgressStyle}>
      <DisplayValue value={value} max={max} modeDisplayValue={modeDisplayValue} valueLabelStyle={valueLabelStyle || DefaultValueLabelStyle } />
      <DisplayUnite uniteLabel={uniteLabel} uniteStyle={uniteStyle || body1CenterGreyLevel1} />
    </div>

    return (
      <UpTooltip content={this.props.size <= 60 ? renderValue : null}>
        {
          (props: UpTooltipProps) => (
            <div data-tip="tooltip" data-for={props.id} className={WrapperCircularProgressStyle}>
              <svg
                width={size}
                height={size}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                {shadow ? Shadow : null}
                <circle
                  style={shadow ? { filter: 'url(#dropshadow)' } : {}}
                  strokeWidth={thickness}
                  stroke={uncompletedColor}
                  r={r}
                  cx={size / 2}
                  cy={size / 2}
                  fill={backgroundColor}
                  strokeDasharray={fullDashOffset}
                  strokeDashoffset={unCompletedDashOffset}
                />
                <circle
                  strokeWidth={thickness}
                  stroke={completedColor}
                  r={r}
                  cx={size / 2}
                  cy={size / 2}
                  fill="transparent"
                  strokeDasharray={fullDashOffset}
                  strokeDashoffset={this.state.completedDashOffset}
                />
              </svg>
              {this.props.size > 60 &&
                renderValue
              }
            </div>
          )}
      </UpTooltip>
    );
  }
}

export default ProgressCircle ;
