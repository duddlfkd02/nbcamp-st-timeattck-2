import PokeCard from "./PokeCard";

const Cardlist = ({ pokeList, onAdd }) => {
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
