import { useEffect, useState } from 'react';
import './index.css';
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import SetOffsetButton from './components/SetOffsetButton.jsx';
import Error from './components/Error.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import Footer from './components/Footer.jsx';

function App() {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header search={search} setSearch={setSearch} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Card offset={offset} search={search} />
          <SetOffsetButton setOffset={setOffset} />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: <Error title={"404 Not Found"} content={"The Page you're trying to access does not exist"} />
    },
    {
      path: "/details/:nameUrl",
      element: <PokemonDetails />
    }
  ]);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
