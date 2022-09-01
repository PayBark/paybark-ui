import styled from 'styled-components';

import { colors } from './theme';

const StyledModalBody = styled.div`
  padding: 15px;
  max-height: 65vh;
  overflow-y: auto;

  color: ${({ theme }) => theme.pb__ui.fontColor};
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
  background-color: ${({ theme }) => colors[theme.pb__ui.mode].backgroundColor};

  ${({ theme }) => `
      @media ${theme.pb__ui.breakpoints.mediumUp} {
        padding: 20px;
      }
    `}
`;

export { StyledModalBody };
