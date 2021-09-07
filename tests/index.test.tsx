import { render, screen } from "@testing-library/react";

import Index from "../pages/index";

describe("Should render the app without crashing", () => {
  it("Renders the page without crash", () => {
    render(<Index />);
  });
});
