import styled from 'styled-components';

const StyledTd = styled.td`
  text-align: ${({ align }) => align};
  padding: 15px;
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
`;

export { StyledTd };
