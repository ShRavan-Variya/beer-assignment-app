import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewMainContainer: {
    flex: 1,
    padding: Theme.responsiveSize.size20,
    backgroundColor: Theme.colors.backgroundColor
  },
  imageMain: {
    alignSelf: "center",
    width: Theme.responsiveSize.size100,
    height: Theme.responsiveSize.size75,
    marginVertical: Theme.responsiveSize.size20
  },
  viewContainer: {
    flexGrow: 1,
    marginTop: Theme.responsiveSize.size22
  },
});

export default styles;
