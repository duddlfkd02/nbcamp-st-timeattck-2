import { useContext } from "react";
import { PokemonContext } from "../pages/Dex";

const Dashboard = () => {
  const { selectedPokemon, onRemove } = useContext(PokemonContext);
  return (
    <div>
      <h2>포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>포켓몬 선택 해주세요</p>
      ) : (
        <div>
          {selectedPokemon.map((pokemon) => {
            <div key={pokemon.id}>
              <img src={pokemon.img_url} />
              {pokemon.korean_name}
              <button onClick={() => onRemove(pokemon.id)}>삭제</button>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
