import React from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";

const Navigation = () => {
  const { language } = React.useContext(LanguageContext);
 
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">{language === "id" ? "Arsip" : "Archieve"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
