import  { useState } from 'react';
import { View } from 'react-native';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostActions from './PostActions';
import styles from './styles';

interface PostCardProps {
  post: {
    author: string;
    timestamp: string;
    avatar: string | object;
    images: Array<string | object>;
    fullText: string;
    likeCount?: number; // Optional if default is provided elsewhere
  };
  colors: {
    [key: string]: string;
  };
  commentCount: number;
  onCommentPress: () => void;
  onBookmarkPress: (newBookmark: boolean) => void;
  onPicturePress: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  colors,
  commentCount,
  onCommentPress,
  onBookmarkPress,
  onPicturePress,
}) => {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked); // Correctly use functional update form
    setLikeCount((prevLikeCount) => (liked ? prevLikeCount - 1 : prevLikeCount + 1)); // Use `liked` instead of `prevLiked`
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

// PostCard.propTypes = {
//   post: PropTypes.shape({
//     author: PropTypes.string.isRequired,
//     timestamp: PropTypes.string.isRequired,
//     avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
//     images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
//     fullText: PropTypes.string.isRequired,
//   }).isRequired,
//   colors: PropTypes.object.isRequired,
//   commentCount: PropTypes.number.isRequired,
//   onCommentPress: PropTypes.func.isRequired,
//   onBookmarkPress: PropTypes.func.isRequired,
//   onPicturePress: PropTypes.func.isRequired,
// };

export default PostCard;
