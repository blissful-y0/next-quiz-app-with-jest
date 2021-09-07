import PieChart from "../../common/pieChart/pieChart";
import { IData } from "../quiz/quiz.type";
import {
  PageWrapper,
  Question,
  PieChartContainer,
  ResultTextArea,
  ErrorNotesContainer,
  ErrorNotesTitle,
  ErrorNoteQuestion,
  ErrorNoteCorrectAnswer,
  RestartQuizButton,
} from "./result.style";
import Link from "next/link";

interface IProps {
  answerRatio: {
    correct: number;
    incorrect: number;
  };
  time: string;
  userName: string;
  errorNotes: IData[];
}

function ResultUI({ answerRatio, time, userName, errorNotes }: IProps) {
  return (
    <>
      <PageWrapper>
        <Question>
          {userName} 님의 결과
          <PieChartContainer>
            <PieChart answerRatio={answerRatio} />
          </PieChartContainer>
          <ResultTextArea>
            {userName} 님의 최종 점수는 {answerRatio.correct} / 10입니다! 문제
            풀이에 걸린 총 시간은 {time}입니다!
          </ResultTextArea>
          <ErrorNotesTitle>오답 노트</ErrorNotesTitle>
          <ErrorNotesContainer>
            {errorNotes.map((el, index) => (
              <>
                <ErrorNoteQuestion key={index}>
                  {el?.question}
                </ErrorNoteQuestion>
                <ErrorNoteCorrectAnswer>
                  정답: {el?.correct_answer}
                </ErrorNoteCorrectAnswer>
              </>
            ))}
          </ErrorNotesContainer>
        </Question>
        <Link href="/">
          <RestartQuizButton>처음으로</RestartQuizButton>
        </Link>
      </PageWrapper>
    </>
  );
}

export default ResultUI;
