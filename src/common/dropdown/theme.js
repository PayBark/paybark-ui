import { pbColors } from '../../ui/theme';

const colors = {
  dark: {
    fontColor: {
      default: pbColors.gray200,
      hover: pbColors.gray500,
      focus: pbColors.gray500,
      disabled: pbColors.gray500
    }
  },
  light: {
    fontColor: {
      default: pbColors.slate300,
      hover: pbColors.gray700,
      focus: pbColors.gray700,
      disabled: pbColors.gray400
    }
  }
};

const dropdownColors = {
  dark: {
    backgroundColor: {
      default: pbColors.slate300
    },
    borderColor: {
      default: pbColors.gray700
    },
    shadowColor: {
      default: 'rgba(0, 0, 0, .5)'
    }
  },
  light: {
    backgroundColor: {
      default: pbColors.white
    },
    borderColor: {
      default: pbColors.gray300
    },
    shadowColor: {
      default: 'rgba(0, 0, 0, .15)'
    }
  }
};

const dropdownButtonColors = {
  dark: {
    backgroundColor: {
      default: 'transparent',
      hover: pbColors.slate200,
      focus: pbColors.slate200
    }
  },
  light: {
    backgroundColor: {
      default: 'transparent',
      hover: pbColors.gray100,
      focus: pbColors.gray100
    }
  }
};

export { colors, dropdownColors, dropdownButtonColors };
