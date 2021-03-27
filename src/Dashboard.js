import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieCardsList extends Component {
  render() {

    const { profiles, users, movies, usersByMovie } = this.props;

    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        users={users}
        userFavorited={usersByMovie[id]}
        movie={movies[id]}
      />
    ));

    return <ul>{movieCards}</ul>;
  }
}

export default MovieCardsList;
