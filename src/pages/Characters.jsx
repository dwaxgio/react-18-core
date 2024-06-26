import React from "react";
import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      console.log(characters);
    };
    getCharacters();
  }, []);

  return (
    <div>
      {characters ? (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <img
                src={character.image}
                alt=""
                height="200px"
                width="200px"
              ></img>
              <div>
                {character.firstName} {character.age}{" "}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading characters</p>
      )}
    </div>
  );
};

export default Characters;
