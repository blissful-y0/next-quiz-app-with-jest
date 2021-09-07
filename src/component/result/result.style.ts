import styled from "@emotion/styled";

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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  max-width: 1000px;
  height: 70%;
  min-height: 500px;
  color: #009779;
  font-size: 25px;
  font-weight: bold;
  border: 5px solid white;
  border-radius: 25px;
  padding: 1%;
  text-align: center;
  background-color: white;
  overflow: auto;
`;

export const PieChartContainer = styled.div`
  width: 80%;
  height: 150px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const ResultTextArea = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: normal;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const ErrorNotesContainer = styled.div`
  width: 100%;
  border: 4px solid #009779;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ErrorNotesTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

export const ErrorNoteQuestion = styled.h1`
  font-size: 20px;
  color: #009779;
`;

export const ErrorNoteCorrectAnswer = styled.h3`
  font-size: 19px;
  font-weight: normal;
`;

export const RestartQuizButton = styled.button`
  margin-top: 1%;
  width: 300px;
  height: 80px;
  background-color: #009779;
  outline: none;
  border: 0px;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
