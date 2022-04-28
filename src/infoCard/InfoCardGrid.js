import PropTypes from 'prop-types';

import { InfoCardGridStyles } from './InfoCard.styles';

const InfoCardGrid = (props) => {
  const { children, dataTestId, className } = props;
  return (
    <InfoCardGridStyles data-testid={dataTestId} className={className}>
      {children}
    </InfoCardGridStyles>
  );
};

InfoCardGrid.defaultProps = {
  children: null,
  dataTestId: null,
  className: null
};

InfoCardGrid.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default InfoCardGrid;
