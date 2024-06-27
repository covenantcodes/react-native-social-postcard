import { StyleSheet } from 'react-native';

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

export default styles;
