import styled from 'styled-components';

import Icon from '../icon';

import { colors } from './theme';

const baseTransition = `all 0.2s ease-in-out`;

const NavLinkIconStyles = styled(Icon)`
  margin-right: 15px;
  path {
    transition: ${baseTransition};
  }
`;

const NavLinkStyles = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 10px;

  margin-bottom: 5px;
  transition: ${baseTransition};
  border: none;
  background: transparent;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.05em;
  font-family: ${({ theme }) => theme.pb__ui.headerFontFamily};

  ${({ theme, $activeClassName }) => `
    border-radius: ${theme.pb__ui.borderRadius};
    color: ${colors[theme.pb__ui.mode].primaryLink.fontColor.default};

    ${NavLinkIconStyles} {
      path {
        fill: ${colors[theme.pb__ui.mode].primaryLink.svgColor.default};
      }
    }

    &:hover {
        background: ${
          colors[theme.pb__ui.mode].primaryLink.backgroundColor.hover
        };
      ${NavLinkIconStyles} {
        path {
          fill: ${colors[theme.pb__ui.mode].primaryLink.svgColor.hover};
        }
      }
    }

    &.${$activeClassName} {
      color: ${colors[theme.pb__ui.mode].primaryLink.fontColor.active};
      background: ${
        colors[theme.pb__ui.mode].primaryLink.backgroundColor.active
      };
      ${NavLinkIconStyles} {
        path {
          fill: ${colors[theme.pb__ui.mode].primaryLink.svgColor.active};
        }
      }
    }
  `}
`;

const SubNavLinkStyles = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.pb__ui.fontSizeBase};
  transition: ${baseTransition};
  border: none;
  background-color: inherit;
  cursor: pointer;
  width: 100%;
  font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};

  ${({ theme, $activeClassName }) => `
    border-radius: ${theme.pb__ui.borderRadius};
    color: ${colors[theme.pb__ui.mode].secondaryLink.fontColor.default};

    &:hover {
      background: ${
        colors[theme.pb__ui.mode].secondaryLink.backgroundColor.hover
      };
    }

    &.${$activeClassName} {
      background: ${
        colors[theme.pb__ui.mode].secondaryLink.backgroundColor.active
      };
      color: ${colors[theme.pb__ui.mode].secondaryLink.fontColor.active};
    }
  `}
`;

const SubNavStyles = styled.div`
  transition: ${baseTransition};
  padding-left: 35px;

  ${({ isOpen }) => `
    max-height: ${isOpen ? '1000px' : '0px'};
    overflow: ${isOpen ? 'visible' : 'hidden'};
    display: ${isOpen ? 'block' : 'none'};
  `}

  button {
    width: fit-content(100%);
  }
`;

const NavStyles = styled.nav`
  background: ${({ theme }) => colors[theme.pb__ui.mode].backgroundColor};
  width: 260px;
  padding: 10px 10px 5px 10px;
  z-index: 1000;
  overflow: auto;
  border-right: 1px solid
    ${({ theme }) => colors[theme.pb__ui.mode].borderColor};
  display: flex;
  flex-direction: column;
`;

export {
  NavLinkStyles,
  NavLinkIconStyles,
  SubNavLinkStyles,
  SubNavStyles,
  NavStyles
};
