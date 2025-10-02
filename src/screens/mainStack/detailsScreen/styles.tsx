import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewEmpty: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  imageMain: {
    width: "50%",
    height: 220,
    alignSelf: "center",
    marginVertical: Theme.responsiveSize.size20
  },
  textName: {
    fontSize: Theme.responsiveSize.size20,
    fontWeight: "800",
    textAlign: "center"
  },
  testTag: {
    textAlign: "center",
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size13,
    marginTop: Theme.responsiveSize.size5
  },
  textDescription: {
    color: Theme.colors.textColor4,
    fontSize: Theme.responsiveSize.size13,
    marginTop: Theme.responsiveSize.size15,
    lineHeight: Theme.responsiveSize.size20,
  },
  titleSection: {
    color: Theme.colors.textColor1,
    marginTop: Theme.responsiveSize.size20,
    marginBottom: Theme.responsiveSize.size8,
    fontSize: Theme.responsiveSize.size14,
    fontWeight: "700",
  },
  textCommon1: {
    color: Theme.colors.textColor4,
    fontSize: Theme.responsiveSize.size13,
    marginVertical: Theme.responsiveSize.size3
  },
  textCommon2: {
    fontWeight: '800',
  },
});

export default styles;
