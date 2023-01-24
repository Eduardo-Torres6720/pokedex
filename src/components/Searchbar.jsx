import React, { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = (props) => {
    const {onSearchHandler} = props
    const [search, setSearch] = useState()

    const onKeyUpHandler = (e) => {
        setSearch(e.target.value)
        if (e.keyCode === 13) {
            onSearchHandler(search)
        }
    }

    const onClickButtonHandler = () => {
        onSearchHandler(search)
    }


    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="Buscar pokemon" onKeyUp={onKeyUpHandler}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={onClickButtonHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar