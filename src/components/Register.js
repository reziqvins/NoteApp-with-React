import PropTypes from "prop-types";
import React from "react";
import LanguageContext from "../context/LanguageContext";
import useInput from "../Hooks/UseInput";

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const { language } = React.useContext(LanguageContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    password === confirmPassword
      ? register({ name, email, password })
      : alert("Passwords don't match");
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <label htmlFor="nama">{language === "id" ? "Nama" : "Name"}</label>
      <input id="nama" type="text" value={name} onChange={onNameChange} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={onEmailChange} />

      <label htmlFor="password">
        {language === "id" ? "KataSandi" : "Password"}
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />

      <label htmlFor="confirmPassword">
        {language === "id" ? "Konfirmasi KataSandi" : "Confirm Password"}
      </label>
      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />

      <button>{language === "id" ? "Daftar" : "Register"}</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
