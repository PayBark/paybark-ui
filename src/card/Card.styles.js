import styled from 'styled-components';

import { colors } from './theme';

const StyledCard = styled.div`
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};

  padding: 30px;
  transition: all 0.3s ease-in-out;
  ${({ theme }) => `
    background: ${colors[theme.pb__ui.mode].backgroundColor};
    border: 1px solid ${colors[theme.pb__ui.mode].borderColor};
    border-radius: ${theme.pb__ui.borderRadius};
    color: ${theme.pb__ui.fontColor};
  `}
`;

export { StyledCard };
