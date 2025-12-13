const rawColors = {
    white: '#FFFFFF',
    black: '#111827',
    darkGray: '#1e293b',
    mediumGray: '#6B7280',
    lightGray: '#F5F5FA',
    bluePrimary: '#007bff',
};

const commonSettings = {
    breakpoints: {
        mobile: '767px',
        tablet: '1023px',
    },
};

export const lightTheme = {
    ...commonSettings,
    colors: {
        white: rawColors.white,
        background: rawColors.lightGray,
        text: rawColors.black,
        accent: rawColors.bluePrimary,
        tileBackground: rawColors.white,
        subText: rawColors.mediumGray,
        skeletonBase: '#e0e0e0',
    },
};

export const darkTheme = {
    ...commonSettings,
    colors: {
        white: rawColors.white,
        background: rawColors.black,
        text: rawColors.white,
        accent: rawColors.bluePrimary,
        tileBackground: rawColors.darkGray,
        subText: rawColors.lightGray,
        skeletonBase: '#3f3f46',
    },
};

// Add top-level convenience props for older components expecting theme.body/theme.text
const enrich = (theme) => ({
    ...theme,
    body: theme.colors?.background || '#fff',
    text: theme.colors?.text || '#000',
    toggleBorder: theme.colors?.accent || '#ccc',
    headerBg: theme.colors?.accent || '#fff',
    tileBackground: theme.colors?.tileBackground || '#fff',
});

export default enrich(lightTheme);

export const enrichedLightTheme = enrich(lightTheme);
export const enrichedDarkTheme = enrich(darkTheme);