import styled from 'styled-components';

import { theadColors } from './theme';

const StyledThead = styled.thead`
  width: 100%;

  tr {
    background-color: ${({ theme }) =>
      theadColors[theme.pb__ui.mode].backgroundColor} !important;
  }
`;

export { StyledThead };
