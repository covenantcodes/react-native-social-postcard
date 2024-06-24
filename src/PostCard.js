import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { Ionicons, FontAwesome } from "react-native-vector-icons";
import PropTypes from "prop-types";

const PostCard = ({
  post,
  likeOutlineColor = "#403C9A",
  likeFilledColor = "#FF0000",
  commentColor = "#403C9A",
  bookmarkOutlineColor = "#403C9A",
  bookmarkFilledColor = "#0000FF",
  commentCount,
  onCommentPress,
  onBookmarkPress,
  onPicturePress
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);
  const { author, timestamp, avatar, images, fullText } = post;

  const expandableText = isExpanded
    ? fullText
    : `${fullText.substring(0, 100)}...`;

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevLikeCount) =>
      prevLiked ? prevLikeCount - 1 : prevLikeCount + 1
    );
  };

  const handleBookmark = () => {
    const newBookmark = !bookmark;
    setBookmark(newBookmark);
    if (onBookmarkPress) {
      onBookmarkPress(newBookmark);
    }
  };


  return (
    <View style={styles.postBox}>
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
      <View style={styles.postContent}>
        <View style={styles.postContentTextContainer}>
          <Text style={styles.postContentText}>{expandableText}</Text>
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={styles.postContentMore}>
              {isExpanded ? "Less" : "More"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.postPictureContainer}>
          {images.length === 1 && (
            <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images[0])}>
              <Image style={styles.postPicture} source={images[0]} />
            </Pressable>
          )}
          {images.length === 2 && (
            <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
              {images.slice(0, 2).map((image, index) => (
                <Image
                  key={index}
                  style={[styles.postPicture, { flex: 1 }]}
                  source={image}
                />
              ))}
            </Pressable>
          )}
          {images.length === 3 && (
            <>
              <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                <Image style={styles.postPicture} source={images[0]} />
              </Pressable>
              <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                {images.slice(1, 3).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </Pressable>
            </>
          )}
          {images.length === 4 && (
            <>
              <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                <Image style={styles.postPicture} source={images[0]} />
              </Pressable>
              <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                {images.slice(1, 4).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </Pressable>
            </>
          )}
          {images.length === 5 && (
            <>
              <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                {images.slice(0, 2).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </Pressable>
              <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                {images.slice(2, 5).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </Pressable>
            </>
          )}
          {images.length > 5 && (
            <>
              <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                {images.slice(0, 2).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </Pressable>
              <Pressable style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                {images.slice(2, 4).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
                <TouchableOpacity style={styles.overlayContainer}>
                  <TouchableOpacity style={styles.postPictureContainerRow} onPress={()=>onPicturePress(images)}>
                    <Image style={styles.postPicture} source={images[4]} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.overlay}>
                    <Text style={styles.overlayText}>+{images.length - 5}</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </Pressable>
            </>
          )}
        </View>
      </View>
      <View style={styles.postActionBox}>
        <View style={styles.postActionLeft}>
          <View style={styles.postAction}>
            <TouchableOpacity onPress={toggleLike}>
              <Ionicons
                name={liked ? "heart" : "heart-outline"}
                size={25}
                color={liked ? likeFilledColor : likeOutlineColor}
              />
            </TouchableOpacity>
            <Text style={styles.postActionText}>{likeCount}</Text>
          </View>
          <View style={styles.postAction}>
            <TouchableOpacity
              onPress={onCommentPress}
              style={{ marginTop: -4 }}
            >
              <FontAwesome name="comment-o" size={20} color={commentColor} />
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
                color={bookmark ? bookmarkFilledColor : bookmarkOutlineColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    images: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    fullText: PropTypes.string.isRequired, // Adding fullText as required prop
  }).isRequired,
  likeOutlineColor: PropTypes.string,
  likeFilledColor: PropTypes.string,
  commentColor: PropTypes.string,
  bookmarkOutlineColor: PropTypes.string,
  bookmarkFilledColor: PropTypes.string,
  commentCount: PropTypes.number,
  onCommentPress: PropTypes.func,
  onBookmarkPress: PropTypes.func,
  onPicturePress: PropTypes.func,
};

const styles = StyleSheet.create({
  postBox: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    height: 50,
    width: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postHeaderText: {
    marginLeft: 10,
  },
  postName: {
    fontFamily: "PoppinsSemiBold",
  },
  postDuration: {
    fontFamily: "PoppinsRegular",
    fontSize: 10,
    color: "#808080",
  },
  postContentTextContainer: {
    paddingVertical: 5,
  },
  postContentText: {
    fontFamily: "PoppinsRegular",
    textAlign: "justify",
  },
  postContentMore: {
    color: "#403C9A",
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
  },
  postPictureContainer: {
    marginBottom: 10,
  },
  postPictureContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  postPicture: {
    flex: 1,
    height: 300,
    borderRadius: 10,
    marginRight: 5,
  },
  overlayContainer: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "97%",
    height: "94%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  overlayText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  postActionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  postActionLeft: {
    flexDirection: "row",
  },
  postAction: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  postActionText: {
    marginLeft: 5,
    fontFamily: "PoppinsMedium",
    fontSize: 15,
    color: "#403C9A",
  },
});

export default PostCard;
