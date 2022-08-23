const initialState = {
  team: [],
};

//action type
const pokemonTeam = "MY_TEAM";

//action creators
export const addTeam = (pokemon) => {
  return {
    type: pokemonTeam,
    pokemon,
  };
};

//thunk middleware

//reducer

const teamReducer = (currState = initialState, action) => {
  switch (action.type) {
    case pokemonTeam:
      return { team: [...currState.team, action.pokemon] };
    default:
      return currState;
  }
};
export default teamReducer;
