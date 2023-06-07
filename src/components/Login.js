import PropTypes from "prop-types";
import React from "react";
import LanguageContext from "../context/LanguageContext";
import useInput from "../Hooks/UseInput";

const LoginInput = ({ login }) => {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const { language } = React.useContext(LanguageContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-login">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={onEmailChangeHandler}
      />

      <label htmlFor="password">
        {language === "id" ? "Katasandi" : "Password"}
      </label>
      <input
        type="password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>{language === "id" ? "Masuk" : "Login"}</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
