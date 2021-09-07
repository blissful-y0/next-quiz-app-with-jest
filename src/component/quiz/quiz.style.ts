import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IButton {
  isTrue: boolean;
}

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    340deg,
    #009779,
    #00b092,
    #00c9ab,
    #19e2c4,
    #32fbdd
  );
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1000px;
  height: 15%;
  min-height: 250px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  border: 5px solid white;
  border-radius: 25px;
  padding: 1%;
  text-align: center;
`;

export const IncorrectAnswerOne = styled.button`
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "white")};
  font-size: 25px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 25px;
  width: 100%;
  max-width: 800px;
  height: 45px;
  min-height: 45px;
  margin-bottom: 2%;
  cursor: pointer;
  color: ${(props: IButton) =>
    props.isTrue === undefined ? "#009779" : "#ff0000"};
`;
export const IncorrectAnswerTwo = styled.button`
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "white")};
  font-size: 25px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 25px;
  width: 100%;
  max-width: 800px;
  height: 45px;
  min-height: 45px;
  margin-bottom: 2%;
  cursor: pointer;
  color: ${(props: IButton) =>
    props.isTrue === undefined ? "#009779" : "#ff0000"};
`;
export const IncorrectAnswerThree = styled.button`
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "white")};
  font-size: 25px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 25px;
  width: 100%;
  max-width: 800px;
  height: 45px;
  min-height: 45px;
  margin-bottom: 2%;
  cursor: pointer;
  color: ${(props: IButton) =>
    props.isTrue === undefined ? "#009779" : "#ff0000"};
`;

export const CorrectAnswer = styled.button`
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "white")};
  font-size: 25px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 25px;
  width: 100%;
  max-width: 800px;
  height: 45px;
  min-height: 45px;
  margin-bottom: 2%;
  cursor: pointer;
  color: ${(props: IButton) =>
    props.isTrue === undefined ? "#009779" : "#00ffaa"};
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 3%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

export const RetryButton = styled.button`
  text-align: center;
  background-color: #00c9ab;
  color: black;
  font-size: 25px;
  font-weight: bold;
  border: 2px solid #00c9ab;
  border-radius: 25px;
  width: 49%;
  max-width: 800px;
  height: 45px;
  min-height: 45px;
  margin-bottom: 2%;
  cursor: pointer;
  outline: none;
`;

export const NextButton = styled.button`
  text-align: center;
  background-color: #00c9ab;
  color: black;
  font-size: 25px;
  font-weight: bold;
  border: 2px solid #00c9ab;
  border-radius: 25px;
  width: 49%;
  max-width: 800px;
  height: 45px;
  min-height: 45px;
  margin-bottom: 2%;
  cursor: pointer;
  outline: none;
`;
