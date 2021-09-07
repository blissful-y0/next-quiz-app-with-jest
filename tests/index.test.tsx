import { cleanup, render, screen } from "@testing-library/react";
import Index from "../pages/index";
import { Question, StartQuizButton } from "../src/component/main/main.style";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Should render the app without crashing", () => {
  it("Renders the page without crash", () => {
    render(<Index />);
  });

  it("renders question heading correct", () => {
    render(<Question></Question>);
  });

  it("renders button correct", () => {
    render(<StartQuizButton>퀴즈 시작하기</StartQuizButton>);
  });

  it("renders homepage uncahged", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(cleanup);
