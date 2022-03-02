import * as React from 'react';
import { UpModalProps } from './types';
import classnames from 'classnames';
import UpSvgIcon from '../../Display/SvgIcon';
import { withTheme } from '../../../Common/theming';
import { getStyles } from './styles';

import { getTestableComponentProps } from '../../../Common/utils/types';

const UpModal: React.FunctionComponent<UpModalProps> = props => {
  const { children, closeOnClickOutside, footer, header, html, onClose, showModal, withHeaderSeparator } = props;

  const wrapperModalRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickOutside]);

  const handleClickOutside = e => {
    if (closeOnClickOutside && wrapperModalRef && !wrapperModalRef.current.contains(e.target)) closeModal();
  };

  const closeModal = () => {
    if (onClose) onClose();
  };

  const modalHeader = () => (
    <div className="up-modal_header" style={withHeaderSeparator ? { borderBottom: '1px solid #e5e5e5' } : {}}>
      {typeof header === 'string' ? <h3 className="up-modal_title">{header}</h3> : header}
      <span onClick={closeModal} className="up-modal_close">
        <UpSvgIcon iconName={'close'}></UpSvgIcon>
      </span>
    </div>
  );

  const modalFooter = () =>
    footer && (typeof footer === 'string' ? <div className="up-modal_footer">{footer}</div> : footer);

  return (
    <div className={getStyles(props)}>
      <div className={classnames('up-modal', showModal ? 'in' : 'fade')} {...getTestableComponentProps(props)}>
        <div ref={wrapperModalRef} className="up-modal_dialog">
          <div className="up-modal_content">
            {modalHeader()}
            <div className="up-modal_body">
              {children}
              {html != null && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                  style={{
                    width: '100%',
                    minHeight: '800px',
                    minWidth: '600px',
                    border: 'none',
                  }}
                />
              )}
            </div>
            {modalFooter()}
          </div>
        </div>
      </div>
      <div
        style={{
          display: showModal === true ? 'block' : 'none',
        }}
        className="up-modal_backdrop"
      ></div>
    </div>
  );
};

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
  screenPosition: 'top',
};

export { UpModal };

export default withTheme<UpModalProps>(UpModal);
