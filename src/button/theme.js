import { pbColors } from '../ui/theme';

const sizes = {
  small: {
    padding: '8px 12px',
    height: '34px'
  },
  default: {
    padding: '0 20px',
    height: '46px'
  }
};

const colors = {
  dark: {
    primary: {
      fontColor: {
        default: 'white',
        hover: 'white',
        focus: 'white',
        disabled: 'white'
      },
      iconColor: {
        default: 'white',
        hover: 'white',
        focus: 'white',
        disabled: 'white'
      },
      backgroundColor: {
        default: pbColors.blue400,
        hover: pbColors.blue300,
        focus: pbColors.blue400,
        disabled: pbColors.gray500
      },
      borderColor: {
        default: pbColors.blue400,
        hover: pbColors.blue300,
        focus: pbColors.blue300,
        disabled: pbColors.gray500
      }
    },
    secondary: {
      fontColor: {
        default: pbColors.blue400,
        hover: pbColors.blue300,
        focus: pbColors.blue300,
        disabled: pbColors.gray500
      },
      iconColor: {
        default: pbColors.blue400,
        hover: pbColors.blue400,
        focus: pbColors.blue300,
        disabled: pbColors.gray500
      },
      backgroundColor: {
        default: pbColors.slate300,
        hover: pbColors.slate200,
        focus: pbColors.slate200,
        disabled: pbColors.slate300
      },
      borderColor: {
        default: pbColors.blue500,
        hover: pbColors.blue300,
        focus: pbColors.blue300,
        disabled: pbColors.gray500
      }
    },
    text: {
      fontColor: {
        default: pbColors.gray500,
        hover: pbColors.gray500,
        focus: pbColors.gray500,
        disabled: pbColors.gray500
      },
      iconColor: {
        default: pbColors.gray500,
        hover: 'white',
        focus: 'white',
        disabled: pbColors.gray500
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      },
      borderColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      }
    },
    link: {
      fontColor: {
        default: pbColors.blue300,
        hover: pbColors.blue300,
        focus: pbColors.blue300,
        disabled: pbColors.gray500
      },
      iconColor: {
        default: pbColors.blue300,
        hover: pbColors.blue300,
        focus: pbColors.blue300,
        disabled: pbColors.gray500
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      },
      borderColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      }
    }
  },
  light: {
    primary: {
      fontColor: {
        default: 'white',
        hover: 'white',
        focus: 'white',
        disabled: 'white'
      },
      iconColor: {
        default: 'white',
        hover: 'white',
        focus: 'white',
        disabled: 'white'
      },
      backgroundColor: {
        default: pbColors.blue400,
        hover: pbColors.blue500,
        focus: pbColors.blue400,
        disabled: pbColors.gray500
      },
      borderColor: {
        default: pbColors.blue400,
        hover: pbColors.blue500,
        focus: pbColors.blue500,
        disabled: pbColors.gray500
      }
    },
    secondary: {
      fontColor: {
        default: pbColors.blue500,
        hover: pbColors.blue500,
        focus: pbColors.blue500,
        disabled: pbColors.gray500
      },
      iconColor: {
        default: pbColors.blue500,
        hover: pbColors.blue500,
        focus: pbColors.blue500,
        disabled: pbColors.gray500
      },
      backgroundColor: {
        default: 'white',
        hover: pbColors.gray300,
        focus: pbColors.gray300,
        disabled: 'white'
      },
      borderColor: {
        default: pbColors.blue400,
        hover: pbColors.blue400,
        focus: pbColors.blue400,
        disabled: pbColors.gray500
      }
    },
    text: {
      fontColor: {
        default: pbColors.gray700,
        hover: pbColors.gray700,
        focus: pbColors.gray700,
        disabled: pbColors.gray500
      },
      iconColor: {
        default: pbColors.gray500,
        hover: pbColors.gray700,
        focus: pbColors.gray700,
        disabled: pbColors.gray500
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      },
      borderColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      }
    },
    link: {
      fontColor: {
        default: pbColors.blue500,
        hover: pbColors.blue500,
        focus: pbColors.blue500,
        disabled: pbColors.gray500
      },
      iconColor: {
        default: pbColors.blue500,
        hover: pbColors.blue500,
        focus: pbColors.blue500,
        disabled: pbColors.gray500
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      },
      borderColor: {
        default: 'transparent',
        hover: 'transparent',
        focus: 'transparent',
        disabled: 'transparent'
      }
    }
  }
};

const shadows = {
  dark: {
    primary: {
      default: '',
      hover: '',
      focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
      disabled: ''
    },
    secondary: {
      default: '',
      hover: '',
      focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
      disabled: ''
    },
    text: {
      default: '',
      hover: '',
      focus: '',
      disabled: ''
    },
    link: {
      default: '',
      hover: '',
      focus: '',
      disabled: ''
    }
  },
  light: {
    primary: {
      default: '',
      hover: '',
      focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
      disabled: ''
    },
    secondary: {
      default: '',
      hover: '',
      focus: '0 0 0 4px rgba(5, 127, 206, 0.2)',
      disabled: ''
    },
    text: {
      default: '',
      hover: '',
      focus: '',
      disabled: ''
    },
    link: {
      default: '',
      hover: '',
      focus: '',
      disabled: ''
    }
  }
};

export { sizes, colors, shadows };
