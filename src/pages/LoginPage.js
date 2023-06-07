import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/Login";
import { login } from "../utils/network-data";
import LanguageContext from "../context/LanguageContext";
const LoginPage = ({ loginSuccess }) => {
  const { language } = React.useContext(LanguageContext);

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className="login-page">
      <h2>
        {language === "id"
          ? "Login Untuk Buat Catatan"
          : "Login To Make A Notes."}
      </h2>
      <LoginInput login={onLogin} />
      <p>
        {language === "id" ? "Belum punya akun?" : `Dont'have an account?`}{" "}
        <Link to="/register">
          {language === "id" ? "Daftar di sini." : "Register here"}
        </Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
