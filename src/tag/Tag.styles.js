import styled from 'styled-components';

import { colors } from './theme';

const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  min-height: 30px;
  border-radius: 30px;
  border: none;
  margin: 0 5px 5px 0;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.2px;
  max-width: 100%;
  transition: all 0.3s ease-in-out;

  font-weight: ${({ theme }) => theme.pb__ui.fontWeightBase};
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};

  background-color: ${({ theme, variant }) =>
    colors[theme.pb__ui.mode][variant].backgroundColor};
  color: ${({ theme, variant }) => colors[theme.pb__ui.mode][variant].color};
`;

const StyledTagLabel = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledDeleteButton = styled.button`
  margin-left: 10px;
  border-radius: 50%;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  min-width: 20px;
  cursor: pointer;
  padding: 0;
  margin-right: -5px;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.4);
  color: rgb(41, 50, 56);

  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
  font-size: 16px;

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export { StyledTag, StyledTagLabel, StyledDeleteButton };
