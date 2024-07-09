import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';

interface PostHeaderProps {
  author: string;
  timestamp: string;
  avatar: string | ImageSourcePropType;
}

const PostHeader: React.FC<PostHeaderProps> = ({ author, timestamp, avatar }) => {
  const avatarSource = typeof avatar === 'string' ? { uri: avatar } : avatar;

  return (
    <View style={styles.postHeader}>
      <View style={styles.postHeaderLeft}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={avatarSource} />
        </View>
        <View style={styles.postHeaderText}>
          <Text style={styles.postName}>{author}</Text>
          <Text style={styles.postDuration}>{timestamp}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.menuContainer}>
        {/* <MaterialCommunityIcons name="dots-vertical" size={27} /> */}
      </TouchableOpacity>
    </View>
  );
};

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export default PostHeader;