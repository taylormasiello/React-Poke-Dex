import logo from './pokeLogo.png';
import pokemonData from "./pokeapi.json";
import React, { useState } from "react";
import './App.css';

function App() {
  {/* useState: React Hook that enables update to a certain variable */}
  const [pokemonList, setPokemonList] = useState(pokemonData.results);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  //returns list of pokemon from pokeapi.json, filtered by search box input
  const filteredPokemonList = pokemonList.filter((pokemon) => pokemon.name.includes(searchTerm));

  const showPokemon = async (url) => {
    const response = await fetch(url);
    if(!response.ok){
      console.error('Error fetching Pokemon: ${response.statusText}');
      return;
    }

    const data = await response.json();
    setSelectedPokemon(data);
  }
  
  return (
    <div className="App">
      <header>
        <img alt="pokeLogo" className="logo" src={logo} />
      </header>

      <main>
        <div className="search-container">
          {/*searchTerm: state variable set as value of the input field; onChange event handler updates searchTerm when user types into input field; 2-way data binding created*/}
          <input className="search-box" type="text" placeholder="Search..."
            value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
          </div>

          {/* selectedPokemon && so that the line {{ selectedPokemon.name }} doesn't throw an error for trying to access a property that doesn't exist on the object selectedPokemon */
          /* selectedPokemon is initialized as null in the beginning: const [selectedPokemon, setSelectedPokemon] = useState(null);)*/}
          {selectedPokemon && (
            <div className="pokemon-details">
              <h2>{selectedPokemon.name}</h2>
              <img
                src={selectedPokemon.sprites.front_default}
                alt={selectedPokemon.name}
              />
              <p>Height: {selectedPokemon.height}</p>
              <p>Weight: {selectedPokemon.weight}</p>

              {/* using map to loop through elements of stats array and output name + base_state props */}
              {selectedPokemon.stats.map((stat, index) => (
                <div key={index}>
                  <p>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                </div>
              ))}
            </div>
          )}

          <ul>
            {filteredPokemonList.map((pokemon => (
              <li key={pokemon.id} className="pokemon-item">
                <a href="#" onClick={() => showPokemon(pokemon.url)}>{pokemon.name}</a>
              </li>
            )))}
          </ul>
        
      </main>
    </div>
  );
}

export default App;
