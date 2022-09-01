import styled from 'styled-components';

import { StyledLabel } from '../common/form/styles';

import { colors } from './theme';

const StyledDataDisplayLabel = styled(StyledLabel).attrs({
  as: 'span'
})`
  cursor: initial;
`;

const StaticDataDisplayStyles = styled.p`
  margin: 0;

  color: ${({ theme }) => colors[theme.pb__ui.mode].fontColor};
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
`;

export { StyledDataDisplayLabel, StaticDataDisplayStyles };
