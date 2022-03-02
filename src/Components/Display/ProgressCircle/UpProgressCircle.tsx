import * as React from 'react';
import { style } from 'typestyle';
import defaultTheme, { UpThemeColorMap as colorMap } from '../../../Common/theming/';
import Currency from '../Currency';
import UpTooltip, { UpTooltipProps } from '../Tooltip';
import {
  DefaultUniteStyle,
  DefaultValueLabelStyle,
  LabelCircularProgressStyle,
  TooltipCircularProgressStyle,
  WrapperCircularProgressStyle,
} from './styles';
import { IProgressCircleProps, IProgressCircleState } from './types';

const Shadow = (
  <defs>
    <filter id="dropshadow" x="-40%" y="-40%" width="200%" height="200%" filterUnits="userSpaceOnUse">
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

const DisplayValue = ({ value, max, modeDisplayValue, valueLabelStyle }) => {
  switch (modeDisplayValue) {
    case 'none':
      return null;
    case 'fraction':
      return (
        <div className={style(valueLabelStyle)}>
          <span className={'up-progress-value'}>
            <Currency value={value} />
          </span>
          <span className={'up-progress-value-max'}>
            {' '}
            / <Currency value={max} />
          </span>
        </div>
      );
    case 'percentage':
      return (
        <div className={style(valueLabelStyle)}>
          <span>{Math.ceil((value / max) * 100)}</span>
        </div>
      );
  }
  return null;
};

const DisplayUnite = ({ uniteLabel, uniteStyle }) => {
  return uniteLabel ? <div className={style(uniteStyle)}>{uniteLabel}</div> : null;
};

const getCompletedOffset = (value: number, maxValue: number, size: number, clockWise: boolean): number => {
  const r = size;
  const c = Math.PI * (r * 2);
  let v = value;
  if (value < 0) {
    v = 0;
  }
  if (value > maxValue) {
    v = maxValue;
  }
  const offsetValue = ((maxValue - value) / maxValue) * c;
  return clockWise ? -offsetValue : offsetValue;
};

const getRadius = size => {
  return Math.abs(size / 2 - 10);
};

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
    shadow: false,
    uniteLabel: '',
    modeDisplayValue: 'fraction',
    clockWise: true,
    theme: defaultTheme,
  };

  private completedDashOffset: any;

  constructor(props) {
    super(props);
    this.state = {
      completedDashOffset: getCompletedOffset(0, props.max, getRadius(props.size), props.clockWise),
    };
  }

  static getDerivedStateFromProps(props: IProgressCircleProps, state: IProgressCircleState) {
    return {
      completedDashOffset: getCompletedOffset(props.value, props.max, getRadius(props.size), props.clockWise),
    };
  }

  componentDidMount() {
    const { value, max, clockWise, size } = this.props;

    const r = getRadius(size);
    this.completedDashOffset = setTimeout(
      // change to some random crap every 800 ms
      () =>
        this.setState({
          completedDashOffset: getCompletedOffset(value, max, r, clockWise),
        }),
      300
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

    const r = getRadius(size);
    const fullDashOffset = Math.PI * 2 * r;
    const unCompletedDashOffset = 0;

    const renderValue = (
      <div className={LabelCircularProgressStyle(this.props)}>
        <DisplayValue
          value={value}
          max={max}
          modeDisplayValue={this.props.size < 80 ? 'percentage' : modeDisplayValue}
          valueLabelStyle={valueLabelStyle || DefaultValueLabelStyle(this.props)}
        />
        <DisplayUnite uniteLabel={uniteLabel} uniteStyle={uniteStyle || DefaultUniteStyle(this.props)} />
      </div>
    );

    const renderTooltip = (
      <div className={TooltipCircularProgressStyle(this.props)}>
        <DisplayValue value={value} max={max} modeDisplayValue={modeDisplayValue} valueLabelStyle={valueLabelStyle} />
        <DisplayUnite uniteLabel={uniteLabel} uniteStyle={uniteStyle || DefaultUniteStyle(this.props)} />
      </div>
    );

    return (
      <UpTooltip content={this.props.size <= 60 ? renderTooltip : null}>
        {(props: UpTooltipProps) => (
          <div data-tip="tooltip" data-for={props.id} className={WrapperCircularProgressStyle}>
            <svg width={size + 20} height={size + 20} version="1.1" xmlns="http://www.w3.org/2000/svg">
              {Shadow}
              <circle
                x={10}
                y={10}
                style={
                  shadow
                    ? {
                        filter: 'url(#dropshadow)',
                      }
                    : {}
                }
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
                x={10}
                y={10}
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
            {this.props.size > 60 && renderValue}
          </div>
        )}
      </UpTooltip>
    );
  }
}

export default ProgressCircle;
