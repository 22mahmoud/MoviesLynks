# MoviesLynks 🎬

Search and create your favorite List with MoviesLynks 😄

## Live Demo

you can check out a live demo [of it here!](http://movies-lynks.netlify.com) hosted on [netlify](http://netlify.com)

## Getting Started

### Prerequisites

You’ll need to have Node 8.10.0 or later on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to easily switch Node versions between different projects.

### Installing

Clone The repository, and install dependencies.

```
> git clone https://github.com/22mahmoud/movies-app-lynks.git
> cd movies-app-lynks
# install using yarn
> yarn
# or npm
> npm i
```

Before create .env file

1. get your own themoviedb Api Key from [here](https://developers.themoviedb.org/3)
2. setup your firebase project and enable the email authentication from [firebase console](https://console.firebase.google.com)

Create your .env file and change XXXXX to your values

```
> cp .env.sample .env
```

## Features

- HomeScreen with Popular & Top Movies
- User can search for a movie
- user can Login/Sign
- User can add/remove movies to Favourites List
- Infinite scroll pagination

## Deployment

check netlify guide to depoly your app from [here](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

## Built With

- [create-react-app](https://github.com/facebook/create-react-app) - tool to bootstrap a react project
- [styled-components](https://github.com/styled-components/styled-components) - CSS in JS
- [formik](https://github.com/jaredpalmer/formik) - lightweight form handling library
- [react-helmet](https://github.com/nfl/react-helmet) - manage and dynamically set what’s in the document’s head section
- [axios](https://github.com/axios/axios) - Promise based HTTP client
- [firebase](https://github.com/firebase/firebase-js-sdk) - Firebase Javascript SDK
