import { pbColors } from '../ui/theme';

const colors = {
  light: {
    backgroundColor: pbColors.gray100, //
    borderColor: pbColors.gray300, //
    primaryLink: {
      fontColor: {
        default: pbColors.slate300, //
        active: pbColors.blue500, //
        hover: pbColors.gray300
      },
      backgroundColor: {
        default: 'transparent',
        active: pbColors.blue200, //
        hover: pbColors.gray300 //
      },
      svgColor: {
        //
        default: pbColors.gray500, //
        active: pbColors.blue400, //
        hover: pbColors.blue400 //
      }
    },
    secondaryLink: {
      fontColor: {
        default: pbColors.slate300, //
        active: pbColors.blue500, //
        hover: pbColors.blue500
      },
      backgroundColor: {
        default: 'transparent',
        active: pbColors.blue200, //
        hover: pbColors.gray300 //
      }
    }
  },
  dark: {
    backgroundColor: pbColors.gray900,
    borderColor: pbColors.gray800,
    primaryLink: {
      fontColor: {
        default: pbColors.gray200,
        active: pbColors.gray200,
        hover: pbColors.gray200
      },
      backgroundColor: {
        default: 'transparent',
        active: 'rgba(255,255,255,0.08)',
        hover: 'rgba(255,255,255,0.08)'
      },
      svgColor: {
        default: pbColors.gray600,
        active: pbColors.gray600,
        hover: pbColors.gray600
      }
    },
    secondaryLink: {
      fontColor: {
        default: pbColors.gray200,
        active: pbColors.gray200,
        hover: pbColors.gray200
      },
      backgroundColor: {
        default: 'transparent',
        active: 'rgba(255,255,255,0.08)',
        hover: 'rgba(255,255,255,0.08)'
      }
    }
  }
};

export { colors };
