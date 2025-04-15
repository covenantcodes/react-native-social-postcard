import React from "react";
import { render } from "@testing-library/react-native";
import PostHeader from "../PostHeader";

describe("PostHeader", () => {
  it("renders correctly with props", () => {
    const props = {
      author: "John Doe",
      timestamp: "3h ago",
      avatar: { uri: "https://example.com/avatar.jpg" },
    };

    const { getByText } = render(<PostHeader {...props} />);

    expect(getByText("John Doe")).toBeTruthy();
    expect(getByText("3h ago")).toBeTruthy();
  });
});
