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
    paddingTop: Theme.spacing.xlarge * 5,
  },
  formContainer: {
    flex: 1,
    marginTop: Theme.spacing.medium,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: Theme.spacing.large,
    marginTop: Theme.spacing.semiSmall,
  },
  forgotPasswordText: {
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.textColor3,
    fontWeight: '500',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.spacing.medium,
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
