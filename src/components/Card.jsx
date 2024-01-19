import React from "react";

const Card = ({name, release, cover, href, password, origins}) => {
  let game_poster = cover;
  return (
    <a href={href} target="_blank">
      <div className="card">
        <h2 className="card-title">{name}</h2>
        <h1 className="card-release">{release}</h1>
        <img src={game_poster} alt="Description of the image" />
        <h2 className="card-release">password : {password}</h2>
        <h2 className="card-release">origins : {origins}</h2>
      </div>
    </a>
  );
};

export default Card;
