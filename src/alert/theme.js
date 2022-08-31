import { pbColors } from '../ui/theme';

const colors = {
  dark: {
    backgroundColor: {
      error: pbColors.red300,
      info: pbColors.blue600,
      warning: pbColors.yellow300,
      default: pbColors.gray800,
      success: pbColors.green300
    },
    borderBackground: {
      error: pbColors.red200,
      info: pbColors.blue500,
      warning: pbColors.yellow200,
      default: pbColors.gray700,
      success: pbColors.green200
    },
    iconColor: {
      error: pbColors.white,
      info: pbColors.white,
      warning: pbColors.white,
      default: pbColors.white,
      success: pbColors.white
    }
  },
  light: {
    backgroundColor: {
      error: pbColors.red100,
      info: pbColors.blue100,
      warning: '#FCF7E8',
      default: pbColors.gray100,
      success: pbColors.green100
    },
    borderBackground: {
      error: pbColors.red300,
      info: pbColors.blue500,
      warning: pbColors.yellow200,
      default: pbColors.gray400,
      success: pbColors.green300
    },
    iconColor: {
      error: pbColors.red300,
      info: pbColors.blue500,
      warning: '#BC8C45',
      default: pbColors.gray500,
      success: pbColors.green300
    }
  }
};

const sizes = {
  default: {
    padding: '18px 25px',
    borderWidth: '5px',
    iconMargin: '10px',
    iconSize: '16px',
    fontSize: '15px'
  },
  small: {
    padding: '9px 13px',
    borderWidth: '3px',
    iconMargin: '5px',
    iconSize: '14px',
    fontSize: '14px'
  }
};

export { colors, sizes };
