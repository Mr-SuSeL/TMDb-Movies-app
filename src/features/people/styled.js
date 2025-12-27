import styled from "styled-components";
import { Link } from "react-router-dom";

export const PeopleSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 1368px;
    margin: 150px auto 0;
`;

export const Heading = styled.h1`
    margin: 0;
    font-size: 32px;
    color: #0b1324;
    letter-spacing: -0.4px;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 208px);
    gap: 24px;
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
    background: #ffffff;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    padding: 16px;
    gap: 12px;
    border-radius: 5px;
    width: 208px;
    height: 339px;
    box-sizing: border-box;
    transition: transform 0.18s ease, box-shadow 0.18s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 14px 34px rgba(17, 24, 39, 0.16);
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
    background-color: #E4E6F0;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & svg {
        width: 60%;
        height: 60%;

        & path {
            fill: none;
        }
        
        & ellipse {
            fill: none;
        }
    }
`;

export const Name = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    text-align: center;
    color: #18181B;
    margin: 0;
    max-width: 176px;
    text-decoration: none;
`;

export const LoadingContainer = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #0f172a;
    margin-top: 32px;
`;

export const PaginationBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 12px;
    flex-wrap: wrap;
`;

export const PageButton = styled.button`
    min-width: 70px;
    padding: 9px 14px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    background: ${({ primary }) => primary ? '#1d4ed8' : '#ffffff'};
    color: ${({ primary }) => primary ? '#ffffff' : '#1f2937'};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }

    &:hover:enabled {
        border-color: #1d4ed8;
        box-shadow: 0 8px 18px rgba(59, 130, 246, 0.18);
    }
`;

export const PageInfo = styled.span`
    font-weight: 600;
    color: #1f2937;
`;