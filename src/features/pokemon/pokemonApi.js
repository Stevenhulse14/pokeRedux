export async function fetchPokemon(pokemonId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  const pokemon = await response.json()
  return pokemon
}
