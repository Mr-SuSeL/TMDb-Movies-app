const base = {
  color: {
    white: "#FFFFFF",
    lightGray: "#F5F5FA",
    black: "#18181B",
    darkerGrey: "#7E839A",
    divider: "#E4E6F0",
    transparent: "transparent"
  },
  breakpoints: {
    mobile: "640px",
    mobileMin: "480px",
    mobileMax: "767px",
    tablet: "1024px",
    desktop: "1280px",
    largeDesktop: "1920px"
  }
};

export const lightTheme = {
  ...base,
  background: "#ffffff",
  text: "#111827",
  cardBg: "#ffffff"
};

export const darkTheme = {
  ...base,
  background: "#0b1120",
  text: "#e5e7eb",
  cardBg: "#111827"
};

export const theme = lightTheme;