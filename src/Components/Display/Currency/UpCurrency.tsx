import * as React from 'react';
import { style } from 'typestyle';
import { Property } from 'csstype';
import { getIntegerValue, getDecimalValue } from '../../../Common/utils/currency';
import classnames from 'classnames';
import { useCountUp } from 'react-countup';
import UpBox from '../../Containers/Box';

interface IColorProps {
  negative? : {
    float: string,
    integer: string,
  },
  default? : {
    float: string,
    integer: string,
  }
}

export interface UpCurrencyProps extends React.ClassAttributes<any> {
  value: number;
  integerFontSize?: number;
  decimalFontSize?: number;
  integerLineHeight?: number;
  decimalLineHeight?: number;
  integerFontWeight?: number;
  colors?: IColorProps;
  unit?: string;
  animate?: boolean;
  delay?: number;
  displaySign?: boolean;
}

const UpCurrency = (props: UpCurrencyProps) => {
  let positiveIntegerColor = "#D7D7D7";
  let positiveDecimalColor = "#9B9B9B";

  let negativeIntegerColor = "#D7D7D7";
  let negativeDecimalColor = "#9B9B9B";

  if (props.colors?.default) {
    positiveIntegerColor = props.colors.default.integer;
    positiveDecimalColor = props.colors.default.float;
  }

  if (props.colors?.negative) {
    negativeIntegerColor = props.colors.negative.integer;
    negativeDecimalColor = props.colors.negative.float;
  }

  const bigNumber = style({
    $nest: {
      '&.up-number-integer': {
        fontSize: (props.integerFontSize ? props.integerFontSize : 40) + 'px',
        lineHeight:
          (props.integerLineHeight
            ? props.integerLineHeight
            : (props.integerFontSize ? props.integerFontSize : 40) + 8) + 'px',
        fontWeight: props.integerFontWeight ? props.integerFontWeight : 'normal',
        color: props.value >= 0 ? positiveIntegerColor : negativeIntegerColor
      },
    },
  });

  const smallNumber = style({
    $nest: {
      '&.up-number-decimal': {
        marginTop: '8px',
        fontSize: (props.decimalFontSize ? props.decimalFontSize : 14) + 'px',
        fontWeight: 500,
        lineHeight:
          (props.decimalLineHeight
            ? props.decimalLineHeight
            : (props.decimalFontSize ? props.decimalFontSize : 14) + 2) + 'px',
        color: props.value >= 0 ? positiveDecimalColor : negativeDecimalColor
      },
    },
  });

  const { countUp } = props.animate
    ? useCountUp({
        start: 0,
        decimals: 2,
        delay: props.delay || 0,
        end: props.value,
      })
    : { countUp: 0 };

  return (
    <UpBox justifyContent={'center'} style={{ height: '100%' }}>
      <UpBox flexDirection={'row'} justifyContent={'center'}>
        <span className={classnames('up-number-integer', bigNumber)}>
          {getIntegerValue((props.animate ? countUp : props.value) as number, '')}
        </span>
        <span className={classnames('up-number-decimal', smallNumber)}>
          {getDecimalValue((props.animate ? countUp : props.value) as number, 2)}
          {props.unit ? props.unit : ''}
        </span>
      </UpBox>
    </UpBox>
  );
};

export default UpCurrency;
