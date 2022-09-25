import { style } from 'typestyle';

const containerStyle = style({
  maxWidth: '300px',
  width: '100%',
  display: 'flex',
  marginTop: 20,
  alignContent: 'center',
  height: 30,
  alignItems: 'center',
});

const tileStyle = (success: boolean): string =>
  style({
    height: 4,
    width: 300,
    justifyContent: 'flex-end',
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: success ? '#44cf69' : 'lightGrey',
  });

const stepStyle = (success: boolean): string =>
  style({
    backgroundColor: success ? '#22bd4b' : 'lightGrey',
    color: success ? 'white' : 'black',
    padding: '5px 10px',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  });

const percentTyleStyle = (size: any, success: boolean): string =>
  style({
    height: 4,
    width: (300 / 100) * size,
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: success ? '#44cf69' : 'lightGrey',
  });

export { containerStyle, tileStyle, stepStyle, percentTyleStyle };
