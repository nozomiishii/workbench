import React, { useContext } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

interface AppProps {
  path: string;
}

const App: React.FC<AppProps> = ({ children }) => {
  const { state } = useContext(Store);
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">favorites: {state.favorites.length} </Link>
        </div>
      </header>
      {children}
    </>
  );
};
export default App;
