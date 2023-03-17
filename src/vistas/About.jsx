import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.contained}>
      <div className={styles.aboutDiv}>
        <h1>Rick and Morty</h1>
        <h2>by María</h2>
        <img src="C:\Users\Maritrini\Desktop\imagenes\running.jpg" alt=""></img>
        <p>
          Las nociones de diseño controlado únicamente por pruebas y el código,
          propias de finales de la década de 1990, ya no son válidas. Y la
          atención al detalle es un pilar fundamental de los profesionales, casi
          como cualquier visión.
          <br /> Por otro lado, la práctica en los detalles otorga dominio a los
          profesionales, y aumenta su confianza para la práctica a mayor escala.
          Por otra parte, el más mínimo fallo de construcción, una puerta que no
          cierre bien o un baldosín mal colocado, acaba con el encanto del todo.
          De eso se trata el código limpio.
        </p>
        <p>
          Hoy en día, el objetivo es comercializar rápidamente los productos.
          Queremos que las fábricas produzcan software a pleno rendimiento. Se
          trata de fábricas humanas, programadores que piensan, que sienten y
          que trabajan para crear un producto. La metáfora de la manufacturación
          es incluso más evidente en este pensamiento. Los aspectos productivos
          de las fábricas de automóviles japonesas fueron una gran inspiración
          para Scrum.
        </p>
      </div>
    </div>
  );
};
export default About;
