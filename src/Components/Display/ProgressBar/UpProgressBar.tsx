import * as React from 'react';
import { style } from 'typestyle';
import { UpProgressBarTypes, UpStepValues, UpTyleType } from './types';

const Tile = (props: UpTyleType): React.ReactElement => {
  const { success } = props;

  const tileStyle = style({
    height: 4,
    width: 50,
    justifyContent: 'flex-end',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: success ? '#44cf69' : '#F59100',
  });

  return <div className={tileStyle} />;
};

const Step = (props: UpStepValues): React.ReactElement => {
  const { value, success, unit } = props;

  const valueWithUnit = `${value}${unit}`;
  return (
    <div
      className={style({
        backgroundColor: success ? '#22bd4b' : 'lightGrey',
        width: 40,
        height: 40,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
      })}
    >
      {valueWithUnit}
    </div>
  );
};

const UpProgressBar = (props: UpProgressBarTypes): React.ReactElement => {
  const { values = [], visible = true, unit = '' } = props;

  const containerStyle = style({
    maxWidth: '300px',
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    marginTop: 10,
    height: 30,
    alignItems: 'center',
  });

  return (
    <div className={containerStyle}>
      {visible &&
        values.map(({ step, success }, index) => (
          <>
            <Step value={step} key={index} success={success} unit={unit} />
            {index < values.length - 1 && <Tile success={success} />}
          </>
        ))}
    </div>
  );
};

export default UpProgressBar;
