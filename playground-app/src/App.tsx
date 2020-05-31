import React from "react";
import { PokemonSearch } from "./components/PokemonSearch";

function App() {
  return (
    <div className="App">
      <h1>start</h1>
      <PokemonSearch name="nozomi" numberOfPokemon={5} />
    </div>
  );
}

export default App;
