import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPokemon } from './pokemonApi'
const initialState = {
  pokemon: {},
  status: 'idle',
}

export const getPokemonAsync = createAsyncThunk(
  `pokemon/getPokemon`,
  async (pokemonId) => {
    const pokemon = await fetchPokemon(pokemonId)
    return pokemon
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPokemonAsync.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getPokemonAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.pokemon = action.payload
    })
  },
})

export const selectPokemon = (state) => state.pokemon

export default pokemonSlice.reducer
