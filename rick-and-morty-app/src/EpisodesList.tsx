import React from "react";
import { IEpisode } from "./interfaces";

const EpisodesList = (props: any) => {
  const { episodes, toggleFavAction, favorites } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id}>
        {episode.image ? (
          <img
            src={episode.image.medium}
            alt={`Rick and Morty ${episode.name}`}
          />
        ) : (
          "no image on this episode"
        )}
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Seasion: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "unfav"
              : "fav"}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
