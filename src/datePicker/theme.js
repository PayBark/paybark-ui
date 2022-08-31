import { pbColors } from '../ui/theme';

const colors = {
  light: {
    backgroundColor: pbColors.white,
    borderColor: pbColors.gray400,
    fontColor: {
      default: pbColors.slate300,
      active: pbColors.white,
      inactive: pbColors.gray500,
      hover: pbColors.white,
      disabled: pbColors.gray400
    }
  },
  dark: {
    backgroundColor: pbColors.gray700,
    borderColor: pbColors.slate200,
    fontColor: {
      default: pbColors.gray200,
      active: pbColors.white,
      inactive: pbColors.gray500,
      hover: pbColors.white,
      disabled: pbColors.gray700
    }
  }
};

const dayColors = {
  light: {
    backgroundColor: {
      default: 'transparent',
      hover: pbColors.blue400,
      active: pbColors.blue500,
      today: pbColors.blue200
    }
  },
  dark: {
    backgroundColor: {
      default: 'transparent',
      hover: pbColors.slate200,
      active: pbColors.blue400,
      today: pbColors.gray800
    }
  }
};

export { colors, dayColors };
