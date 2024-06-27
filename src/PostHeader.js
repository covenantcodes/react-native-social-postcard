import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from './styles';

const PostHeader = ({ author, timestamp, avatar }) => (
  <View style={styles.postHeader}>
    <View style={styles.postHeaderLeft}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={avatar} />
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

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default PostHeader;
