import { HashRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PopularPeople from "./features/people/PopularPeople.js";
import {
  GlobalStyle,
  AppShell,
  TopBar,
  LogoWrap,
  LogoMark,
  Tabs,
  TabButton,
  SearchBox,
  SearchIcon,
  SearchInput,
  PageContainer,
} from './styledGlobals';
import { lightTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <HashRouter>
        <AppShell>
          <TopBar>
            <LogoWrap>
              <LogoMark />
              <span>Przeglądarka filmów</span>
            </LogoWrap>

            <Tabs>
              <TabButton as={Link} to="/" active={false}>KINO</TabButton>
              <TabButton as={Link} to="/people" active={true}>LUDZIE</TabButton>
            </Tabs>

            <SearchBox>
              <SearchIcon />
              <SearchInput placeholder="Search for people..." />
            </SearchBox>
          </TopBar>

          <PageContainer>
            <Switch>
              <Route path="/people">
                <PopularPeople />
              </Route>
              <Route exact path="/">
                <Redirect to="/people" />
              </Route>
            </Switch>
          </PageContainer>
        </AppShell>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;