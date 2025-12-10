import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap: 24px;
    margin-top: 24px;
`;

export const CardRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5); 
    padding: 16px;
    border-radius: 5px;
    height: 100%; 
`;

export const ProfileImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 2/3; 
    border-radius: 5px;
    margin-bottom: 12px;
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
        width: 100%;
        height: 100%;
        
        & path {
            fill: #B0B0B0; 
        }
    }
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    line-height: 1.3;
`;

export const LoadingContainer = styled.div`
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    color: #000;
    margin-top: 50px;
`;