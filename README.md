# Next.js IMDb Clone with TMDB API

This is a simple IMDb clone built with Next.js, which fetches movie data from the TMDB (The Movie Database) API and displays it similarly to IMDb. The app allows users to view trending movies, search for movies, and get more details. It demonstrates how to use Next.js for both server-side rendering (SSR) and client-side rendering (CSR) with React.

## Features

- **Homepage**: Displays a list of popular movies with images and basic information.
- **Movie Details**: View detailed information about a selected movie, including its cast, plot, and ratings.
- **Search**: Search for movies by title.
- **API Integration**: Fetch movie data from the [TMDb API](https://www.themoviedb.org/) to get movie information.

## Tech Stack

- **Next.js**: A React-based framework for SSR (Server-Side Rendering) and SSG (Static Site Generation).
- **React**: For building UI components and managing state.
- **Tailwind CSS**: For fast, responsive, and customizable styling.
- **TMDb API**: Provides movie data such as titles, posters, and more.

## Setup

To run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/TravisBoltz/imdb_clone.git
cd imdb_clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your environment
```bash
API_KEY=your_tmdb_api_key_here
```
### 4. Run the development server
```bash
npm run dev
```