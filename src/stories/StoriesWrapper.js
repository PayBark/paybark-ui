import { useState } from 'react';
import styled from 'styled-components';

import Card from '../card';
import LineBreak from '../lineBreak';
import Switch from '../switch';
import PayBarkUI from '../ui';

const StoriesWrapper = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { children } = props;

  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <PayBarkUI mode={isDarkMode ? 'dark' : 'light'}>
      <WrapperStyles>
        <Switch
          checked={isDarkMode}
          onChange={handleChange}
          label="Dark Mode"
        />
        <LineBreak />
        {children}
      </WrapperStyles>
    </PayBarkUI>
  );
};

const WrapperStyles = styled(Card)`
  background-color: ${({ theme }) => theme.c7__ui.backgroundColor};
`;

export default StoriesWrapper;
