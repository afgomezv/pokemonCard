import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContextProvider";
import "../Style/Card.scss";

export const Card = () => {
  const pokemon = useContext(PokemonContext);
  return (
    <div className="card">
      <img className="card__img" src={pokemon.img} alt="photo" />
      <div className="card__info">
        <p>
          <b>{pokemon.name}</b> {pokemon.hp}HP
        </p>
        <p>{pokemon.experience}EXP</p>
      </div>
      <div className="card__skills">
        <div className="card__skills-info">
          <p>
            <b>{pokemon.atack}k</b>
          </p>
          <p>Ataque</p>
        </div>
        <div className="card__skills-info">
          <p>
            <b>{pokemon.special}K</b>
          </p>
          <p>Especial</p>
        </div>
        <div className="card__skills-info">
          <p>
            <b>{pokemon.defense}K</b>
          </p>
          <p>Defensa</p>
        </div>
      </div>
    </div>
  );
};
