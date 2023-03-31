import React from "react";
import styles from "./Form.module.css";
import validate from "../validation";

const Form = (props) => {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(
      validate({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.userName}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            ></input>
          </div>
          <p className={styles.error}>{errors.username && errors.username}</p>
          <div className={styles.passWord}>
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            ></input>
          </div>
          <p className={styles.error}>{errors.password && errors.password}</p>
          <div className={styles.buttonSubmit}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
