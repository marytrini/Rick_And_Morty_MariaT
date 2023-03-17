import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  deleteFavorite,
  myFavorites,
}) {
  const [isFav, setFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setFav(false);
      deleteFavorite(id);
    } else {
      setFav(true);
      addFavorite(id, name, species, gender, image, onClose);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.divStyle}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className={styles.closeButton}>
        <button onClick={() => onClose(id)}>X</button>
      </div>
      <div className={styles.textContainer}>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
      </div>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.textContainer}>
        <h3>{species}</h3>
        <h3>{gender}</h3>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
