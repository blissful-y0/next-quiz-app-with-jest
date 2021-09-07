import { useRouter } from "next/dist/client/router";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../../pages/_app";
import { useTimer } from "../../common/libraries/utils";
import QuizUI from "./quiz.presenter";
import { API_URL } from "./quiz.query";

const Quiz = () => {
  const router = useRouter();
  const { data, setData, userName } = useContext(GlobalContext);
  const [index, setIndex] = useState<number>(0);
  const [isSelectable, setIsSelectable] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<"visible" | "hidden">(
    "hidden"
  );
  const [answersArray, setAnswersArray] = useState<boolean[]>([]);
  const [totalSeconds, setTotalSeconds] = useState<number[]>([]);

  const { setIsRunning, seconds, setSeconds } = useTimer();

  useEffect(() => {
    const onLoadPage = fetch(API_URL)
      .then((result) => result.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const onClickAnswers = (event: boolean) => {
    setIsRunning(false);
    setIsButtonVisible("visible");
    setIsSelectable((props) => !props);
    setAnswersArray((prev) => [...prev, event]);
  };

  const onClickNextButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (index === 9) return;
    setIsRunning(true);
    setTotalSeconds((prev) => [...prev, seconds]);
    setIsButtonVisible("hidden");
    setIsSelectable((props) => !props);
    setSeconds(1);
    setIndex(index + 1);
  };

  const onClickFinishButton: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (totalSeconds.length > 10) return;
    setIsRunning(false);
    setTotalSeconds((prev) => [...prev, seconds]);
    const totalTime = totalSeconds.reduce((acc, curr) => acc + curr, 0);
    localStorage.setItem("Answers", `${JSON.stringify(answersArray)}`);
    localStorage.setItem("TotalTimer", `${totalTime}`);
    router.push({
      pathname: "/result",
      query: {
        showResult: userName,
      },
    });
  };

  const onClickRetryButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (index === 9) {
      setAnswersArray([]);
      setIsButtonVisible("hidden");
      setIsSelectable(false);
      setIndex(0);
      setSeconds(1);
      setIsRunning(true);
      localStorage.clear();
    } else {
      let retryArray: boolean[] = [...answersArray];
      retryArray.pop();
      setAnswersArray(retryArray);
      setIsButtonVisible("hidden");
      setIsSelectable(false);
      setSeconds(1);
      setIsRunning(true);
    }
  };

  return (
    <QuizUI
      data={data}
      onClickNextButton={onClickNextButton}
      index={index}
      isButtonVisible={isButtonVisible}
      onClickAnswers={onClickAnswers}
      isSelectable={isSelectable}
      onClickFinishButton={onClickFinishButton}
      onClickRetryButton={onClickRetryButton}
      answersArray={answersArray}
    />
  );
};

export default Quiz;
