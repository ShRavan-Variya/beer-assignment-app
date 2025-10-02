import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backgroundColor,
    paddingHorizontal: Theme.spacing.xlarge,
    paddingTop: Theme.spacing.xlarge * 2.8,
  },
  formContainer: {
    flex: 1,
    marginTop: Theme.spacing.medium,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.spacing.medium,
    paddingBottom: Theme.spacing.size50,
  },
  signUpText: {
    fontSize: Theme.fontSizes.medium,
    color: Theme.colors.textColor4,
  },
  signUpLink: {
    fontSize: Theme.fontSizes.medium,
    color: Theme.colors.textColor3,
    fontWeight: '600',
  },
});

export default styles;
