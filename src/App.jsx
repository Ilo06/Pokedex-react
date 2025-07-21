import { useState } from 'react';
import './index.css'
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import SetOffsetButton from './components/setOffsetButton.jsx';
import Error from './components/Error.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import Footer from './components/Footer.jsx';
import "./styles/Footer.css"

function App() {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header search={search} setSearch={setSearch} />
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
