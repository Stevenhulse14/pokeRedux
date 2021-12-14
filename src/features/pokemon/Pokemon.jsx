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
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} />
      </div>
    </div>
  )
}

export default Pokemon
