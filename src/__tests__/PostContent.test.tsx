import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PostContent from "../PostContent";

describe("PostContent", () => {
  const mockImages = [{ uri: "https://example.com/image1.jpg" }];
  const mockOnPicturePress = jest.fn();

  it('renders short text without "More" button', () => {
    const shortText = "This is a short text.";
    const { queryByText } = render(
      <PostContent
        fullText={shortText}
        images={mockImages}
        onPicturePress={mockOnPicturePress}
      />
    );

    expect(queryByText("More")).toBeNull();
    expect(queryByText(shortText)).toBeTruthy();
  });

  it('renders long text with "More" button and expands when clicked', () => {
    const longText =
      "This is a very long text that exceeds the 100 character limit and should trigger the More button to appear. We need to make it really long to test properly.";

    const { getByText } = render(
      <PostContent
        fullText={longText}
        images={mockImages}
        onPicturePress={mockOnPicturePress}
      />
    );

    // Check that text is truncated
    expect(getByText(/This is a very long text/)).toBeTruthy();

    // Check that "More" button exists
    const moreButton = getByText("More");
    expect(moreButton).toBeTruthy();

    // Click "More" button
    fireEvent.press(moreButton);

    // Check that full text is now visible and "Less" button appears
    expect(getByText(longText)).toBeTruthy();
    expect(getByText("Less")).toBeTruthy();
  });

  it("calls onPicturePress when image is pressed", () => {
    const { getByTestId } = render(
      <PostContent
        fullText="Some text"
        images={mockImages}
        onPicturePress={mockOnPicturePress}
      />
    );

    fireEvent.press(getByTestId("post-image-0"));

    expect(mockOnPicturePress).toHaveBeenCalledWith(mockImages[0]);
  });
});
