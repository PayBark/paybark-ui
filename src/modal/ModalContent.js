/* globals document */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import FocusLock from 'react-focus-lock';

import Icon from '../icon';

import useEscKeydown from '../utils/hooks/useEscKeydown';

import {
  StyledModalBackground,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle
} from './Modal.styles';

const ModalContent = (props) => {
  const { children, className, onClose, title, dataTestId } = props;

  useEscKeydown((e) => handleClose(e));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleBackgroundClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose(e);
    }
  };

  return ReactDom.createPortal(
    <FocusLock autoFocus={false}>
      <StyledModalBackground
        onClick={handleBackgroundClick}
        className={className}
      >
        <StyledModalContent data-testid={dataTestId}>
          {title && (
            <StyledModalHeader>
              <StyledModalTitle>{title}</StyledModalTitle>
              {onClose && (
                <Icon icon="close" onClick={handleClose} label="Close modal" />
              )}
            </StyledModalHeader>
          )}
          {children}
        </StyledModalContent>
      </StyledModalBackground>
    </FocusLock>,
    document.body
  );
};

ModalContent.defaultProps = {
  children: null,
  title: null,
  onClose: null,
  dataTestId: null
};

ModalContent.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Callback fired when the modal is closed.
   */
  onClose: PropTypes.func,

  /**
   * The title of the modal.
   */
  title: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default ModalContent;
