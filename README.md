# TMDb Movies App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Application: Popular People (TMDB)
React application showcasing popular/trending people (actors, creators) from TMDB, featuring pagination, face images, and integration via Redux Toolkit + Redux-Saga.

## Features
- List of "Popular People" and/or "Trending People" from TMDB
.
- Pagination (up to 500 pages – TMDB limit)

- Face images from the TMDB CDN (image.tmdb.org) – size w300.

- Fallback to an icon when a photo is missing or the image causes an error.

- Styling via styled-components

- State management: @reduxjs/toolkit + redux-saga.

 - Routing: react-router-dom.

- Deploy to GitHub Pages.

## Environment Configuration (.env)
Place the `.env` file in the project root directory (not in `src`). There are two authentication paths:

Preferred (TMDB v4 Bearer):
Optionally, you can override the base API address:
[`BASE_URL=https://api.themoviedb.org/3`]

## Deploy for GitHub Pages
in `package.json` is located:
- `homepage`: `https://mr-susel.github.io/TMDb-Movies-app/`
- scripts `predeploy` and `deploy`.

## Key file structure
- API logic: [src/features/people/peopleAPI.js](src/features/people/peopleAPI.js)
- People Saga: [src/store/saga/peopleSaga.js](src/store/saga/peopleSaga.js)
- People Slice: [src/store/slices/peopleSlice.js](src/store/slices/peopleSlice.js)
- List view: [src/features/people/PopularPeople.js](src/features/people/PopularPeople.js)
- Person card: [src/features/people/PersonTitle.js](src/features/people/PersonTitle.js)
- Global style/layout: [src/styledGlobals.js](src/styledGlobals.js)

## Troubleshooting
- "No results from TMDB" / empty:
- check `.env` and restart `npm start`
- in browser → DevTools → Network: status 401/403 indicates invalid or unloaded keys
- No face image:
- the `profile_path` field may be `null` in the TMDB – in that case, the NoProfile icon is displayed
- if the image 404, the component removes `<img>` and displays the icon

## License
Educational project – no separate license. The TMDB API requires acceptance of its terms.

### `npm run deploy`

Builds the app and deploys it to GitHub Pages.  
Make sure your `package.json` contains:

- `"homepage": "https://mr-susel.github.io/TMDb-Movies-app/"`
- scripts:  
