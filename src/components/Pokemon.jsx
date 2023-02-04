import React from "react";
import { useNavigate } from 'react-router-dom'

const Pokemon = (props) => {
    const {pokemon} = props
    const navigation = useNavigate()

    const pokemonStatusHandler = () => {
        navigation(`/${pokemon.name}`)
      }

      const colorTypesHandler = (type) => {
        const color = {
            water: "rgba(30, 78, 167, 0.726)",
            fire: "rgba(196, 96, 30, 0.726)",
            grass: "rgba(69, 196, 30, 0.726)",
            poison: "rgba(108, 30, 196, 0.726)",
            flying: "rgba(172, 221, 215, 0.726)",
            bug: "rgba(196, 153, 73, 0.726)",
            normal: "rgba(221, 212, 172, 0.726)",
            ground: "rgba(197, 146, 37, 0.726)",
            electric: "rgba(216, 203, 27, 0.726)",
            fairy: "rgba(228, 62, 145, 0.726)",
            fighting: "rgba(63, 53, 59, 0.726)",
            psychic: "rgba(212, 64, 218, 0.726)",
            rock: "rgba(128, 128, 128, 0.726)",
            ice: "rgba(49, 146, 175, 0.726)",
            dragon: "rgba(189, 93, 69, 0.726)",
            dark: "rgba(0, 0, 0, 0.726)",
            ghost: "rgba(175, 88, 168, 0.726)",
            steel: "rgba(39, 38, 38, 0.726)",
        }

        return color[type]
      }

    return (
        <div className="pokemon-card" style={{background: `linear-gradient( ${colorTypesHandler(pokemon.types[0].type.name)}, #fff)`}} onClick={pokemonStatusHandler}>
            <div className="pokemon-imagem">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="pokemon-card-right">
                <div className="pokemon-card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="pokemon-card-bottom">
                    <p>{pokemon.types.map(typesPokemon => (typesPokemon.type.name)).join(" | ")}</p>
                </div>
            </div>
        </div>
    )
}

export default Pokemon