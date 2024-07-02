import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, ImageSourcePropType } from 'react-native';
import styles from './styles';

interface PostContentProps {
  fullText: string;
  images: Array<string | ImageSourcePropType>;
  onPicturePress: (image: string | ImageSourcePropType) => void;
}

const PostContent: React.FC<PostContentProps> = ({ fullText, images = [], onPicturePress }) => {  
  const [isExpanded, setIsExpanded] = useState(false);
  const expandableText = isExpanded ? fullText : `${fullText.substring(0, 100)}...`;

  const imageSources = images.map(image => (typeof image === 'string' ? { uri: image } : image));

  return (
    <View>
      <View style={styles.postContentTextContainer}>
        <Text style={styles.postContentText}>{expandableText}</Text>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text style={styles.postContentMore}>{isExpanded ? "Less" : "More"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postPictureContainer}>
        {imageSources.length === 1 && (
          <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[0])}>
            <Image style={styles.postPicture} source={imageSources[0]} />
          </Pressable>
        )}
        {imageSources.length === 2 && (
          <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[0])}>
            {imageSources.slice(0, 2).map((image, index) => (
              <Image key={index} style={[styles.postPicture, { flex: 1 }]} source={image} />
            ))}
          </Pressable>
        )}
        {imageSources.length === 3 && (
          <>
            <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[0])}>
              <Image style={styles.postPicture} source={imageSources[0]} />
            </Pressable>
            <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[1])}>
              {imageSources.slice(1, 3).map((image, index) => (
                <Image key={index} style={[styles.postPicture, { flex: 1 }]} source={image} />
              ))}
            </Pressable>
          </>
        )}
        {imageSources.length === 4 && (
          <>
            <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[0])}>
              <Image style={styles.postPicture} source={imageSources[0]} />
            </Pressable>
            <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[1])}>
              {imageSources.slice(1, 4).map((image, index) => (
                <Image key={index} style={[styles.postPicture, { flex: 1 }]} source={image} />
              ))}
            </Pressable>
          </>
        )}
        {imageSources.length === 5 && (
          <>
            <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[0])}>
              {imageSources.slice(0, 2).map((image, index) => (
                <Image key={index} style={[styles.postPicture, { flex: 1 }]} source={image} />
              ))}
            </Pressable>
            <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[2])}>
              {imageSources.slice(2, 5).map((image, index) => (
                <Image key={index} style={[styles.postPicture, { flex: 1 }]} source={image} />
              ))}
            </Pressable>
          </>
        )}
        {imageSources.length > 5 && (
          <>
            <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[0])}>
              {imageSources.slice(0, 2).map((image, index) => (
                <Image key={index} style={[styles.postPicture, { flex: 1 }]} source={image} />
              ))}
            </Pressable>
            <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[2])}>
              {imageSources.slice(2, 4).map((image, index) => (
                <Image key={index} style={[styles.postPicture, { flex: 1 }]} source={image} />
              ))}
              <View style={styles.overlayContainer}>
                <Pressable style={styles.postPictureContainerRow} onPress={() => onPicturePress(imageSources[4])}>
                  <Image style={styles.postPicture} source={imageSources[4]} />
                </Pressable>
                <View style={styles.overlay}>
                  <Text style={styles.overlayText}>+{images.length - 5}</Text>
                </View>
              </View>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default PostContent;
