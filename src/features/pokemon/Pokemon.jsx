import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  getPokemonAsync,
  selectPokemon,
} from './pokemonSlice'

function Pokemon(props) {
  const { pokemon } = useSelector(selectPokemon)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          onClick={() =>
            dispatch(getPokemonAsync(Math.floor(Math.random() * 200)))
          }
        >
          Get New Pokemon
        </button>
      </div>
      <div>
        {Object.keys(pokemon).length ? (
          <>
            <h1>{pokemon.name}</h1>
            <img alt="pokerman" src={pokemon.sprites.front_default} />
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Pokemon
