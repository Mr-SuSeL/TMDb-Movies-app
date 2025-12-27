import React from "react";
import { TMDB_CONFIG } from "../../../../config/api";
import { 
  Wrapper, 
  HeroImage, 
  Container, 
  Content, 
  Title, 
  RatingSection, 
  ScoreSection, 
  StarIcon, 
  Score, 
  MaxScore, 
  Votes 
} from "./styled";

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
              <ScoreSection>
                <StarIcon />
                <Score>{movie.vote_average?.toFixed(1).replace(".", ",")}</Score>
                <MaxScore>/ 10</MaxScore>
              </ScoreSection>
              <Votes>{movie.vote_count} głosów</Votes>
            </RatingSection>
          </Content>
        </Container>
      </HeroImage>
    </Wrapper>
  );
};