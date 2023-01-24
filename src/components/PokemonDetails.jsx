import React, { useEffect, useState } from "react";
import {useParams} from "react-router"
import { searchPokemon } from "../Api";

const PokemonDetails = () => {
    const [status, setStatus] = useState()
    const params = useParams()

    const pokemonStatus = async () => {
        const result = await searchPokemon(params.pokemonName)
        setStatus(result)
        console.log(status)
    }
    useEffect(() => {
        pokemonStatus()

    }, [])

    const tipos = `details-presentation ${status && status.types[0].type.name}`

    return (
        <div>
            {status && 
                <div className="status-container">
                    <div className={tipos}>
                        <h1>{status.name}</h1>
                        <img src={status.sprites.other.dream_world.front_default} alt="" />
                        <p>{status.types.map(typePokemon => (typePokemon.type.name)).join(" | ")}</p>
                    </div>
                    <div className="details-pokemon">
                        <h2>description</h2> 
                        <div className="description-pokemon">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim quasi laudantium culpa inventore perferendis corrupti beatae ea esse! Maiores nihil exercitationem  porro facilis nostrum quae aliquam ex.</p> 
                        </div>
                        <div className="status">
                            <h2>stats</h2>
                            <div className="status-pokemon-container">
                                {status.stats.map(stats => (
                                    <div className="status-pokemon">
                                        <h4>{stats.stat.name}</h4> 
                                        <p>{stats.base_stat}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2>characteristic</h2>
                            <div className="characteristic-pokemon">
                                <div>
                                    <h3>weight: </h3>
                                    <p>{status.weight / 10}Kg</p>
                                </div>
                                <div>
                                    <h3>height: </h3>
                                    <p>{status.height / 10}M</p>
                                </div>
                                <div>
                                    <h3>base_experience: </h3>
                                    <p>{status.base_experience}xp</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        
                    </div>
                </div>}
        </div>
    )
}

export default PokemonDetails