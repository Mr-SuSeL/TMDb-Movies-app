# TMDb Movies App

TMDb Movies App is a responsive movie browser built as a group project during the YouCode programming school.  
The application uses the [The Movie Database (TMDB) API](https://www.themoviedb.org/) to fetch and display information about popular movies.

Live demo: https://mr-susel.github.io/TMDb-Movies-app/

---

## Features

- Browse popular movies from TMDB with live data
- Responsive grid layout (1 / 2 / 3 / 4 cards depending on screen size)
- Light / dark theme switch
- Movie cards with hover effects and posters from TMDB CDN
- Global state management with Redux Toolkit
- Side effects and API calls handled with Redux‑Saga
- Styled with styled-components, theme‑aware (light/dark)
- Deployed automatically to GitHub Pages

---

## Tech stack

- React (Create React App)
- Redux Toolkit
- Redux‑Saga
- React‑Redux
- styled-components
- TMDB REST API
- GitHub Pages

---

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```powershell
git clone https://github.com/mr-susel/TMDb-Movies-app.git

cd TMDb-Movies-app
npm install
```


### Environment variables

Create a `.env` file in the project root:
```javascript
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```

You can generate an API key in your TMDB account settings.

---

## Scripts

All commands are run from the project root.

### `npm start`

Runs the app in development mode.  
Open http://localhost:3000 to view it in the browser.  
The page reloads automatically on file changes and shows lint/build errors in the console.

### `npm test`

Runs the test runner in watch mode.  
(You can extend this section later when tests are added.)

### `npm run build`

Builds the app for production into the `build` folder.  
The output is optimized, minified and ready to deploy.

### `npm run deploy`

Builds the app and deploys it to GitHub Pages.  
`package.json` contains the `homepage` field and `predeploy/deploy` scripts configured for:

```javascript
"homepage": "https://mr-susel.github.io/TMDb-Movies-app/"
```


---

## Architecture overview

- `src/features/movies`
  - domain logic for movies (components, API helpers, views)
- `src/store/slices/moviesSlice.js`
  - Redux Toolkit slice for movies state (popular movies, loading, errors)
- `src/store/sagas/moviesSaga.js`
  - Redux‑Saga side effects (calling TMDB API, handling success/error)
- `src/store/store.js`
  - store configuration with saga middleware
- `src/styledGlobals.js` and `src/theme.js`
  - global layout components and light/dark theme tokens

---

## Credits

- Data: [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Built as part of the YouCode programming school group project
