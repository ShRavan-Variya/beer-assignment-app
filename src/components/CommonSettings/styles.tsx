import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.bgNew,
    paddingHorizontal: Theme.responsiveSize.size18,
    paddingVertical: Theme.responsiveSize.size13,
    marginVertical: Theme.responsiveSize.size5,
    borderRadius: Theme.responsiveSize.size13
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    marginLeft: Theme.responsiveSize.size8,
    fontSize: Theme.responsiveSize.size13,
    color: Theme.colors.textColor1,
    fontWeight: '600',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
});

export default styles;
