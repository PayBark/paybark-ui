import { pbColors } from '../ui/theme';

const colors = {
  dark: {
    backgroundColor: {
      default: pbColors.slate300,
      checked: pbColors.blue400
    },
    borderColor: {
      default: pbColors.gray700,
      disabled: pbColors.gray500,
      hover: pbColors.blue400,
      focus: pbColors.blue400,
      checked: pbColors.blue400
    },
    boxShadow: {
      focus: pbColors.gray700
    }
  },
  light: {
    backgroundColor: {
      default: pbColors.white,
      checked: pbColors.blue400
    },
    borderColor: {
      default: pbColors.gray500,
      disabled: pbColors.gray500,
      hover: pbColors.blue400,
      focus: pbColors.blue400,
      checked: pbColors.blue400
    },
    boxShadow: {
      focus: pbColors.blue200
    }
  }
};

export { colors };
