import { useState } from 'react';
import './index.css'
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import SetOffsetButton from './components/SetOffsetButton.jsx';
import Error from './components/Error.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import Footer from './components/Footer.jsx';
import "./styles/Footer.css"
import React from 'react';

function App() {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  // Ajout de l'état darkMode centralisé
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) return savedMode === "true";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Gestion de la classe dark sur le document
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header search={search} setSearch={setSearch} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Card offset={offset} search={search} />
        <SetOffsetButton setOffset={setOffset} />
        <Footer />
      </>
    },
    {
      path: "*",
      element: <Error title={"404 Not Found"} content={"The Page you're trying to access does not exist"} />
    },
    {
      path: "/details/:nameUrl",
      element: <PokemonDetails />
    }
  ])

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
