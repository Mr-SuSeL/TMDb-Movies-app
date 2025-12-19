// src/features/movies/components/Hero/index.js
import React from "react";
import { TMDB_CONFIG } from "../../../../config/api";
import { Wrapper, Container, HeroImage } from "./styled";

export const Hero = ({ movie }) => {
  if (!movie) return null;

  const heroPath = movie.backdrop_path || movie.poster_path;
  if (!heroPath) return null;

  const heroUrl = `${TMDB_CONFIG.IMAGE_BASE_URL}/w1280${heroPath}`;

  return (
    <Wrapper>
      <Container>
        <HeroImage style={{ backgroundImage: `url(${heroUrl})` }} />
      </Container>
    </Wrapper>
  );
};
