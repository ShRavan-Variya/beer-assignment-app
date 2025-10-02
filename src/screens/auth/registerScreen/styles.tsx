import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backgroundColor,
    paddingHorizontal: Theme.responsiveSize.size24,
    paddingTop: Theme.responsiveSize.size24 * 2.8,
  },
  formContainer: {
    flex: 1,
    marginTop: Theme.responsiveSize.size10,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.responsiveSize.size10,
    paddingBottom: Theme.responsiveSize.size50,
  },
  signUpText: {
    fontSize: Theme.responsiveSize.size11,
    color: Theme.colors.textColor4,
  },
  signUpLink: {
    fontSize: Theme.responsiveSize.size11,
    color: Theme.colors.textColor3,
    fontWeight: '600',
  },
});

export default styles;
