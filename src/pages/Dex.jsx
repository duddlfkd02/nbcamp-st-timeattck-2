import { useState } from "react";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import Cardlist from "../components/Cardlist";
import { createContext } from "react";

export const PokemonContext = createContext();

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // 추가
  const addPoke = (pokemon) => {
    if (!selectedPokemon.some((item) => item.id === pokemon.id)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else if (selectedPokemon) {
      // alert("이미 선택한 포켓몬 입니다.");
      return;
    }
  };

  //삭제 - id값으로!
  const removePoke = (pokemonID) => {
    const filteredPoke = selectedPokemon.filter((item) => {
      return item.id !== pokemonID;
    });
    setSelectedPokemon(filteredPoke);
  };

  return (
    <PokemonContext.Provider
      value={(selectedPokemon, setSelectedPokemon, addPoke, removePoke)}
    >
      <div>
        <Dashboard />
        <Cardlist pokeList={MOCK_DATA} />
      </div>
    </PokemonContext.Provider>
  );
};

export default Dex;
