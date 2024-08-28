import { useState } from "react";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import Cardlist from "../components/Cardlist";

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
    <div>
      <Dashboard selectedPokemon={selectedPokemon} onRemove={removePoke} />
      <Cardlist
        selectedPokemon={selectedPokemon}
        onAdd={addPoke}
        pokeList={MOCK_DATA}
      />
    </div>
  );
};

export default Dex;
