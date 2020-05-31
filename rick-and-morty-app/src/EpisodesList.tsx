import React from "react";
import { IEpisode } from "./interfaces";
import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  section > * {
    margin: 0 5px;
  }
`;

const EpisodesList = (props: any) => {
  const { episodes, toggleFavAction, favorites, store } = props;
  const { state, dispatch } = store;
  return (
    <Container>
      {episodes.map((episode: IEpisode) => {
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
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                Seasion: {episode.season} Number: {episode.number}
              </div>
              <button
                type="button"
                onClick={() => toggleFavAction(state, dispatch, episode)}
              >
                {favorites.find((fav: IEpisode) => fav.id === episode.id)
                  ? "unfav"
                  : "fav"}
              </button>
            </section>
          </section>
        );
      })}
    </Container>
  );
};

export default EpisodesList;
