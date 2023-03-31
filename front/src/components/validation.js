const regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexPassword = new RegExp("[0-9]");

export default function validate(input) {
  const errors = {
    username: "",
    password: "",
  };

  if (!regexEmail.test(input.username))
    errors.username = "ingrese un email válido";

  if (!input.username) errors.username = "por favor complete este campo";

  if (input.username.length > 35)
    errors.username = "no puede tener más de 35 caracteres";

  if (!regexPassword.test(input.password))
    errors.password = "debe tener al menos un número";

  if (input.password.length < 6 && input.password.length > 10)
    errors.password = "debe tener una longitud entre 6 y 10 caracteres";
  return errors;
}
