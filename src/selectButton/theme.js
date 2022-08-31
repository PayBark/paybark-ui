import { pbColors } from '../ui/theme';

const colors = {
  dark: {
    borderColor: {
      default: pbColors.blue500,
      hover: pbColors.blue300,
      focus: pbColors.blue300,
      disabled: pbColors.gray500
    },
    backgroundColor: {
      default: pbColors.slate300,
      hover: pbColors.slate200,
      focus: pbColors.slate200,
      disabled: pbColors.slate300
    },
    fontColor: {
      default: pbColors.blue400,
      hover: pbColors.blue300,
      focus: pbColors.blue300,
      disabled: pbColors.gray500
    }
  },
  light: {
    borderColor: {
      default: pbColors.blue400,
      hover: pbColors.blue400,
      focus: pbColors.blue400,
      disabled: pbColors.gray500
    },
    backgroundColor: {
      default: pbColors.white,
      hover: pbColors.gray300,
      focus: pbColors.gray300,
      disabled: pbColors.white
    },
    fontColor: {
      default: pbColors.blue500,
      hover: pbColors.blue500,
      focus: pbColors.blue500,
      disabled: pbColors.gray500
    }
  }
};

const shadows = {
  dark: {
    default: '',
    hover: '',
    focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
    disabled: ''
  },
  light: {
    default: '',
    hover: '',
    focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
    disabled: ''
  }
};

export { colors, shadows };
