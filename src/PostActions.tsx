import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface PostActionsProps {
  liked: boolean;
  likeCount: number;
  toggleLike: () => void;
  onCommentPress: () => void;
  commentCount: number;
  handleBookmark: () => void;
  bookmark: boolean;
  colors?: {
    likeFilledColor?: string;
    likeOutlineColor?: string;
    commentColor?: string;
    bookmarkFilledColor?: string;
    bookmarkOutlineColor?: string;
  };
}

const PostActions: React.FC<PostActionsProps> = ({
  liked,
  likeCount,
  toggleLike,
  onCommentPress,
  commentCount,
  handleBookmark,
  bookmark,
  colors = {},
}) => {
  const {
    likeFilledColor = 'red',
    likeOutlineColor = 'grey',
    commentColor = 'grey',
    bookmarkFilledColor = 'blue',
    bookmarkOutlineColor = 'grey',
  } = colors;

  return (
    <View style={styles.postActionBox}>
      <View style={styles.postActionLeft}>
        <View style={styles.postAction}>
          <TouchableOpacity onPress={toggleLike}>
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={25}
              color={liked ? likeFilledColor : likeOutlineColor}
            />
          </TouchableOpacity>
          <Text style={styles.postActionText}>{likeCount}</Text>
        </View>
        <View style={styles.postAction}>
          <TouchableOpacity onPress={onCommentPress} style={{ marginTop: -4 }}>
            <FontAwesome name="comment-o" size={20} color={commentColor} />
          </TouchableOpacity>
          <Text style={styles.postActionText}>{commentCount}</Text>
        </View>
      </View>
      <View style={styles.postActionRight}>
        <View style={styles.postAction}>
          <TouchableOpacity onPress={handleBookmark}>
            <Ionicons
              name={bookmark ? 'bookmark' : 'bookmark-outline'}
              size={25}
              color={bookmark ? bookmarkFilledColor : bookmarkOutlineColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostActions;
