// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import theme from "../theme"

const StyledCharacter = styled.div`
border: 1px solid black;
background-color:rgba(192,192,192,0.5);
margin:${pr => pr.theme.margin.small};
padding:${pr => pr.theme.padding.small};
text-align:center;
justify-content:center;
border-radius:3%;
width:400px;
color:${pr => pr.theme.primaryColor};
font-size:1.6rem;

&:hover{
    transform:scale(1.2);
    transition:${pr => pr.theme.QuickTransition};
}
transition:${pr => pr.theme.QuickTransition};


`

export default function Character(props) {
    const { characterList } = props

    const character = characterList.map((char) => {
        const name = char.name
        const gender = char.gender
        const species = char.species
        const status = char.status
        const image = char.image


        return (
            <StyledCharacter key={char.id}>
                <ul>
                    <img src={image}></img>
                    <p>Name: {name}</p>
                    <p>Species: {species}</p>
                    <p>Gender: {gender}</p>
                    <p>Status: {status}</p>
                </ul>
            </StyledCharacter>
        )
    })
    return character
}