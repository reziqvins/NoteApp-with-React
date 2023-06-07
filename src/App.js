import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/network-data';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './context/ThemeContext';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import ThemeButton from './components/ThemeButton';
import LogoutButton from './components/LogoutButton';
import LoginPage from './pages/LoginPage';
import { LanguageProvider } from './context/LanguageContext';
import LanguageButton from './components/LanguageButton';

function App() {
  const notFound = "*";
  const register = "/register";
  const home = "/";
  const detail = "/notes/:id";
  const add = "/notes/new";
  const login = "/*";

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [language, setLanguage] = useState(
    localStorage.getItem("language" || "id")
  );
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "id" ? "en" : "id";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  const LanguageContextValue = React.useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  const [authedUser, setAuthedUser] = React.useState(null);

  React.useEffect(() => {
    const fetchGetUserLogged = async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
    };

    fetchGetUserLogged();
  }, []);

  const onLoginSucces = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);

    putAccessToken("");
  };

  if (authedUser === null) {
    return (
      <ThemeProvider value={themeContextValue}>
        <LanguageProvider value={LanguageContextValue}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">{language === 'id' ? 'Catatanku' : 'My Notes'}</Link>
              </h1>
              <ThemeButton />
              <LanguageButton/>
            </header>
            <main>
              <Routes>
                <Route
                  path={login}
                  element={<LoginPage loginSuccess={onLoginSucces} />}
                />
                <Route path={register} element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={themeContextValue}>
      <LanguageProvider value={LanguageContextValue}>
        <div className="app-container">
          <header>
            <h1>
              <Link to="/"> {language === 'id' ? 'Catatanku' : 'My Notes'}</Link>
            </h1>
            <Navigation />
            <ThemeButton />
            <LanguageButton/>
            <LogoutButton logout={onLogout} name={authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path={home} element={<HomePage />} />
              <Route path={add} element={<AddPage />} />
              <Route path={detail} element={<DetailPage />} />
              <Route path={notFound} element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
