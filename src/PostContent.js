import { useState } from 'react';
import { View } from "react-native";
import PropTypes from "prop-types";
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostActions from './PostActions';
import styles from './styles';

const PostCard = ({ post, colors, commentCount, onCommentPress, onBookmarkPress, onPicturePress }) => {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevLikeCount) => (prevLiked ? prevLikeCount - 1 : prevLikeCount + 1));
  };

  const handleBookmark = () => {
    const newBookmark = !bookmark;
    setBookmark(newBookmark);
    if (onBookmarkPress) onBookmarkPress(newBookmark);
  };

  return (
    <View style={styles.postBox}>
      <PostHeader author={post.author} timestamp={post.timestamp} avatar={post.avatar} />
      <PostContent fullText={post.fullText} images={post.images} onPicturePress={onPicturePress} />
      <PostActions
        liked={liked}
        likeCount={likeCount}
        toggleLike={toggleLike}
        onCommentPress={onCommentPress}
        commentCount={commentCount}
        handleBookmark={handleBookmark}
        bookmark={bookmark}
        colors={colors}
      />
    </View>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
    fullText: PropTypes.string.isRequired,
  }).isRequired,
  likeCount: PropTypes.number.isRequired,
  colors: PropTypes.object.isRequired,
  commentCount: PropTypes.number.isRequired,
  onCommentPress: PropTypes.func.isRequired,
  onBookmarkPress: PropTypes.func.isRequired,
  onPicturePress: PropTypes.func.isRequired,
};

export default PostCard;
