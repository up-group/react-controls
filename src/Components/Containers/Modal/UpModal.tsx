import * as React from 'react';
import { UpModalProps } from './types';
import * as classnames from 'classnames';
import * as Proptypes from 'prop-types';
import UpSvgIcon from '../../Display/SvgIcon'
import { withTheme } from '../../../Common/theming';
import { getStyles } from './styles';

const UpModal: React.FunctionComponent<UpModalProps> = props => {

    const {
        children,
        closeOnClickOutside,
        footer,
        header,
        html,
        onClose,
        showModal,
        withHeaderSeparator,
    } = props;

    const wrapperModalRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [closeOnClickOutside]);

    const handleClickOutside = e => {
        if (closeOnClickOutside && wrapperModalRef && !wrapperModalRef.current.contains(e.target)) closeModal();
    }

    const closeModal = () => {
        if (onClose) onClose();
    }

    const modalHeader = () => (
        <div
            className="up-modal_header"
            data-testid="upModalHeader"
            style={withHeaderSeparator ? { borderBottom: '1px solid #e5e5e5' } : {}}
        >
            {typeof header === 'string' ? <h3 className="up-modal_title">{header}</h3> : header}
            <span
                onClick={closeModal}
                className="up-modal_close"
                data-testid="upModalClose">
                <UpSvgIcon iconName={"close"}></UpSvgIcon>
            </span>
        </div>
    )

    const modalFooter = () => footer && (typeof footer === 'string' ? <div className="up-modal_footer">{footer}</div> : footer);

    return (
        <div className={getStyles(props)}>
            <div className={classnames("up-modal", showModal ? 'in' : 'fade')} data-testid="upModal">
                <div ref={wrapperModalRef} className="up-modal_dialog">
                    <div className="up-modal_content" data-testid="upModalContent">
                        {modalHeader()}
                        <div className="up-modal_body">
                            {children}
                            {html != null &&
                                <div dangerouslySetInnerHTML={{ __html: html }} style={{ width: "100%", minHeight: "800px", minWidth: "600px", border: "none" }} />
                            }
                        </div>
                        {modalFooter()}
                    </div>
                </div>
            </div>
            <div style={{ display: showModal === true ? 'block' : 'none' }} className="up-modal_backdrop" data-testid="upModalBackdrop"></div>
        </div>
    )
}

UpModal.defaultProps = {
    showModal: false,
    withHeaderSeparator: true,
    modalWidth: 'default',
    displayMode: 'fromTop',
    fullHeight: false,
    closeOnClickOutside: false,
    header: null,
    footer: null,
    html: null,
    onClose: null,
};

UpModal.propTypes = {
    showModal: Proptypes.bool,
    withHeaderSeparator: Proptypes.bool,
    displayMode: Proptypes.oneOf(['fromTop', 'fromBottom', 'fromRight', 'fromLeft']),
    modalWidth: Proptypes.oneOf(['half', 'full', 'default']),
    fullHeight: Proptypes.bool,
    closeOnClickOutside: Proptypes.bool,
    header: Proptypes.oneOfType([Proptypes.element, Proptypes.string]),
    footer: Proptypes.string,
    html: Proptypes.string,
    onClose: Proptypes.func,
};

export { UpModal };
export default withTheme<UpModalProps>(UpModal);