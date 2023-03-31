import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./vistas/About";
import Detail from "./vistas/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";
import { useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "mariatrinidadsalazarr@gmail.com";
  const password = "Loslassenkonen1";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";
    //const KEY = "09967d0ad6c9.e15ef269aab8887e54a1";

    if (characters.find((character) => character.id === id)) {
      return alert("eres tan tonto como yo soy inteligente");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert(
            "No me vas a creer, porque casi nunca pasa, pero cometí un error"
          );
        }
      });
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(characters.filter((ch) => ch.id !== id));
  };
  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
