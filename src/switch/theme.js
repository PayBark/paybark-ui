import { pbColors } from '../ui/theme';

const colors = {
  dark: {
    backgroundColor: {
      default: pbColors.gray700,
      checked: pbColors.blue400
    },
    boxShadow: {
      focus: pbColors.gray100
    }
  },
  light: {
    backgroundColor: {
      default: pbColors.gray300,
      checked: pbColors.blue400
    },
    boxShadow: {
      focus: pbColors.gray100
    }
  }
};

export { colors };
