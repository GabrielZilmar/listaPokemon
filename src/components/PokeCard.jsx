import React, { useState } from "react";
import logo from "../assets/poke_logo.png";
import styled, { keyframes } from "styled-components";
import {getPokemons} from "../requests/poke.js";

const PokeCard = (props) => {
  return (
    <StyledContainer>
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`}></img>
        <StyledLabel>{props.pokemon.name}</StyledLabel>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 20vh;
  width: 20vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);  
  border-radius: 5px; /* 5px rounded corners */

`;

const StyledLabel = styled.p`
  color: white;
  font-size: 20;
`;

export default PokeCard;
