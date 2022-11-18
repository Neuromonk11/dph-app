import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: center;
`;
export const ModalContent = styled.div`
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  text-align: center;
  background-color: white;
  text-transform: uppercase;
  animation: ani 0.5s;
  row-gap: 20px;
  @keyframes ani {
    0% {
      opacity: 0;
      background-color: white;
    }
    100% {
      opacity: 1;
      background-color: white;
    }
  }
`;
export const ModalText = styled.div`
  font-size: 46px;
  padding-bottom: 40px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding: 5px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #008000b8;
  height: 26px;
  padding: 11px;
  transition: 0.5s;
  &:hover {
    background-color: #008000fa;
  }
`;
export const ButtonC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding: 5px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff0000c7;
  height: 26px;
  padding: 11px;
  transition: 0.5s;
  &:hover {
    background-color: #ff0000;
  }
`;
