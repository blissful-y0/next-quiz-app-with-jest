import ResultUI from "./result.presetner";
import { GlobalContext } from "../../../pages/_app";
import { useContext, useEffect, useState } from "react";
import { IData } from "../quiz/quiz.type";

interface IResult {
  totalTime: string;
  answers: boolean[];
}

function Result() {
  const { data, userName } = useContext(GlobalContext);
  const [errorNotes, setErrorNotes] = useState<IData[]>([]);
  const timer =
    typeof window !== "undefined" ? localStorage.getItem("TotalTimer") : null;
  const answers =
    typeof window !== "undefined" ? localStorage.getItem("Answers") : null;

  useEffect(() => {
    generateErrorNote();
  }, []);

  const calculateTimePassed: (time: number) => string = () => {
    let time = Number(timer);
    if (time < 61) {
      return `${time}초`;
    } else {
      return `${Math.floor(time)}분 ${time % 60}초`;
    }
  };

  const result: IResult = {
    totalTime: calculateTimePassed(Number(timer)),
    //@ts-ignore
    answers: JSON.parse(answers),
  };

  const answerRatio = {
    correct: result?.answers?.filter((el) => el === true).length,
    incorrect: result?.answers?.filter((el) => el === false).length,
  };

  const generateErrorNote = () => {
    let incorrectAnswer = [];
    let index = result.answers.indexOf(false);
    while (index != -1) {
      incorrectAnswer.push(index);
      index = result.answers.indexOf(false, index + 1);
    }
    let incorrectQuestionArray = incorrectAnswer.map((el) => data[el]);

    setErrorNotes(incorrectQuestionArray);
  };

  return (
    <ResultUI
      answerRatio={answerRatio}
      time={result.totalTime}
      userName={userName}
      errorNotes={errorNotes}
    />
  );
}

export default Result;
