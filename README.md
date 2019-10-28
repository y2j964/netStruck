# NetStruck
A ReactJS single-page application patterned after [Criterion Channel](https://www.criterionchannel.com) and [Netflix](https://www.netflix.com)

## Table of contents
* [Demo](#Demo)
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Setup](#setup)
* [Acknowledgements](#acknowledgements)

## Demo
Here is a working demo of this app: **ADD LINK HERE**.

**ADD ILLUSTRATIONS HERE**.

## General Info
NetStruck emerged as a fun coding challenge I gave myself to create a unique ReactJS single-page application. Naturally, being the cineaste that I am, I sought to replicate the UI CriterionChannel.com. But as much as I love Criterion Channel's service, their UX is lacking in certain aspects. So I have sought to make the UX better. I don't set up expensive resize events to dynamically size the NowPlaying carousel when CSS can handle the job on its own; I use pagination and a custom InfiniteScroller (leveraging lazy loading and IntersectionObserver) instead of loading all of the films at once on the All Films page; and I used the Netflix approach for the SliderRow and for all the Tile hover states, instead of the rather pedestrian look of Criterion Channel's sliders and tiles.

## Technologies
* React 16.8.6
* React Router 5.0.1
* React Hooks
* React-Transition-Group 4.2.2
* Gulp 4.0.2
* Git and Git Bash
* Tailwind CSS 1.0.4
* Inkscape 0.92.4

## Features
* Data management via React Context
* Local Storage of films added to MyList to retain MyList items between sessions
* Page transitions on route change
* Responsive images and webp support
* Aria-supported
* Pagination and custom InfiniteScroller
* Multiple item infinite, responsive carousel
* Tab slider transitions
* Tile hover animations à la Netflix's hover states
* Custom radio buttons and animated input labels to mimic Criterion Channel's custom form elements
* Search bar to search catalogue of films with custom regex
* Sorting options for films on AllFilms page
* Focus-locked modal

## Setup
This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app). Thus the command line scripts used here closely resemble those of CRA's. The main difference is that this project is configured for TailwindCSS using the PostCSS CLI, which you see in the start:css and build:css scripts. This ReactJS and TailwindCSS implementation is outlined in [this Medium post by Johannes Opper](https://medium.com/@xijo/create-react-app-with-tailwind-via-postcss-plus-purgecss-5c36b4c33ba7).

### Dependencies
To get started, clone this repo  and run `npm install`.

### Production
Here are the production scripts:

#### `npm run start`
Sets up a watcher for CSS (including TailwindCSS) and JS, and outputs changes accordingly.

#### `npm run start:js`
Runs default create-react-app start. Not configured with TailwindCSS.

#### `npm run start:css`
Watches TailwindCSS files and outputs in specified location.

#### `npm run test`
Runs default CRA test watcher in an interactive mode.

#### `npm run eject`
Runs default CRA eject for a more customizable Webpack config.

### Build
Here are the build scripts:

#### `npm run build`
Builds all JS and CSS (including TailwindCSS files).

#### `npm run build:js`
Runs default CRA build.

#### `npm run build:css`
Builds TailwindCSS and purges unused classes as per postcss.config.js.

## Acknowledgements
  * The name NetStruck is a portmanteau of **Net**flix and Criterion Channel's former outing, [Film**Struck**](https://www.filmstruck.com/), at which I was a beta user.
  * The NetStruck UI is based on the UI of CriterionChannel.com.
  * The text on the NetStruck homepage (the Hero text and the TabPanel text) is nearly verbatim the text on the Criterion Channel's homepage.
  * Netflix served as additional inspiration, notably their Slider and their Tile hover states.
  * The "Add to Cart"/"Remove from Cart" button and animation is based on the the toggle-to-my-list button from [Sundance Now](https://www.sundancenow.com).
  * [Focus-trap-react 6.0.0](https://www.npmjs.com/package/react-focus-trap) was used to trap the focus in my modal.
  * The film images and the individual film summaries are sourced from [The Movie Database](https://www.themoviedb.org).
  * All icons are from [Icomoon](https://icomoon.io/), except for PlayBox, which I made in Inkscape to match the PlayBox icon from Criterion Channel's homepage.
  * The favicon was generated with [favicon.io](https://favicon.io/).
  * I used [Gulp-responsive](https://www.npmjs.com/package/gulp-responsive) (which incidentally uses [Sharp](https://github.com/lovell/sharp)) to generate responsive images.
  * [Google Fonts](https://fonts.google.com/) was used for additional fonts.
