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
  // Sprawdzamy, czy movie i backdrop_path istnieją
  if (!movie || !movie.backdrop_path) return null;

  const heroUrl = `${TMDB_CONFIG.IMAGE_BASE_URL}/original${movie.backdrop_path}`;
  const voteCount = movie?.vote_count ?? 0;
  const formattedVoteCount = new Intl.NumberFormat("pl-PL", {
    notation: "compact",
    compactDisplay: "short",
  }).format(voteCount);

  return (
    <Wrapper>
      <HeroImage style={{ backgroundImage: `url(${heroUrl})` }}>
        <Container>
          <Content>
            <Title>{movie.title}</Title>
            <RatingSection>
              <ScoreSection>
                <StarIcon />
                <Score>{movie.vote_average ? movie.vote_average.toFixed(1).replace(".", ",") : "0,0"}</Score>
                <MaxScore>/ 10</MaxScore>
              </ScoreSection>
              <Votes>{formattedVoteCount} głosów</Votes>
            </RatingSection>
          </Content>
        </Container>
      </HeroImage>
    </Wrapper>
  );
};