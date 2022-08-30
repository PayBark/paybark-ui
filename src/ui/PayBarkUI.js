import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { createTheme, GlobalStyles } from './theme';

const PayBarkUI = (props) => {
  const { children, mode } = props;
  const theme = createTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

PayBarkUI.defaultProps = {
  mode: 'light'
};

PayBarkUI.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark'])
};

export default PayBarkUI;
