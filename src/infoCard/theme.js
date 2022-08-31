import { pbColors } from '../ui/theme';

const colors = {
  light: {
    backgroundColor: {
      default: pbColors.white,
      info: pbColors.blue500,
      error: pbColors.red300,
      warning: pbColors.yellow200,
      success: pbColors.green200
    },
    borderColor: {
      default: pbColors.gray300,
      info: pbColors.gray300,
      error: pbColors.gray300,
      warning: pbColors.gray300,
      success: pbColors.gray300
    },
    iconBackgroundColor: {
      default: 'rgba(0, 0, 0, 0.1)',
      info: 'rgba(255, 255, 255, 0.1)',
      error: 'rgba(255, 255, 255, 0.1)',
      warning: 'rgba(0, 0, 0, 0.1)',
      success: 'rgba(0, 0, 0, 0.1)'
    },
    iconFill: {
      default: 'rgba(0, 0, 0, 0.65)',
      info: 'rgba(255, 255, 255, 0.65)',
      error: 'rgba(255, 255, 255, 0.65)',
      warning: 'rgba(0, 0, 0, 0.65)',
      success: 'rgba(255, 255, 255, 0.65)'
    },
    labelColor: {
      default: 'rgba(0, 0, 0, 0.5)',
      info: 'rgba(255, 255, 255, 0.5)',
      error: 'rgba(255, 255, 255, 0.5)',
      warning: 'rgba(0, 0, 0, 0.5)',
      success: 'rgba(255, 255, 255, 0.5)'
    },
    fontColor: {
      default: pbColors.slate300,
      info: pbColors.white,
      error: pbColors.white,
      warning: pbColors.slate300,
      success: pbColors.white
    }
  },
  dark: {
    backgroundColor: {
      default: pbColors.slate200,
      info: pbColors.blue600,
      error: pbColors.red300,
      warning: pbColors.yellow200,
      success: pbColors.green200
    },
    borderColor: {
      default: pbColors.gray700,
      info: pbColors.gray700,
      error: pbColors.gray700,
      warning: pbColors.gray700,
      success: pbColors.gray700
    },
    iconBackgroundColor: {
      default: 'rgba(255, 255, 255, 0.1)',
      info: 'rgba(255, 255, 255, 0.1)',
      error: 'rgba(255, 255, 255, 0.1)',
      warning: 'rgba(0, 0, 0, 0.1)',
      success: 'rgba(0, 0, 0, 0.1)'
    },
    iconFill: {
      default: 'rgba(255, 255, 255, 0.65)',
      info: 'rgba(255, 255, 255, 0.65)',
      error: 'rgba(255, 255, 255, 0.65)',
      warning: 'rgba(0, 0, 0, 0.65)',
      success: 'rgba(255, 255, 255, 0.65)'
    },
    labelColor: {
      default: 'rgba(255, 255, 255, 0.5)',
      info: 'rgba(255, 255, 255, 0.5)',
      error: 'rgba(255, 255, 255, 0.5)',
      warning: 'rgba(0, 0, 0, 0.5)',
      success: 'rgba(255, 255, 255, 0.5)'
    },
    fontColor: {
      default: pbColors.white,
      info: pbColors.white,
      error: pbColors.white,
      warning: pbColors.slate300,
      success: pbColors.white
    }
  }
};

export { colors };
