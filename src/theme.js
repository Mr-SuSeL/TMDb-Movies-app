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

export default lightTheme;