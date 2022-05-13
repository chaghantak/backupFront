import React from "react";
import styled from "styled-components";
import './Buttons.css'
function Button({ handleModalClose }) {
  return <Click className="bn632-hover bn21" onClick={() => handleModalClose()}>닫기</Click>;
}



export default Button;

const Click = styled.span`
  color: white;
  float: right;
  margin: 48px;

`;
