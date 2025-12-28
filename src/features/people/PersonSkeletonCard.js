import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CardRoot, ProfileImageWrapper } from "./styled";
import { ReactComponent as NoProfileIcon } from '../../images/NoProfile.svg';

const pulse = keyframes`
    0% { opacity: 0.6; }
    100% { opacity: 0.9; }
`;

const SkeletonText = styled.div`
    /* Używamy dividera z motywu lub bezpiecznego szarego */
    background: ${({ theme }) => theme.color?.divider || "#E4E6F0"}; 
    height: 18px;
    width: ${({ width }) => width || '100%'};
    margin: 4px auto;
    border-radius: 4px;
`;

const AnimatedCardRoot = styled(CardRoot)`
    animation: ${pulse} 1.5s infinite alternate;
    /* Zapewniamy, że tło karty w szkielecie pasuje do motywu */
    background: ${({ theme }) => theme.cardBg || "#ffffff"};
`;

export default function PersonSkeletonCard() {
    return (
        <AnimatedCardRoot>
            <ProfileImageWrapper>
                <NoProfileIcon />
            </ProfileImageWrapper>
            <SkeletonText width="80%" />
            <SkeletonText width="60%" />
        </AnimatedCardRoot>
    );
}