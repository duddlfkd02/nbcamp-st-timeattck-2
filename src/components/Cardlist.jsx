import PokeCard from "./PokeCard";
import { useContext } from "react";
import { PokemonContext } from "../pages/Dex";

const Cardlist = ({ pokeList }) => {
  const { onAdd } = useContext(PokemonContext);
  return (
    <div>
      {pokeList.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={onAdd}
            isSelected={false}
          ></PokeCard>
        );
      })}
    </div>
  );
};

export default Cardlist;
