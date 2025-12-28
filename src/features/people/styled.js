import styled from "styled-components";
import { Link } from "react-router-dom";

export const PeopleSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 1368px;
    margin: 56px auto 0;

    @media (max-width: ${({ theme }) => theme.breakpoints?.largeDesktop || "1920px"}) {
        width: calc(100% - 32px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
        margin: 24px auto 0;
    }
`;

export const Heading = styled.h1`
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    color: ${({ theme }) => theme.text || "#000000"};

    @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
        font-size: 20px;
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 208px);
    gap: 24px;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const CardRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: ${({ theme }) => theme.cardBg || "#ffffff"};
    box-shadow: ${({ theme }) => 
        theme.cardBg === "#ffffff" 
            ? "0px 4px 12px rgba(186, 199, 213, 0.5)" 
            : "0px 4px 12px rgba(0, 0, 0, 0.5)"};
    padding: 16px;
    gap: 12px;
    border-radius: 5px;
    width: 208px;
    height: 100%;
    box-sizing: border-box;
    transition: transform 0.18s ease;

    &:hover {
        transform: translateY(-4px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
        width: 100%;
        padding: 8px;
        gap: 8px;
    }
`;

export const ProfileImageWrapper = styled.div`
    width: 177px;
    height: 264px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color?.divider || "#E4E6F0"};

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
        width: 100%;
        height: auto;
        aspect-ratio: 120 / 178;
    }
`;

export const Name = styled.p`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    color: ${({ theme }) => theme.text || "#18181B"};
    margin: 0;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
        font-size: 14px;
    }
`;

export const LoadingContainer = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text || "#000000"};
    margin-top: 32px;
`;

export const PaginationBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 40px 0;
`;

export const PageButton = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    background: ${({ primary, theme }) => primary ? "#0044CC" : (theme.color?.divider || "#E4E6F0")};
    color: ${({ primary, theme }) => primary ? "#FFFFFF" : (theme.text || "#1f2937")};
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const PageInfo = styled.span`
    color: ${({ theme }) => theme.text || "#1f2937"};
`;