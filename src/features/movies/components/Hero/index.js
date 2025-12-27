import React from "react";
import { TMDB_CONFIG } from "../../../../config/api";
import { Wrapper, Container, HeroImage, Content, Title, RatingSection, StarIcon, Score, Votes } from "./styled";

export const Hero = ({ movie }) => {
  if (!movie || !movie.backdrop_path) return null;

  const heroUrl = `${TMDB_CONFIG.IMAGE_BASE_URL}/original${movie.backdrop_path}`;

  return (
    <Wrapper>
      <HeroImage style={{ backgroundImage: `url(${heroUrl})` }}>
        <Container>
          <Content>
            <Title>{movie.title}</Title>
            <RatingSection>
              <StarIcon />
              <Score>{movie.vote_average?.toFixed(1)}</Score>
              <Votes>/ 10</Votes>
            </RatingSection>
            <Votes>{movie.vote_count} głosów</Votes>
          </Content>
        </Container>
      </HeroImage>
    </Wrapper>
  );
};