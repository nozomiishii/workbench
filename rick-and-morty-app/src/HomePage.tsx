import React, { lazy, useContext, useEffect } from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from "./Action";

const EpisodesList = lazy<any>(() => import("./EpisodesList"));

export const HomePage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <EpisodesList {...props} />
    </React.Suspense>
  );
};
