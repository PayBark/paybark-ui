import styled from 'styled-components';

import Icon from '../icon';

import { colors } from './theme';

const StyledIconContainer = styled.div`
  background: ${({ theme, color }) =>
    colors[theme.pb__ui.mode][color].backgroundColor};
  border-radius: 2px;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 40px;
`;

const StyledIcon = styled(Icon)`
  path {
    fill: ${({ theme, color }) => colors[theme.pb__ui.mode][color].fillColor};
  }
`;

export { StyledIconContainer, StyledIcon };
