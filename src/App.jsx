import { useState } from 'react';
import './index.css'
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import SetOffsetButton from './components/setOffsetButton.jsx';

function App() {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("")

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Card offset={offset} search={search} />
      <SetOffsetButton setOffset={setOffset} />
    </>
  )
}

export default App
