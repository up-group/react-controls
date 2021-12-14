import React from 'react';
import { UpBoxProps } from './types';
import classnames from 'classnames';
import { getBoxStyles, getSize } from './styles';
import withTheme from '../../../Common/theming/withTheme';

const UpBox: React.FunctionComponent<UpBoxProps> = props => {
    const { children, style, onClick, className, ...othersProps } = props;

    return (
        <div
            onClick={onClick}
            style={style || {}}
            className={classnames(getBoxStyles(othersProps), getSize(othersProps), className)}
        >
            {children || null}
        </div>
    );
}

UpBox.defaultProps = {
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    pad: 'none',
    margin: 'none',
    color: 'black',
    backgroundColor: 'transparent',
    backgroundImage: 'transparent',
    style: {},
    onClick: () => { },
    selectable: 'auto',
    flexWrap: false,
    reverse: false,
    full: false,
    boxSize: 'auto'
};

export { UpBox };
export default withTheme<UpBoxProps>(UpBox);
