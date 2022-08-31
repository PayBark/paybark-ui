import { pbColors } from '../ui/theme';

const tableColors = {
  light: {
    borderColor: pbColors.gray300
  },
  dark: {
    borderColor: pbColors.gray800
  }
};

const trColors = {
  light: {
    backgroundColor: {
      default: pbColors.white,
      alt: pbColors.gray100,
      hover: pbColors.blue100
    },
    borderColor: pbColors.gray300
  },
  dark: {
    backgroundColor: {
      default: pbColors.slate300,
      alt: pbColors.slate200,
      hover: pbColors.slate100
    },
    borderColor: pbColors.gray800
  }
};

const theadColors = {
  light: {
    backgroundColor: pbColors.white
  },
  dark: {
    backgroundColor: pbColors.slate300
  }
};

const thColors = {
  light: {
    color: pbColors.slate300,
    borderColor: pbColors.gray300
  },
  dark: {
    color: pbColors.white,
    borderColor: pbColors.gray800
  }
};

const tfootColors = {
  light: {
    backgroundColor: pbColors.gray400
  },
  dark: {
    backgroundColor: pbColors.gray900
  }
};

export { tableColors, trColors, theadColors, thColors, tfootColors };
