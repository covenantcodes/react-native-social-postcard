import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PostCard from "../PostCard";

// Mock the vector icons
jest.mock("react-native-vector-icons/FontAwesome", () => "FontAwesome");
jest.mock("react-native-vector-icons/Ionicons", () => "Ionicons");

describe("PostCard", () => {
  const mockPost = {
    author: "Test Author",
    timestamp: "2h ago",
    avatar: { uri: "https://example.com/avatar.jpg" },
    images: [{ uri: "https://example.com/image1.jpg" }],
    fullText: "This is a test post with some content that should be displayed",
    likeCount: 5,
  };

  const mockProps = {
    post: mockPost,
    colors: {
      likeFilledColor: "red",
      likeOutlineColor: "grey",
      commentColor: "grey",
      bookmarkFilledColor: "blue",
      bookmarkOutlineColor: "grey",
    },
    commentCount: 10,
    onCommentPress: jest.fn(),
    onBookmarkPress: jest.fn(),
    onPicturePress: jest.fn(),
  };

  it("renders correctly with all props", () => {
    const { getByText } = render(<PostCard {...mockProps} />);

    // Check if author name and timestamp are rendered
    expect(getByText("Test Author")).toBeTruthy();
    expect(getByText("2h ago")).toBeTruthy();

    // Check if post content is rendered
    expect(getByText(/This is a test post/)).toBeTruthy();

    // Check if like and comment counts are rendered
    expect(getByText("5")).toBeTruthy();
    expect(getByText("10")).toBeTruthy();
  });

  it("calls onPicturePress when an image is pressed", () => {
    const { getByTestId } = render(<PostCard {...mockProps} />);

    // Add testID to the Pressable component in PostContent.tsx for this test
    fireEvent.press(getByTestId("post-image-0"));

    expect(mockProps.onPicturePress).toHaveBeenCalledWith(mockPost.images[0]);
  });

  it("increments like count when like button is pressed", () => {
    const { getByTestId, getByText } = render(<PostCard {...mockProps} />);

    // Add testID to the like button in PostActions.tsx for this test
    fireEvent.press(getByTestId("like-button"));

    // Initial count is 5, should be 6 after clicking
    expect(getByText("6")).toBeTruthy();
  });

  it("calls onCommentPress when comment button is pressed", () => {
    const { getByTestId } = render(<PostCard {...mockProps} />);

    // Add testID to the comment button in PostActions.tsx for this test
    fireEvent.press(getByTestId("comment-button"));

    expect(mockProps.onCommentPress).toHaveBeenCalled();
  });

  it("calls onBookmarkPress when bookmark button is pressed", () => {
    const { getByTestId } = render(<PostCard {...mockProps} />);

    // Add testID to the bookmark button in PostActions.tsx for this test
    fireEvent.press(getByTestId("bookmark-button"));

    expect(mockProps.onBookmarkPress).toHaveBeenCalledWith(true);
  });
});
