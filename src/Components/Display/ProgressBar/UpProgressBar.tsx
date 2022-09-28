import * as React from 'react';
import { UpProgressBarTypes } from './types';
import Tile from './Tile';
import Step from './Step';
import PercentTile from './PercentTile';
import { containerStyle } from './style';

const UpProgressBar = (props: UpProgressBarTypes): React.ReactElement => {
  const {
    values = [],
    type = '0',
    maxValue = 10,
    value = 10,
    firstValueToDisplay,
    secondValueToDisplay,
    unit = '',
  } = props;

  switch (type) {
    case '0': {
      return (
        <div className={containerStyle}>
          {values.map(({ step, success, isFirstStep }, index) => (
            <>
              {isFirstStep && <Step value={step} success={success} />}
              {index < values.length && !isFirstStep && <Tile success={success} />}
              {!isFirstStep && <Step value={step} key={index} success={success} />}
            </>
          ))}
        </div>
      );
    }
    case '1': {
      const startSize = value === 0 ? 0 : (value / maxValue) * 100;
      const endSize = value === 0 ? 300 : 100 - startSize;
      return (
        <div className={containerStyle}>
          <PercentTile success={true} size={startSize} />
          <Step value={value} success={true} firstValueToDisplay={firstValueToDisplay} unit={unit} />
          {maxValue !== value && (
            <>
              <PercentTile success={false} size={endSize} />
              <Step value={maxValue} success={false} secondValueToDisplay={secondValueToDisplay} unit={unit} />
            </>
          )}
        </div>
      );
    }
    case '2': {
      return (
        <div className={containerStyle}>
          {values.map(({ step, success, isFirstStep }, index) => (
            <>
              {isFirstStep && <Step value={step} success={success} />}
              {index < values.length && !isFirstStep && <Tile success={success} />}
              {!isFirstStep && <Step value={step} key={index} success={success} />}
            </>
          ))}
        </div>
      );
    }

    default: {
      return (
        <div className={containerStyle}>
          {values.map(({ step, success, isFirstStep }, index) => (
            <>
              {isFirstStep && <Step value={step} success={success} />}
              {index < values.length && !isFirstStep && <Tile success={success} />}
              {!isFirstStep && <Step value={step} key={index} success={success} />}
            </>
          ))}
        </div>
      );
    }
  }
};

export default UpProgressBar;
