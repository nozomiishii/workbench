import React, { useRef, useState } from "react";
import User from "../interfaces/User";

interface SearchState {
  error: boolean;
  pokemon: Pokemon | null;
}

interface Pokemon {
  name: string;
  numberOfAbilities: number;
  baseExperience: number;
  imageUrl: string;
}

const initialState: SearchState = {
  error: false,
  pokemon: null,
};
export const PokemonSearch: React.FC<User> = ({
  name: username,
  numberOfPokemon,
}) => {
  let inputData = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<SearchState>(initialState);

  const { error, pokemon } = searchValue;

  const handleClick = () => {
    console.log(inputData.current?.value);
    if (inputData.current) {
      const inputValue = encodeURIComponent(inputData.current.value);
      fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then((res) => {
          console.log(res);
          if (res.status !== 200) {
            return setSearchValue({ ...searchValue, error: true });
          }
          return res.json();
        })
        .then((data: any) => {
          console.log(data);
          setSearchValue({
            error: false,
            pokemon: {
              name: data.name,
              numberOfAbilities: data.abilities.length,
              baseExperience: data.base_experience,
              imageUrl: data.sprites.front_default,
            },
          });
        })
        .catch((err) => console.error(err));
    }
  };

  let resultMarkup;
  if (error) {
    resultMarkup = <p>Pokemon not found, please try again</p>;
  } else if (pokemon) {
    resultMarkup = (
      <div>
        <img src={pokemon.imageUrl} alt="pokemon" />
        <p>
          {pokemon.name} has {pokemon.numberOfAbilities} abilities and{" "}
          {pokemon.baseExperience} base esxperience points
        </p>
      </div>
    );
  }
  return (
    <>
      <div>
        <p>
          T rainer {username}{" "}
          {numberOfPokemon && `has ${numberOfPokemon} pokemons`}
        </p>
        <input type="text" ref={inputData} />
        <button onClick={handleClick}>search</button>
      </div>
      {resultMarkup}
    </>
  );
};
