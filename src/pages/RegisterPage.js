import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/Register";
import LanguageContext from "../context/LanguageContext";
import { register } from "../utils/network-data";
import React from "react";

const RegisterPage = () => {
  const { language } = React.useContext(LanguageContext);

  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>
        {language === "id"
          ? "Isi data untuk mendaftar akun"
          : "Fill the data to register account."}
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {language === "id" ? "Sudah punya akun?" : "Already have an account?"}{" "}
        <Link to="/">{language === "id" ? "Login di sini" : "Login here"}</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
