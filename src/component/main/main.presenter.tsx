import {
  PageWrapper,
  Question,
  StartQuizButton,
  TextArea,
  UserNameInput,
} from "./main.style";
import Link from "next/link";
import { ChangeEvent } from "react";

interface IProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

function MainUI({ onChangeInput }: IProps) {
  return (
    <PageWrapper>
      <Question data-testid="WelcomeToQuiz">
        퀴즈의 세계에 오신 것을 환영합니다!
        <TextArea>당신의 이름을 입력해 주세요...</TextArea>
        <UserNameInput onChange={onChangeInput} />
        <Link href="/quiz">
          <StartQuizButton>퀴즈 시작하기</StartQuizButton>
        </Link>
      </Question>
    </PageWrapper>
  );
}

export default MainUI;
