import React from "react";
import { useNavigate } from 'react-router-dom'

const Pokemon = (props) => {
    const {pokemon} = props
    const navigation = useNavigate()

    const pokemonStatusHandler = () => {
        navigation(`/${pokemon.name}`)
      }

      const tipos = `pokemon-card ${pokemon && pokemon.types[0].type.name}`

    return (
        <div className={tipos} onClick={pokemonStatusHandler}>
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