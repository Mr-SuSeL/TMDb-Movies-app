import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { AppContainer, AppHeader, AppLink } from './styledGlobals';
import PopularPeople from "./features/people/PopularPeople.js";


const PageHeader = () =>
  <AppHeader>
    <h1>TMDb Movies App</h1>
    <p>Projekt grupowy - YouCode</p>
    <p>Popularne filmy wkrótce...</p>
    <AppLink
      href="https://www.themoviedb.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by TMDB API
    </AppLink>
  </AppHeader>

function App() {
  return (
    <HashRouter>
      <AppContainer>
        <PageHeader />
        <Switch>
          <Route path="/people">
            <PopularPeople />
          </Route>
          <Route exact path="/">
            <Redirect to="/people" />
          </Route>
        </Switch>
      </AppContainer>
    </HashRouter>
  );
}

export default App;