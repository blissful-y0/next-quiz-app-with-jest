import {
  PageWrapper,
  Question,
  AnswerContainer,
  NextButton,
  RetryButton,
  ButtonContainer,
  IncorrectAnswerOne,
  IncorrectAnswerTwo,
  IncorrectAnswerThree,
  CorrectAnswer,
} from "./quiz.style";
import MoonLoader from "react-spinners/ClipLoader";
import { IData } from "./quiz.type";

interface IProps {
  data: IData[];
  onClickNextButton: React.MouseEventHandler<HTMLButtonElement>;
  onClickAnswers: (event: boolean) => void;
  index: number;
  isButtonVisible: "visible" | "hidden";
  isSelectable: boolean;
  onClickFinishButton: React.MouseEventHandler<HTMLButtonElement>;
  onClickRetryButton: React.MouseEventHandler<HTMLButtonElement>;
  answersArray: boolean[];
}

function QuizUI({
  data,
  onClickNextButton,
  index,
  isButtonVisible,
  onClickAnswers,
  isSelectable,
  onClickFinishButton,
  onClickRetryButton,
  answersArray,
}: IProps) {
  return (
    <>
      <PageWrapper>
        {data.length === 1 ? (
          <MoonLoader
            size={300}
            loading={true}
            color={"white"}
            speedMultiplier={1}
          />
        ) : (
          <>
            <Question>{data[index]?.question}</Question>
            <AnswerContainer>
              <IncorrectAnswerOne
                //@ts-ignore
                isTrue={answersArray[index]}
                disabled={isSelectable}
                onClick={() => onClickAnswers(false)}
              >
                {data[index]?.incorrect_answers[0]}
              </IncorrectAnswerOne>
              <IncorrectAnswerTwo
                //@ts-ignore
                isTrue={answersArray[index]}
                disabled={isSelectable}
                onClick={() => onClickAnswers(false)}
              >
                {data[index]?.incorrect_answers[1]}
              </IncorrectAnswerTwo>
              <IncorrectAnswerThree
                //@ts-ignore
                isTrue={answersArray[index]}
                disabled={isSelectable}
                onClick={() => onClickAnswers(false)}
              >
                {data[index]?.incorrect_answers[2]}
              </IncorrectAnswerThree>
              <CorrectAnswer
                //@ts-ignore
                isTrue={answersArray[index]}
                disabled={isSelectable}
                onClick={() => onClickAnswers(true)}
              >
                {data[index]?.correct_answer}
              </CorrectAnswer>
              <ButtonContainer style={{ visibility: isButtonVisible }}>
                <RetryButton onClick={onClickRetryButton}>Retry</RetryButton>
                {index === 9 ? (
                  <NextButton onClick={onClickFinishButton}>Finish</NextButton>
                ) : (
                  <NextButton onClick={onClickNextButton}>Next</NextButton>
                )}
              </ButtonContainer>
            </AnswerContainer>
          </>
        )}
      </PageWrapper>
    </>
  );
}

export default QuizUI;
