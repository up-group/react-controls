import * as React from 'react';
import * as classnames from 'classnames';
import './bootstrap-grid.css';
import SvgIcon from '../../Display/SvgIcon/index';
import { getStyles } from './styles';
import TileProps from './types';

const UpTile: React.FunctionComponent<TileProps> = props => {

    const [isCollapse, setCollapse] = React.useState<boolean>(false);

    const handleCollapse = () => setCollapse(!isCollapse);

    const {
        title,
        children,
        maxHeight,
        footer
    } = props;

    return (
        <div className={classnames('UpTile', getStyles)}>
            <div className={"box box-home" + (!isCollapse ? "" : " collapsed-box")}>
                <div className="box-header with-border">
                    <h3 className="box-title">
                        {title}
                    </h3>
                    <div className="box-tools pull-right">
                        <button data-widget="collapse" type="button" className="btn btn-box-tool" onClick={handleCollapse}>
                            <SvgIcon height={15} width={15} iconName={isCollapse ? "plus" : "minus"} />
                        </button>
                    </div>
                </div>
                <div className="box-body">
                    <div style={maxHeight !== null ? { maxHeight: `${maxHeight}px`, overflowY: 'auto' } : {}}>
                        {children}
                    </div>
                </div>
                {footer && <div className="box-footer text-center">
                    {footer}
                </div>}
            </div>
        </div>
    )
};

UpTile.defaultProps = {
    title: null,
    footer: null,
    maxHeight: null
};

export default UpTile;