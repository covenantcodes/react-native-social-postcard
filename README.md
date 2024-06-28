# React Native Social PostCard

A customizable and interactive social media postcard component for your React Native Social Media Applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the necessary dependencies using npm or yarn:

```bash
npm install react-native-vector-icons prop-types
# or
yarn add react-native-vector-icons prop-types
```

## Usage

Import and use the PostCard component in your React Native project:

```Javascript
import { SafeAreaView, FlatList, StyleSheet, Platform} from "react-native";
import { PostCard } from 'react-native-social-postcard';

const posts = [
  {
    id: "1",
    author: "Adebayo Emmanuel",
    timestamp: "5h Ago",
    avatar: require("./assets/profile.jpg"),
    images: [require("./assets/post1.jpg"), require("./assets/post2.jpg")],
    fullText: "If the shoemaker of the furniture doesn't meet up to the ideas of the man of war then there will be a battle between the bride and her tailor because she doesn't know how to cook the husband's meal to taste like the bunker in his boarding house compared to the burger in Wimpy's"
  },
  {
    id: "2",
    author: "Adebayo Emmanuel",
    timestamp: "5h Ago",
    avatar: require("./assets/profile.jpg"),
    images: [
      require("./assets/post1.jpg"),
    ],

    fullText: "If the shoemaker of a battle between the bride and her tailor because she doesn't know how to cook ts boarding house compared to the burger in Wimpy's"
  },

  {
    id: "3",
    author: "Adebayo Emmanuel",
    timestamp: "5h Ago",
    avatar: require("./assets/profile.jpg"),
    images: [
      require("./assets/post1.jpg"),
      require("./assets/post2.jpg"),
      require("./assets/post3.jpg"),
      require("./assets/post4.jpeg"),
      require("./assets/post5.jpg"),
      require("./assets/post1.jpg"),
    ],
    fullText: "If the shoemaker of the furniture doesn't meet up to the ideas of the man of war then there will be a battle between the bride and her tailor because she doesn't know how to cook the husband's meal to taste like the bunker in his boarding house compared to the burger in Wimpy's"
  },
];

const handleCommentPress = () => {
  // Handle comment press, e.g., navigate to a comments screen
};

const handleBookmarkPress = (isBookmarked) => {
  // Handle bookmark toggle e.g., save post to profile
};

const handlePicturePress = (image) => {
  console.log("Now Night rituals")
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            likeOutlineColor="#000000"
            likeColor="#FF0000"
            commentColor="#000000"
            bookmarkOutlineColor="#000000"
            bookmarkColor="#0000FF"
            commentCount={100}
            onCommentPress={handleCommentPress}
            onBookmarkPress={handleBookmarkPress}
            onPicturePress={handlePicturePress}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "#fff",
  },
});

export default App;

```


## Props
### PostCard
The `PostCard` component accepts the following props:

| Prop | Type | Required | Description |
|------|------| --------| ------|
|post| object |Yes |An object containing post details. See the shape below|
|colors| object| No | An object containing color settings for like, comment and bookmark icons|
|commentCount| number | Yes | The number of comments on the post|
|onCommentPress| function | Yes | Function to call when the comment button is pressed|
|onBookmarkPress| function | Yes | Function to call when the bookmark icon is pressed|
|onPicturePress| function | Yes | Function to call when an image is pressed |

### post

The `post` object should have the following shape: 
```
{
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  fullText: PropTypes.string.isRequired,
  likeCount: PropTypes.number
}
```
### colors

The colors object have the following keys:

|Key| Type|Required| Default|Description|
|-----|-----|-----|------|-----|
|likeOutlineColor| string | No| "#403C9A" | Color for the outline of the like icon.|
|likeFilledColor| string | No| 	"#FF0000" | Color for the filled like icon.|
|commentColor| string | No| "#403C9A" | 	Color for the comment icon.|
|bookmarkOutlineColor| string | No| "#403C9A" | 	Color for the outline of the bookmark icon.|
|bookmarkFilledColor| string | No| "#0000FF" | Color for the filled bookmark icon.|


## Components

### PostHeader

A component that renders the header section of the post, displaying the author's name, time the post was made and avatar

### Props

|Prop| Type| Required| Description|
|-------| -------- | ------- | -----|
|author| string | Yes | The author's name|
| timestamp | string | Yes | The timestamp of the post |
| avatar | object | Yes | The avatar image source. |


### PostContent
A component to render the main content of the post, including expandable text and images.
### Props
|Prop| Type| Required| Description|
|-------| -------- | ------- | -----|
|fullText| string | Yes | Full text of the post|
| images | string | Yes | The timestamp of the post |
| onPicturePress | object | Yes | The avatar image source. |

### PostActions
A component to render the action buttons for the post, including like, comment, and bookmark actions.

|Prop| Type| Required| Description|
|-------| -------- | ------- | -----|
|liked| bool | Yes | Boolean indicating whether the post is liked.|
| likeCount | number | Yes | The number of likes on the post |
| toogleLike | function | Yes | Function to call when the like button is pressed |
| onCommentPress | function | Yes | Function to call when the comment button is pressed |
| handleBookMark | function | Yes | Function to call when the bookmar button is pressed |
| commentCount | number | Yes | The number of comments on the post |
| bookmark | bool | Yes | Boolean indicating whether the post is bookmarked |
| colors | object | Yes | An object containing color settings |

## Author
[Github](https://github.com/covenantcodes) [LinkedIn](https://www.linkedin.com/in/covenantifeoluwa) [Medium](https://medium.com/@covenantcodes)

## Contributions
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.

```

This `README.md` provides a comprehensive guide to using and understanding your `PostCard` component, including installation instructions, usage examples, prop definitions, and information about the subcomponents and styling.

```

