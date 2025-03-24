import logo from './pokeLogo.png';
import pokemonData from "./pokeapi.json";
import React, { useState } from "react";
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState(pokemonData.results);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  //returns list of pokemon from pokeapi.json, filtered by search box input
  const filteredPokemonList = pokemonList.filter((pokemon) => pokemon.name.includes(searchTerm));
  
  return (
    <div className="App">
      <header>
        <img alt="pokeLogo" className="logo" src={logo} />
      </header>
      <main>

        <div className="search-container">
          <input className="search-box" type="text" placeholder="Search..." />
          <ul>
            {filteredPokemonList.map((pokemon => (
              <li key={pokemon.id} className="pokemon-item">
                <a href="#">{pokemon.name}</a>
              </li>
            )))}
          </ul>
        </div>
        
      </main>
    </div>
  );
}

export default App;
