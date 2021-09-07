import { cleanup, render, screen } from "@testing-library/react";
import Result from "../pages/result";
import { Question, StartQuizButton } from "../src/component/main/main.style";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

describe("Should render the app without crashing", () => {
  it("Renders the page without crash", () => {
    render(<Result />);
  });

  it("renders homepage uncahged", () => {
    const tree = renderer.create(<Result />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
