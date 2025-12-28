import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppContainer, GlobalStyle } from "./styledGlobals";
import Navigation from "./common/Navigation";
import PopularMovies from "./features/movies/PopularMovies";
import MovieDetails from "./features/movies/MovieDetails";
import PopularPeople from "./features/people/PopularPeople";
import PersonDetails from "./features/people/PersonDetails";
import { PageContainer } from "./common/Layout/PageContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navigation />
        <PageContainer>
          <Routes>
            <Route path="/" element={<PopularMovies />} />
            <Route path="/movies" element={<PopularMovies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/people" element={<PopularPeople />} />
            <Route path="/person/:id" element={<PersonDetails />} />
            <Route path="*" element={<PopularMovies />} />
          </Routes>
        </PageContainer>
      </AppContainer>
    </>
  );
}

export default App;