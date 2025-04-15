import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PostActions from "../PostActions";

describe("PostActions", () => {
  const mockProps = {
    liked: false,
    likeCount: 5,
    toggleLike: jest.fn(),
    onCommentPress: jest.fn(),
    commentCount: 10,
    handleBookmark: jest.fn(),
    bookmark: false,
    colors: {
      likeFilledColor: "red",
      likeOutlineColor: "grey",
      commentColor: "grey",
      bookmarkFilledColor: "blue",
      bookmarkOutlineColor: "grey",
    },
  };

  it("renders correctly with like and comment counts", () => {
    const { getByText } = render(<PostActions {...mockProps} />);

    expect(getByText("5")).toBeTruthy();
    expect(getByText("10")).toBeTruthy();
  });

  it("calls toggleLike when like button is pressed", () => {
    const { getByTestId } = render(<PostActions {...mockProps} />);

    fireEvent.press(getByTestId("like-button"));

    expect(mockProps.toggleLike).toHaveBeenCalled();
  });

  it("calls onCommentPress when comment button is pressed", () => {
    const { getByTestId } = render(<PostActions {...mockProps} />);

    fireEvent.press(getByTestId("comment-button"));

    expect(mockProps.onCommentPress).toHaveBeenCalled();
  });

  it("calls handleBookmark when bookmark button is pressed", () => {
    const { getByTestId } = render(<PostActions {...mockProps} />);

    fireEvent.press(getByTestId("bookmark-button"));

    expect(mockProps.handleBookmark).toHaveBeenCalled();
  });
});
