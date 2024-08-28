import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../pages/Dex";
import styled from "styled-components";

const PokeCard = ({ pokemon, isSelected }) => {
  const { onAdd, onRemove } = useContext(PokemonContext);
  const { img_url, korean_name, id } = pokemon;
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`detail/${id}`);
      }}
    >
      <img src={img_url} />
      <p>{korean_name}</p>
      {isSelected ? (
        <button
          onClick={(e) => {
            onRemove(id);
            e.stopPropagation();
          }}
        >
          삭제
        </button>
      ) : (
        <button
          onClick={(e) => {
            onAdd(pokemon);
            e.stopPropagation();
          }}
        >
          추가
        </button>
      )}
    </Card>
  );
};

export default PokeCard;

const Card = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid black;
`;
