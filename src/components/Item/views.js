import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid black;
  padding: 0 60px;
  animation: 1s;
  animation-name: op;
  background-color: #e1e5a5;
  @keyframes op {
    0% {
      scale: 0;
      background-color: green;
    }
    50% {
      opacity: 0.5;
      background-color: green;
    }
    100% {
      opacity: 1;
      background-color: #e1e5a5;
    }
  }
`;
export const Title = styled.div`
  width: 10%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
export const DeleteBtn = styled.div`
  width: 10%;
  letter-spacing: 4px;
  font-size: 14px;
  padding: 5px 0;
  color: white;
  background-color: red;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 12px;
  &:hover {
    background-color: #c31313;
  }
`;
