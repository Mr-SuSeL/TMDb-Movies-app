import styled from "styled-components";

export const DetailsContainer = styled.div`
    max-width: 1368px;
    margin: 150px auto 0;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        margin: 80px auto 0;
    }
`;

export const ProfileSection = styled.section`
    display: grid;
    grid-template-columns: 399px 1fr;
    gap: 40px;
    background: ${({ theme }) => theme.cardBg || "#ffffff"};
    padding: 40px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => 
        theme.cardBg === "#ffffff" 
            ? "0px 4px 12px rgba(186, 199, 213, 0.5)" 
            : "0px 4px 12px rgba(0, 0, 0, 0.5)"};

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        grid-template-columns: 1fr;
        padding: 16px;
        gap: 16px;
    }
`;

export const ProfileImageLarge = styled.div`
    width: 399px;
    height: 564px;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color?.divider || "#E4E6F0"};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        width: 114px;
        height: 169px;
    }
`;

export const InfoSection = styled.div`
    max-width: 849px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 8px 0;
`;

export const PersonName = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 0;
    color: ${({ theme }) => theme.text || "#000000"};

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        font-size: 14px;
    }
`;

export const InfoRow = styled.div`
    display: flex;
    gap: 10px;
    font-size: 18px;

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        font-size: 12px;
        flex-wrap: wrap;
    }
`;

export const Label = styled.span`
    /* TUTAJ BYŁ BŁĄD - dodałem bezpieczne odwołanie */
    color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};
`;

export const Value = styled.span`
    color: ${({ theme }) => theme.text || "#000000"};
`;

export const Biography = styled.div`
    margin-top: 0;
`;

export const BiographyText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.text || "#000000"};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        font-size: 14px;
    }
`;

export const MoviesSection = styled.section`
    margin-top: 64px;
    margin-bottom: 64px;

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        margin-top: 32px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 36px;
    font-weight: 600;
    margin: 0 0 32px;
    color: ${({ theme }) => theme.text || "#000000"};

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        font-size: 20px;
        margin-bottom: 16px;
    }
`;

export const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
        gap: 16px;
    }
`;

export const MovieCard = styled.article`
    background: ${({ theme }) => theme.cardBg || "#ffffff"};
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: ${({ theme }) => 
        theme.cardBg === "#ffffff" 
            ? "0px 4px 12px rgba(186, 199, 213, 0.5)" 
            : "0px 4px 12px rgba(0, 0, 0, 0.5)"};

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        padding: 8px;
        gap: 8px;
    }
`;

export const MoviePoster = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color?.divider || "#E4E6F0"};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    div {
        color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};
        font-size: 14px;
    }
`;

export const MovieTitle = styled.h3`
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    line-height: 1.3;
    color: ${({ theme }) => theme.text || "#18181B"};

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        font-size: 16px;
    }
`;

export const MovieSubtitle = styled.p`
    font-size: 18px;
    margin: 0;
    color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};

    @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
        font-size: 13px;
    }
`;

export const MovieBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    background: ${({ theme }) => theme.color?.divider || "#E4E6F0"};
    border-radius: 5px;
    font-size: 14px;
    color: ${({ theme }) => theme.text || "#18181B"};
    width: fit-content;
`;

export const LoadingMessage = styled.div`
    text-align: center;
    font-size: 20px;
    color: ${({ theme }) => theme.text || "#18181B"};
    margin-top: 100px;
`;

export const ErrorMessage = styled.div`
    text-align: center;
    font-size: 20px;
    color: #ef4444;
    margin-top: 100px;
`;