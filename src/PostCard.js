import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "react-native-vector-icons";

const PostCard = ({ post, likeColor, commentColor, bookmarkColor, onCommentPress, onBookmarkPress  }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);

  const fullText =
    "If the shoemaker of the furniture doesn't meet up to the ideas of the man of war then there will be a battle between the bride and her tailor because she doesn't know how to cook the husband's meal to taste like the bunker in his boarding house compared to the burger in Wimpy's";
  const expandableText = isExpanded
    ? fullText
    : `${fullText.substring(0, 100)}...`;

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevLikeCount) => (liked ? prevLikeCount - 1 : prevLikeCount + 1))
  };

  
  const toggleBookmark = () => {
    setBookmark((prevBookmark) => !prevBookmark);
    if (onBookmarkPress) {
      onBookmarkPress(!bookmark);
    }
  };

  return (
    <View style={styles.postBox}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={post.avatar} />
          </View>

          <View style={styles.postHeaderText}>
            <Text style={styles.postName}>{post.author}</Text>
            <Text style={styles.postDuration}>{post.timestamp}</Text>
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
          {post.images.length === 1 && (
            <View style={styles.postPictureContainerRow}>
              <Image style={styles.postPicture} source={post.images[0]} />
            </View>
          )}

          {post.images.length === 2 && (
            <View style={styles.postPictureContainerRow}>
              {post.images.slice(0, 2).map((image, index) => (
                <Image
                  key={index}
                  style={[styles.postPicture, { flex: 1 }]}
                  source={image}
                />
              ))}
            </View>
          )}

          {post.images.length === 3 && (
            <>
              <View style={styles.postPictureContainerRow}>
                <Image style={styles.postPicture} source={post.images[0]} />
              </View>
              <View style={styles.postPictureContainerRow}>
                {post.images.slice(1, 3).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </View>
            </>
          )}

          {post.images.length === 4 && (
            <>
              <View style={styles.postPictureContainerRow}>
                <Image style={styles.postPicture} source={post.images[0]} />
              </View>
              <View style={styles.postPictureContainerRow}>
                {post.images.slice(1, 4).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </View>
            </>
          )}

          {post.images.length === 5 && (
            <>
              <View style={styles.postPictureContainerRow}>
                {post.images.slice(0, 2).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </View>
              <View style={styles.postPictureContainerRow}>
                {post.images.slice(2, 5).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </View>
            </>
          )}

          {post.images.length > 5 && (
            <>
              <View style={styles.postPictureContainerRow}>
                {post.images.slice(0, 2).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
              </View>
              <View style={styles.postPictureContainerRow}>
                {post.images.slice(2, 4).map((image, index) => (
                  <Image
                    key={index}
                    style={[styles.postPicture, { flex: 1 }]}
                    source={image}
                  />
                ))}
                <View style={styles.overlayContainer}>
                  <View style={styles.postPictureContainerRow}>
                    <Image style={styles.postPicture} source={post.images[4]} />
                  </View>
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>
                      +{post.images.length - 5}
                    </Text>
                  </View>
                </View>
              </View>
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
                color={liked ? likeColor : likeColor}
              />
            </TouchableOpacity>
            <Text style={styles.postActionText}>{likeCount}</Text>
          </View>

          <View style={styles.postAction}>
            <TouchableOpacity onPress={onCommentPress} style={{ marginTop: -4 }}>
              <FontAwesome name="comment-o" size={20} color={commentColor} />
            </TouchableOpacity>
            <Text style={styles.postActionText}>223</Text>
          </View>
        </View>

        <View style={styles.postActionRight}>
          <View style={styles.postAction}>
            <TouchableOpacity onPress={toggleBookmark}>
              <Ionicons
                name={bookmark ? "bookmark" : "bookmark-outline"}
                size={25}
                color={bookmark ? bookmarkColor : bookmarkColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
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
    height: 150,
    borderRadius: 10,
    marginRight: 5,
  },

  overlayContainer: {
    flex: 1,
    position: "relative",
    // marginRight: 5,
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


PostCard.defaultProps = {
    likeColor: "#403C9A",
    commentColor: "#403C9A",
    bookmarkColor: "#403C9A"
}

export default PostCard;
