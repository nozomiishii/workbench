import React, { useContext, lazy } from "react";
import { Store } from "./Store";
import { toggleFavAction } from "./Action";
import { IEpisodeProps } from "./interfaces";

const EpisodesList = lazy<any>(() => import("./EpisodesList"));

export const FavPage = () => {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
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
