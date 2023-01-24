import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const {pokemons, loading, pagination} = props

    return (
        <div>
            <div className="pokedex-tittle">
                <h1>Pokedex</h1>
                <div className="pokedex-pagination">
                    <p>paginação: </p>
                    <button onClick={() => pagination(-50)}>&lt;</button>
                    <button onClick={() => pagination(50)}>&gt;</button>
                </div>
            </div>
            {loading ? (
                <div>calma ai, já vai...</div>
            ) : (
                <div className="pokedex-grid">
                {pokemons && pokemons.map((poke, index) => {
                        return (
                            <Pokemon key={index} pokemon={poke} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Pokedex