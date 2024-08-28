import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokeCard = ({ onAdd, onRemove, pokemon, isSelected }) => {
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
