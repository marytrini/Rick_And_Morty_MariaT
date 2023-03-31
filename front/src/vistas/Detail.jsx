import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const URL = "http://localhost:3001";
    //const KEY = "09967d0ad6c9.e15ef269aab8887e54a1";

    fetch(`${URL}/detail/${id}`)
      .then((response) => response.json())
      .then((character) => {
        if (character.name) {
          console.log(character);
          setCharacter(character);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, []);
  return (
    <div className={styles.containAll}>
      <div className={styles.detailContainer}>
        {character.name ? (
          <>
            <div className={styles.description}>
              <h2>{character.name}</h2>
              <p>{character.status}</p>
              <p>{character.specie}</p>
              <p>{character.gender}</p>
              <p>{character.origin?.name}</p>
              <Link to="/home">
                <button>GO HOME</button>
              </Link>
            </div>
            <div className={styles.image}>
              <img src={character.image} alt="img" />
            </div>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};
export default Detail;
