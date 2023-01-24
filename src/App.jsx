import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import Searchbar from './components/Searchbar'
import {searchPokemon} from "./Api"
import PokemonDetails from './components/PokemonDetails'


function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  const pagination = (number) => {
    if(page + number < 0) {

    } else {
      setPage(page + number) 
    }
  }
  
  const getPokemon = async (offeset = page) => {
    try {
      setLoading(true)
      
      let url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offeset}`
      const response = await fetch(url)
      const data = await response.json()

      const promises = data.results.map(async (pokemon) => {
        let allPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        return await allPokemons.json()
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)

    } catch (error) {
        console.log(`error: ${error}`)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [page])

  const onSearchHandler = async (pokemon) => {
    if (pokemon != "") {
      const result = await searchPokemon(pokemon)
      if (result != undefined) {
        setPokemons([result])
      } else {
        getPokemon()
      }
    }
    }

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" exact element={
              <div>
                <Searchbar onSearchHandler={onSearchHandler}/>
                <Pokedex pokemons={pokemons} 
                loading={loading} 
                pagination={pagination}/>
              </div>
            }/>

            <Route path="/:pokemonName" exact element={
              <PokemonDetails />
            }/>

          </Routes>
      </div>
    </Router>
  )
}

export default App
