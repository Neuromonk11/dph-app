import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 22px;
  font-weight: 500;
  justify-content: center;
  background-color: green;
  margin: 10px auto;
  width: 100px;
  height: 40px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #1cb71c;
  }
`;
