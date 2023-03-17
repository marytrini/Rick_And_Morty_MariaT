import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <div>
      <div className={styles.navBarLinks}>
        <Link to="/about">
          <h3>ABOUT</h3>
        </Link>
        <Link to="/home">
          <h3>HOME</h3>
        </Link>
        <Link to="/favorites">
          <h3>FAVORITES</h3>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
