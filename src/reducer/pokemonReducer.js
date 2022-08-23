//initial state
const initialState = {
  singlePokemon: {},
  team: [],
};
//action type

const getPokemon = "SINGLE_POKEMON";
const pokemonTeam = "MY_TEAM";

//action creators

export const fetchPokemon = (pokemon) => {
  return {
    type: getPokemon,
    pokemon,
  };
};

export const addTeam = (pokemon) => {
  return {
    type: pokemonTeam,
    pokemon,
  };
};

//middleware

export const getPokemonAsync = (pokemonId) => async (dispatch) => {
  try {
    //fetch response from api `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    // await response.json()
    //dispatch fetchPokemon
  } catch (err) {
    console.error(err);
  }
};

//reducer
const pokmonReducer = (currState = initialState, action) => {
  switch (action.type) {
    case getPokemon:
      // find a pokemon
      return { ...currState, singlePokemon: { ...action.pokemon } };
    // my pokemon team
    case pokemonTeam:
      return { ...currState, team: [...currState.team, action.pokemon] };
    default:
      return currState;
  }
};
export default pokmonReducer;
