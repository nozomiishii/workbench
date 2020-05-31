import React, { lazy, useContext, useEffect } from "react";
import { Store } from "./Store";
import { IEpisode, IAction, IEpisodeProps } from "./interfaces";
import styled from "styled-components";

const EpisodesList = lazy<any>(() => import("./EpisodesList"));

export const HomePage = () => {
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
  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites,
  };

  const Container = styled.section`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    section > * {
      margin: 0 5px;
    }
  `;
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Container>
        <EpisodesList {...props} />
      </Container>
    </React.Suspense>
  );
};
