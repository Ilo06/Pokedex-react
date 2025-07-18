import { useState } from 'react';
import './index.css'
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import SetOffsetButton from './components/setOffsetButton.jsx';

function App() {
  const [offset, setOffset] = useState(0);

  return (
    <>
      <Header/>
      <Card offset={offset} />
      <SetOffsetButton setOffset={setOffset}/>
    </>
  )
}

export default App
