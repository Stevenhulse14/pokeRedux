import React from "react";

import { getPokemonAsync, addTeam } from "../../reducer/pokemonReducer";

//Import useSelector, and useDispatch from react-redux
//Import your middleware and action creators
//utilize dispatch and useSelector
//dispatch changes the state and useSelector retrieves your state.
function Pokemon() {
  const dispatch = () => {};

  //console.log(team, pokemon);
  return (
    <div>
      <div className="mainContainer">
        <div className="buttonContainer">
          <button onClick={() => dispatch()}>Get New Pokemon</button>

          <button onClick={() => dispatch()}>
            <img className="pokeball" src="pokeball.png" alt="pokeball" />
          </button>
        </div>
        {/* <div className="pokemonContainer">
          <div>
            <h3>
              {pokemon.name ? <>A Wild Poke Appared</> : <>Wild Poke ?</>}
            </h3>
            {pokemon.name ? (
              <>
                <h2>
                  {pokemon.name}, {pokemon.id}
                </h2>
                <img src={pokemon.sprites.front_shiny} alt="poke" />
              </>
            ) : null}
          </div>
          <div className="team">
            <h1>MY TEAM</h1>
            {team.map((member) => {
              return (
                <div key={`${member.id + member.name}`}>
                  <h2>{member.name}</h2>
                  <img src={member.sprites.front_shiny} alt="ayy" />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Pokemon;
