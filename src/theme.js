export const theme = {
  color: {
    white: "#FFFFFF",
    lightGray: "#F5F5FA",
    black: "#18181B",
    darkerGrey: "#7E839A",
    divider: "#E4E6F0", // To jest Twój kolor pigułek/tagów w dzień
    transparent: "transparent",
    candlelight: "#FCD12A", // Żółty dla gwiazdek
  },
  breakpoints: {
    mobileMin: "480px",
    mobileMax: "767px",
    tablet: "1024px",
    desktop: "1280px",
    largeDesktop: "1920px",
  }
};

export const lightTheme = {
  ...base,
  background: "#F5F5FA",
  text: "#18181B",
  cardBg: "#FFFFFF",
};

export const darkTheme = {
  ...base,
  background: "#0b1120",
  text: "#e5e7eb",
  cardBg: "#111827",
  // Nadpisujemy kolory w base dla trybu ciemnego, aby tagi/pigułki były widoczne
  color: {
    ...base.color,
    divider: "#2f3542", // Ciemniejszy kolor pigułek w nocy (zgodny z MovieDetails)
    black: "#FFFFFF",    // Aby zapobiec błędom 'reading black' w nocy
  },
};

export const theme = lightTheme; // Możesz tu ręcznie przełączać lub używać ThemeProvidera