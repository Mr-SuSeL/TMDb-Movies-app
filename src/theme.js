
const base = {
  color: {
    white: "#FFFFFF",
    lightGray: "#F5F5FA",
    black: "#18181B",
    darkerGrey: "#7E839A",
    divider: "#E4E6F0",
  },
  breakpoints: {
    desktop: "1024px",
    tablet: "768px",
    mobile: "480px",
  },
};


export const lightTheme = {
  ...base,
  background: "#ffffff",
  text: "#111827",
  cardBg: "#ffffff",
};


export const darkTheme = {
  ...base,
  background: "#0b1120",
  text: "#e5e7eb",
  cardBg: "#111827",
};

export const theme = lightTheme;
