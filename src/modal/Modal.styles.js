import styled from 'styled-components';

import { colors } from './theme';

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModalContent = styled.div`
  box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22),
    0 25px 55px 0 rgba(0, 0, 0, 0.21);
  border-radius: 3px;
  width: 600px;
  max-width: 90vw;

  background-color: ${({ theme }) => colors[theme.pb__ui.mode].backgroundColor};

  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.pb__ui.fontFamily};
  color: ${({ theme }) => theme.pb__ui.fontColor};
`;

const StyledModalHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme }) => colors[theme.pb__ui.mode].borderColor};

  ${({ theme }) => `
      @media ${theme.pb__ui.breakpoints.mediumUp} {
        padding: 20px;
      }
    `}
`;

const StyledModalTitle = styled.h2`
  flex: auto;
  margin: 0;
  font-size: 18px;

  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.pb__ui.fontFamily};
  color: ${({ theme }) => theme.pb__ui.fontColor};
`;

export {
  StyledModalBackground,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle
};
