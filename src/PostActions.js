import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "react-native-vector-icons";
import PropTypes from "prop-types";
import styles from './styles';

const PostActions = ({ liked, likeCount, toggleLike, onCommentPress, commentCount, handleBookmark, bookmark, colors }) => (
  <View style={styles.postActionBox}>
    <View style={styles.postActionLeft}>
      <View style={styles.postAction}>
        <TouchableOpacity onPress={toggleLike}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={25}
            color={liked ? colors.likeFilledColor : colors.likeOutlineColor}
          />
        </TouchableOpacity>
        <Text style={styles.postActionText}>{likeCount}</Text>
      </View>
      <View style={styles.postAction}>
        <TouchableOpacity onPress={onCommentPress} style={{ marginTop: -4 }}>
          <FontAwesome name="comment-o" size={20} color={colors.commentColor} />
        </TouchableOpacity>
        <Text style={styles.postActionText}>{commentCount}</Text>
      </View>
    </View>
    <View style={styles.postActionRight}>
      <View style={styles.postAction}>
        <TouchableOpacity onPress={handleBookmark}>
          <Ionicons
            name={bookmark ? "bookmark" : "bookmark-outline"}
            size={25}
            color={bookmark ? colors.bookmarkFilledColor : colors.bookmarkOutlineColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

PostActions.propTypes = {
  liked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  toggleLike: PropTypes.func.isRequired,
  onCommentPress: PropTypes.func.isRequired,
  commentCount: PropTypes.number.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired,
  colors: PropTypes.object.isRequired,
};

export default PostActions;
