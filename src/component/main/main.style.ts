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
  justify-content: center;
  width: 80%;
  max-width: 1000px;
  height: 70%;
  min-height: 500px;
  color: #009779;
  font-size: 30px;
  font-weight: bold;
  border: 5px solid white;
  border-radius: 25px;
  padding: 1%;
  text-align: center;
  background-color: white;
`;

export const TextArea = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: normal;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const UserNameInput = styled.input`
  width: 50%;
  font-size: 40px;
  text-align: center;
  border: 5px solid #009779;
  padding: 2%;
`;

export const StartQuizButton = styled.button`
  margin-top: 3%;
  width: 300px;
  height: 80px;
  background-color: #009779;
  outline: none;
  border: 0px;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
