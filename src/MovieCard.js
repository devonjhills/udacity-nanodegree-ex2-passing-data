import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    /*
    Destructuring via ES6. We're getting the profiles, users, and movies properties
    off of the pros passed into this presentational component. If you need a refresher on this syntax, check
    out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
    */
    const { users, userFavorited, movie } = this.props;

    return (
      <li key={movie.id}>
        <h2>{movie.name}</h2>
        <h3>Liked By:</h3>

        {!userFavorited || userFavorited.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            {userFavorited &&
              userFavorited.map(userId => {
                return (
                  <li key={userId}>
                    <p>{users[userId].name}</p>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
    );
  }
}

export default MovieCard;
