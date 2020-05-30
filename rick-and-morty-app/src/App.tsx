import React, { useContext, useEffect } from "react";
import { Store } from "./Store";
import { IEpisode, IAction } from "./interfaces";
import styled from "styled-components";

const App: React.FC = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  };

  const Container = styled.section`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    section > * {
      margin: 0 5px;
    }
  `;

  console.log(state);
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
      <div>favorites: {state.favorites.length}</div>
      <Container>
        {state.episodes.map((episode: IEpisode) => {
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
              <section>
                <div>
                  Seasion: {episode.season} Number: {episode.number}
                </div>
                <button type="button" onClick={() => toggleFavAction(episode)}>
                  {state.favorites.find(
                    (fav: IEpisode) => fav.id === episode.id
                  )
                    ? "unfav"
                    : "fav"}
                </button>
              </section>
            </section>
          );
        })}
      </Container>
    </>
  );
};

export default App;
