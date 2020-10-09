import axios from 'axios';
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import Characters from "./components/Character.js"
import './App.css';

const StyledApp = styled.div`
width:60%;
flex-wrap:wrap;
display:flex;
justify-content:space-around; 
margin:auto;
h1{
  width:100%;
  font-size:5rem;
  text-align:center;
}
`
const App = () => {
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    const fetchCharacter = () => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then((res) => {
          setCharacterList(res.data.results)
        })
        .catch((error) => {
          debugger
        })
    }
    fetchCharacter()
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp>
      <h1 className="Header">Characters</h1>
      <Characters characterList={characterList} />
    </StyledApp>
  );
}

export default App;
