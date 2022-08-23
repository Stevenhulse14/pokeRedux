import React from "react";
// we import useSelector and usDispatch from react-redux
import { useSelector, useDispatch } from "react-redux";

// Import our action creators or middleware
import { getPokemonAsync } from "../../reducer/pokemonReducer";
import { addTeam } from "../../reducer/teamReducer";

function Pokemon() {
  // useDispatch here
  const dispatch = useDispatch();
  //useSelector here
  const { singlePokemon: pokemon } = useSelector((state) => state.pokemon);
  const { team } = useSelector((state) => state.team);
  const state = useSelector((state) => state);

  console.log(state);
  //dispatch making changes to state.
  return (
    <div>
      <div className="mainContainer">
        <div className="buttonContainer">
          <button
            onClick={() =>
              dispatch(getPokemonAsync(Math.floor(Math.random() * 300)))
            }
          >
            Get New Pokemon
          </button>

          <button onClick={() => dispatch(addTeam(pokemon))}>
            <img className="pokeball" src="pokeball.png" alt="pokeball" />
          </button>
        </div>
        <div className="pokemonContainer">
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
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
