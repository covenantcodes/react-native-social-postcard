import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer:{
      paddingHorizontal: 8,
  }, 

  postBox: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 5,
    borderRadius: 15,
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
    // fontFamily: "PoppinsSemiBold",
    fontWeight: "bold"
  },
  postDuration: {
    // fontFamily: "PoppinsRegular",
    fontSize: 10,
    color: "#808080",
  },

  
  postContentTextContainer: {
    paddingVertical: 5,
  },
  postContentText: {
    // fontFamily: "PoppinsRegular",
    textAlign: "justify",
  },
  postContentMore: {
    color: "#403C9A",
    // fontFamily: "PoppinsSemiBold",
    fontWeight: "bold",
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
    height: 200,
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
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postActionLeft: {
    flexDirection: "row",
  },
  postAction: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  postActionText: {
    marginLeft: 5,
    // fontFamily: "PoppinsMedium",
    fontWeight: "bold",
    fontSize: 15,
    color: "#403C9A",
  },
});

export default styles;
