import styled from 'styled-components';

import { colors } from './theme';

const StyledText = styled.span`
  margin: 0;
  color: ${({ theme, error, secondary }) => {
    if (error) {
      return colors[theme.pb__ui.mode].errorFontColor;
    }

    if (secondary) {
      return colors[theme.pb__ui.mode].secondaryFontColor;
    }

    return theme.pb__ui.fontColor;
  }};
  transition: color 0.3s ease-in-out;
  font-family: ${({ theme }) => theme.pb__ui.fontFamily};
  font-weight: ${({ strong, theme }) =>
    strong ? theme.pb__ui.fontWeightStrong : theme.pb__ui.fontWeightBase};
  font-style: ${({ italic }) => (italic ? 'italic' : '')};
  font-size: ${({ small, theme }) =>
    small ? theme.pb__ui.fontSizeSmall : theme.pb__ui.fontSizeBase};
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : '')};
  text-decoration: ${({ strikeThrough }) =>
    strikeThrough ? 'line-through' : ''};
  line-height: 1.643;
`;

export { StyledText };
