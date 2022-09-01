import styled from 'styled-components';

import { tableColors } from './theme';

const StyledTableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 20px;
  border: 1px solid;
  border-color: ${({ theme }) => tableColors[theme.pb__ui.mode].borderColor};
  border-radius: 3px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  font-family: ${({ theme }) => theme.pb__ui.headerFontFamily};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
`;

export { StyledTableWrapper, StyledTable };
