import styled from 'styled-components';

import { fontSize, colors } from './theme';

const StyledHeading = styled.h2`
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.pb__ui.fontFamily};
  color: ${({ theme }) => colors[theme.pb__ui.mode].fontColor};

  transition: color 0.3s ease-in-out;
  margin: 0 0 20px 0;
  font-size: ${({ as }) => fontSize[as]};
  line-height: 1.4;
`;

export { StyledHeading };
