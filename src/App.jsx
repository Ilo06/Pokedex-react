import { useState } from 'react';
import './index.css'
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import SetOffsetButton from './components/setOffsetButton.jsx';
import NotFoundPage from './components/notFoundPage.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';


function App() {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("")

  const router = createBrowserRouter([
    {
      path: "/", element: <>
        <Header search={search} setSearch={setSearch} />
        <Card offset={offset} search={search} />
        <SetOffsetButton setOffset={setOffset} />
      </>
    },
    {
      path: "*", element: <NotFoundPage/>
    }
  ])
  
  return (
    <StrictMode>
      <RouterProvider router={router} />

    </StrictMode>
  )
}

export default App
