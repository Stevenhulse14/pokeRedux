import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPokemon } from './pokemonApi'
const initialState = {
  singlePokemon: {},
  team: [],
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
  name: 'singlePokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonAsync.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getPokemonAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.singlePokemon = action.payload
      state.team.push(action.payload)
    })
  },
})

export const selectPokemon = (state) => state

export default pokemonSlice.reducer
