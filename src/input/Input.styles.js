import styled from 'styled-components';

import { StyledFormItem } from '../common/form/styles';
import Icon from '../icon';

import { svgColors } from './theme';

const StyledInput = styled(StyledFormItem).attrs({
  as: 'input'
})`
  cursor: text;

  ${({ endIcon }) =>
    !!endIcon &&
    `
    padding-right: 35px;
  `}

  ${({ startIcon }) =>
    !!startIcon &&
    `
    padding-left: 35px;
  `}

${({ type }) =>
    type === 'color' &&
    `
    max-width: 100px;
    padding: 4px;
  `}
`;

const StyledIconWrapper = styled.div`
  position: relative;
`;

const StyledInputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;

  left: ${({ iconPosition }) => (iconPosition === 'start' ? '10px' : 'auto')};
  right: ${({ iconPosition }) => (iconPosition === 'end' ? '10px' : 'auto')};

  path {
    fill: ${({ theme }) => svgColors[theme.pb__ui.mode].fill};
    stroke: ${({ theme }) => svgColors[theme.pb__ui.mode].stroke};
    stroke-width: 0.5px;
  }
`;

export { StyledInput, StyledIconWrapper, StyledInputIcon };
