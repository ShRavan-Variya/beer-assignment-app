import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Theme.responsiveSize.size18,
    backgroundColor: Theme.colors.backgroundColor,
    paddingVertical: Theme.responsiveSize.size8,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.borderColor1,
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerSection: {
    flex: 2,
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: Theme.responsiveSize.size20,
    fontWeight: '600',
    color: Theme.colors.textColor1,
  },
  iconButton: {
    padding: Theme.responsiveSize.size2,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: Theme.responsiveSize.size24,
    color: Theme.colors.textColor1,
  },
  placeholder: {
    width: 40,
  },
});

export default styles;
