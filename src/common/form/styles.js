import styled from 'styled-components';

import {
  colors,
  labelColors,
  requiredColors,
  errorColors,
  placeholderColors
} from './theme';

const StyledInputWrapper = styled.div.attrs({
  'data-c7-form-item-wrapper': 'true'
})`
  margin-bottom: 30px;
`;

const StyledFormItem = styled.input`
  height: 46px;
  padding: 0 12px;
  display: block;
  border: 1px solid;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  display: block;
  width: 100%;

  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};

  box-shadow: 0 0 1px 1px
    ${({ theme }) => colors[theme.pb__ui.mode].boxShadow.default};
  border-color: ${({ theme, hasErrorMessage }) =>
    hasErrorMessage
      ? colors[theme.pb__ui.mode].borderColor.error
      : colors[theme.pb__ui.mode].borderColor.default};
  background-color: ${({ theme }) =>
    colors[theme.pb__ui.mode].backgroundColor.default};
  color: ${({ theme }) => colors[theme.pb__ui.mode].color.default};

  :-webkit-autofill,
  :-webkit-autofill:focus,
  :-webkit-autofill:hover {
    border-color: ${({ theme, hasErrorMessage }) =>
      hasErrorMessage
        ? colors[theme.pb__ui.mode].borderColor.error
        : colors[theme.pb__ui.mode].borderColor.default};
    -webkit-text-fill-color: ${({ theme }) =>
      colors[theme.pb__ui.mode].color.default};
    -webkit-box-shadow: ${({ theme }) =>
      `0 0 0px ${
        colors[theme.pb__ui.mode].backgroundColor.default
      } #000 inset`};
    transition: background-color 5000s ease-in-out 0s;
    caret-color: ${({ theme }) => colors[theme.pb__ui.mode].color.default};
  }

  ::placeholder {
    color: ${({ theme }) => placeholderColors[theme.pb__ui.mode].color};
    font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
    font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
    font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
  }

  &:focus,
  &:-webkit-autofill:focus {
    outline: none;
    box-shadow: 0 0 1px 1px
      ${({ theme }) => colors[theme.pb__ui.mode].boxShadow.focus};
    border-color: ${({ theme }) => colors[theme.pb__ui.mode].borderColor.focus};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;

  color: ${({ theme }) => labelColors[theme.pb__ui.mode].color};
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.pb__ui.headerFontFamily};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeSmall};
`;

const StyledToggleLabel = styled.label`
  display: inline-flex;
  align-items: center;
  margin-bottom: 3px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
`;

const StyledToggleText = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => labelColors[theme.pb__ui.mode].color};
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledRequiredLabel = styled.span`
  &:after {
    content: '*';
    display: inline-block;
    color: ${({ theme }) => requiredColors[theme.pb__ui.mode].color};
    margin-left: 2px;
  }
`;

const StyledErrorMessage = styled.span`
  display: block;
  margin-top: 5px;
  padding-left: ${({ isToggle, isSwitch }) => {
    if (isToggle) {
      return '30px';
    }
    if (isSwitch) {
      return '42px';
    }
    return '0px';
  }};

  color: ${({ theme }) => errorColors[theme.pb__ui.mode].color};
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
`;

const StyledHiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0 0 30px 0;

  ${StyledInputWrapper}[data-c7-form-item-wrapper='true'] {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`;

const StyledFieldsetLabel = styled(StyledLabel).attrs({
  as: 'legend'
})`
  margin-bottom: 10px;
  display: block;
  width: 100%;
`;

const StyledDescription = styled.p`
  display: block;
  margin-top: 5px;
  margin-bottom: 0;
  padding-left: ${({ isToggle, isSwitch }) => {
    if (isToggle) {
      return '30px';
    }
    if (isSwitch) {
      return '42px';
    }
    return '0px';
  }};

  color: ${({ theme }) => theme.pb__ui.secondaryFontColor};
  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
  font-size: ${({ theme }) => theme.pb__ui.fontSizeSmall};
`;

export {
  StyledFormItem,
  StyledLabel,
  StyledToggleLabel,
  StyledToggleText,
  StyledRequiredLabel,
  StyledErrorMessage,
  StyledInputWrapper,
  StyledHiddenInput,
  StyledFieldset,
  StyledFieldsetLabel,
  StyledDescription
};
