import styled from 'styled-components';

import { StyledHiddenInput, StyledToggleLabel } from '../common/form/styles';

import { colors } from './theme';

const StyledRadio = styled.span`
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  background: ${({ theme }) =>
    colors[theme.pb__ui.mode].backgroundColor.default};
  border-color: ${({ theme }) => colors[theme.pb__ui.mode].borderColor.default};

  &:after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => colors[theme.pb__ui.mode].borderColor.checked};
    border-radius: 50%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  ${StyledToggleLabel}:hover + & {
    border-color: ${({ theme }) => colors[theme.pb__ui.mode].borderColor.hover};
  }

  ${StyledHiddenInput}:disabled + & {
    opacity: 0.4;
    cursor: not-allowed;
    border-color: ${({ theme }) =>
      colors[theme.pb__ui.mode].borderColor.disabled};
  }

  ${StyledHiddenInput}:focus + & {
    border-color: ${({ theme }) => colors[theme.pb__ui.mode].borderColor.focus};
    box-shadow: 0px 0px 1px 3px
      ${({ theme }) => colors[theme.pb__ui.mode].boxShadow.focus};
  }

  ${StyledHiddenInput}:checked + & {
    border-color: ${({ theme }) =>
      colors[theme.pb__ui.mode].borderColor.checked};
    background: ${({ theme }) =>
      colors[theme.pb__ui.mode].backgroundColor.checked};

    &:after {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export { StyledRadio };
