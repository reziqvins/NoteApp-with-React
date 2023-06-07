import React, { useContext } from "react";
import { BsTranslate } from "react-icons/bs";
import LanguageContext from "../context/LanguageContext";

const LanguageButton = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <button className="toggle-language" type="button" onClick={toggleLanguage}>
      <BsTranslate />
    </button>
  );
};

export default LanguageButton;
