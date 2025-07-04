import { useState } from "react";

import styled from "styled-components";
const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <>
      <Container>
      <Card>
        <Heading>Click Counter</Heading>
        <CountText>{count}</CountText>
        <ClickButton onClick={handleClick}>Click Me</ClickButton>
      </Card>
    </Container>


  
    </>
  )
}

export default App




const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 40px 60px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 30px 40px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 15px;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2f3e46;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CountText = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #1c1c1c;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const ClickButton = styled.button`
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #3d5a80;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #293f58;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 1rem;
  }
`;



