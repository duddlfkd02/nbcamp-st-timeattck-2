// 포켓몬 상세페이지

import MOCK_DATA from "../mock";
import { useNavigate, useParams } from "react-router-dom";

const Pokedetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const pokemonID = Number(params.id);
  const pokemon = MOCK_DATA.find((item) => item.id === pokemonID);

  return (
    <div>
      <img src={pokemon.img_url} />
      <h2>{pokemon.korean_name}</h2>
      <p>{pokemon.types}</p>
      <p>{pokemon.description}</p>

      <button
        onClick={() => {
          navigate("/Dex");
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Pokedetail;
