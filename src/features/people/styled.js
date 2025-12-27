import styled from "styled-components";

export const PeopleSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

export const Heading = styled.h1`
    margin: 0;
    font-size: 32px;
    color: #0b1324;
    letter-spacing: -0.4px;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 24px;
`;

export const CardRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 10px 30px rgba(17, 24, 39, 0.12);
    padding: 14px 14px 18px;
    border-radius: 12px;
    height: 100%;
    transition: transform 0.18s ease, box-shadow 0.18s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 14px 34px rgba(17, 24, 39, 0.16);
    }
`;

export const ProfileImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 2/3;
    border-radius: 10px;
    margin-bottom: 14px;
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
        width: 48%;
        height: 48%;

        & path {
            fill: #B0B0B0;
        }
    }
`;

export const Name = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
    color: #0f172a;
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