import { render, screen, cleanup } from "@testing-library/react";
import { Question, StartQuizButton } from "../src/component/main/main.style";
import "@testing-library/jest-dom/extend-expect";
import { createSerializer } from "@emotion/jest";
import renderer from "react-test-renderer";
import QuizPage from "../pages/quiz";
import { API_URL } from "../src/component/quiz/quiz.query";

describe("Should render the app without crashing", () => {
  it("Renders the page without crash", () => {
    render(<QuizPage />);
  });

  it("renders homepage unchaged", () => {
    const tree = renderer.create(<QuizPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
