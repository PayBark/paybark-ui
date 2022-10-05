import { pbColors } from '../../ui/theme';

const colors = {
  dark: {
    color: {
      default: pbColors.gray200
    },
    borderColor: {
      default: pbColors.gray600,
      focus: pbColors.blue300,
      error: pbColors.red200
    },
    backgroundColor: {
      default: pbColors.slate300
    },
    boxShadow: {
      default: 'transparent',
      focus: pbColors.slate200
    }
  },
  light: {
    color: {
      default: pbColors.brandAlt2
    },
    borderColor: {
      default: pbColors.alt2Hover,
      focus: pbColors.red,
      error: pbColors.error
    },
    backgroundColor: {
      default: pbColors.white
    },
    boxShadow: {
      default: 'transparent',
      focus: pbColors.gray100
    }
  }
};

const labelColors = {
  dark: {
    color: pbColors.gray200
  },
  light: {
    color: pbColors.alt2Hover
  }
};

const requiredColors = {
  dark: {
    color: pbColors.red300
  },
  light: {
    color: pbColors.error
  }
};

const errorColors = {
  dark: {
    color: pbColors.red200
  },
  light: {
    color: pbColors.error
  }
};

const placeholderColors = {
  dark: {
    color: pbColors.gray600
  },
  light: {
    color: pbColors.brandAlt2
  }
};

export { colors, labelColors, requiredColors, errorColors, placeholderColors };
