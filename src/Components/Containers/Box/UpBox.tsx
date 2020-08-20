import * as React from 'react';
import { UpBoxProps } from './types';
import * as Proptypes from 'prop-types';
import * as cn from 'classnames';
import { getBoxStyles, getSize } from './styles';
import withTheme from '../../../Common/theming/withTheme';

const UpBox: React.FunctionComponent<UpBoxProps> = props => {
    const { children, style, onClick, className, ...othersProps } = props;

    return (
        <div
            onClick={onClick}
            style={style || {}}
            className={cn(getBoxStyles(othersProps), getSize(othersProps), className)}
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

UpBox.propTypes = {
    flexDirection: Proptypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    alignContent: Proptypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
    justifyContent: Proptypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
    alignItems: Proptypes.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
    // padding
    // margin
    color: Proptypes.string,
    backgroundColor: Proptypes.string,
    backgroundImage: Proptypes.string,
    style: Proptypes.object,
    onClick: Proptypes.func,
    selectable: Proptypes.oneOf(['none', 'auto']),
    flexWrap: Proptypes.bool,
    reverse: Proptypes.bool,
    full: Proptypes.bool,
    // boxSize
};

export { UpBox };
export default withTheme<UpBoxProps>(UpBox);
