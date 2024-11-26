import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props)=> props.changeColor === "tryIT" ? "#fff" : "#4caf50"};
  color: ${(props) => (props.changeColor === "tryIT" ? "#4caf50" : "#fff")};
  padding: 15px 32px;
  margin: 20px auto;
  margin-right: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0ms.5s all ease-out;
  &:hover{
    background-color: ${(props)=> props.changeColor !== "tryIT" ? "#fff" : "#4caf50"};
    color: ${(props) => (props.changeColor !== "tryIT" ? "#4caf50" : "#fff")};
  }
`