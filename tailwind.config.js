/**
 * @description tailwind 配置
 * @see https://tailwindcss.com/docs/configuration
 * @author 蓄风
 */

/** @type {import('tailwindcss').Config} */

const { blocklist } = require('./block-classes.json');

const colors = {
  blue: {
    100: "#E6F0FF",
    200: "rgba(46,116,255,0.35)", /* #B6CFFF */
    300: "#94B8FF",
    400: "#4794FF",
    500: "#2E74FF",
    600: "#2958E6",
  },
  red: {
    100: "#FFE6E6",
    200: "#F89D9D",
    300: "#F23C3C",
  },
  yellow: {
    100: "#FFF7E6",
    200: "#FFE6B3",
    300: "#FFD280",
  },
  green: {
    100: "#E0FFEB",
    200: "#82E0A2",
    300: "#0AC448",
  },
  purple: {
    100: "#ECE6FF",
    200: "#CAB8FF",
    300: "#9873FF"
  },
  gray: {
    100: "rgba(0,0,0,0.04)", /* #F5F5F5 */
    200: "rgba(0,0,0,0.15)", /* #D9D9D9 */
    300: "rgba(0,0,0,0.25)", /* #BFBFBF */
  },
  cyan: {
    100: "#E0FFFF",
    200: "#7DD1D1",
    300: "#25B8B8",
  },
  orange: {
    100: "#FFF0E0",
    200: "#FFCC99",
    300: "#FF8D1A",
  },
  sky: {
    100: "#E6F7FF",
    200: "#99D5FF",
    300: "#33AAFF",
  },
  white: {
    100: "rgba(255,255,255,1)",
    75: "rgba(255,255,255,0.75)",
    50: "rgba(255,255,255,0.5)",
    45: "rgba(255,255,255,0.45)",
    40: "rgba(255,255,255,0.4)",
    30: "rgba(255,255,255,0.3)",
    25: "rgba(255,255,255,0.25)",
    20: "rgba(255,255,255,0.2)",
    15: "rgba(255,255,255,0.15)",
    10: "rgba(255,255,255,0.1)",
    8: "rgba(255,255,255,0.08)",
    4: "rgba(255,255,255,0.04)",
  },
  black: {
    100: "rgba(0,0,0,1)",
    90: "rgba(0,0,0,0.9)",
    85: "rgba(0,0,0,0.85)",
    70: "rgba(0,0,0,0.7)",
    65: "rgba(0,0,0,0.65)",
    50: "rgba(0,0,0,0.5)",
    45: "rgba(0,0,0,0.45)",
    30: "rgba(0,0,0,0.3)",
    25: "rgba(0,0,0,0.25)",
    15: "rgba(0,0,0,0.15)",
    10: "rgba(0,0,0,0.1)",
    6: "rgba(0,0,0,0.06)",
    4: "rgba(0,0,0,0.04)",
    2: "rgba(0,0,0,0.02)",
  },
};

const thousands = (() => {
  let thousands = {}
  for (let i = 1; i <= 1000; i++) {
    thousands[i] = i + 'px';
  }
  return thousands;
})();

const { blue, red, yellow, green, purple, gray, cyan, orange, sky, white, black } = colors;
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  blocklist,
  theme: {
    // Default tailwind values converted from rem to px:
    borderRadius: {
      none: "0px",
      sm: "1px",
      DEFAULT: "2px",
      md: "3px",
      lg: "4px",
      xl: "6px",
      "2xl": "8px",
      "3xl": "10px",
      "4xl": "12px",
      full: "9999px",
    },
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "256px",
      "2xs": "288px",
      xs: "320px",
      sm: "384px",
      md: "448px",
      lg: "512px",
      xl: "576px",
      "2xl": "672px",
      "3xl": "768px",
      "4xl": "896px",
      "5xl": "1024px",
      "6xl": "1152px",
      "7xl": "1280px",
    },
    maxWidth: ({ theme, breakpoints }) => ({
      none: "none",
      0: "0px",
      xs: "320px",
      sm: "384px",
      md: "448px",
      lg: "512px",
      xl: "576px",
      "2xl": "672px",
      "3xl": "768px",
      "4xl": "896px",
      "5xl": "1024px",
      "6xl": "1152px",
      "7xl": "1280px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...breakpoints(theme("screens")),
    }),
    // Margin (m-, mx-, my-, mt-, mb-, ml-, mr-): 控制元素的外边距。
    // Padding (p-, px-, py-, pt-, pb-, pl-, pr-): 控制元素的内边距。
    // Translate (translate-x-, translate-y-): 在使用 transform 属性时，spacing 值可用于 translate。
    // Inset (top-, right-, bottom-, left-): 用于定位的属性，如 absolute, relative, fixed 布局中的元素位置。
    // 使用, 0-100 以内常用值
    spacing: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      ...(() => {
        let spacings = {}
        for (let i = 20; i <= 100; i += 4) {
          spacings[i] = i + 'px';
        }
        return spacings;
      })(),
    },
    extend: {
      inset: thousands,
      maxWidth: thousands,
      maxHeight: thousands,
      minWidth: thousands,
      minHeight: thousands,
      height: thousands,
      width: thousands,
    },
    // DP 配置
    colors: {
      transparent: {
        DEFAULT: "transparent",
      },
      brand: {
        background: blue[100],
        disabled: blue[200],
        border: blue[300],
        hover: blue[400],
        press: blue[600],
        DEFAULT: blue[500],
      },
      error: {
        background: red[100],
        border: red[200],
        DEFAULT: red[300],
      },
      warning: {
        background: yellow[100],
        border: yellow[200],
        DEFAULT: yellow[300],
      },
      success: {
        background: green[100],
        border: green[200],
        DEFAULT: green[300],
      },
      waiting: {
        background: purple[100],
        border: purple[200],
        DEFAULT: purple[300],
      },
      invalid: {
        background: gray[100],
        border: gray[200],
        DEFAULT: gray[300],
      },
      cyan: {
        background: cyan[100],
        border: cyan[200],
        DEFAULT: cyan[300],
      },
      orange: {
        background: orange[100],
        border: orange[200],
        DEFAULT: orange[300],
      },
      sky: {
        background: sky[100],
        border: sky[200],
        DEFAULT: sky[300],
      },
      white: {
        DEFAULT: white[100],
        75: white[75],
        50: white[50],
        45: white[45],
        30: white[30],
        20: white[20],
        15: white[15],
        10: white[10],
        8: white[8],
        4: white[4],
      },
      black: {
        100: black[100],
        DEFAULT: black[85],
        85: black[85],
        65: black[65],
        45: black[45],
        25: black[25],
        15: black[15],
        10: black[10],
        6: black[6],
        4: black[4],
        2: black[2],
      }
    },
    fontSize: {
      xs: ["8px", { lineHeight: "16px" }],
      sm: ["10px", { lineHeight: "18px" }],
      base: ["12px", { lineHeight: "20px" }],
      md: ["14px", { lineHeight: "22px" }],
      lg: ["16px", { lineHeight: "24px" }],
      xl: ["20px", { lineHeight: "28px" }],
      "2xl": ["24px", { lineHeight: "32px" }],
      "3xl": ["28px", { lineHeight: "36px" }],
      "4xl": ["32px", { lineHeight: "40px" }],
    },
    lineHeight: {
      none: "16px",
      tight: "20px",
      snug: "22px",
      normal: "24px",
      relaxed: "28px",
      loose: "32px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      35: '0.35',
      40: '0.4',
      45: '0.45',
      50: '0.5',
      55: '0.55',
      60: '0.6',
      65: '0.65',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      85: '0.85',
      90: '0.9',
      95: '0.95',
      100: '1',
      loading: '0.75',
      mask: '0.45'
    },
    boxShadow: {
      none: "none",
      't-rise': '0px -1px 2px 0px rgba(0, 0, 0, 0.1), 0px -2px 8px 0px rgba(0, 0, 0, 0.1)',
      'b-rise': '0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 8px 0px rgba(0, 0, 0, 0.1)',
      'l-rise': '-1px 0px 2px 0px rgba(0, 0, 0, 0.1), -2px 0px 8px 0px rgba(0, 0, 0, 0.1)',
      'r-rise': '1px 0px 2px 0px rgba(0, 0, 0, 0.1), 2px 0px 8px 0px rgba(0, 0, 0, 0.1)',

      'float': '0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0px 4px 16px 0px rgba(0, 0, 0, 0.1)',

      't-popup': '0px -4px 8px 0px rgba(0, 0, 0, 0.06), 0px -8px 32px 0px rgba(0, 0, 0, 0.1)',
      'b-popup': '0px 4px 8px 0px rgba(0, 0, 0, 0.06), 0px 8px 32px 0px rgba(0, 0, 0, 0.1)',
      'l-popup': '-4px 0px 8px 0px rgba(0, 0, 0, 0.06), -8px 0px 32px 0px rgba(0, 0, 0, 0.1)',
      'r-popup': '4px 0px 8px 0px rgba(0, 0, 0, 0.06), 8px 0px 32px 0px rgba(0, 0, 0, 0.1)',
    },
  },
  corePlugins: {
    preflight: true
  },
}

export default config;


