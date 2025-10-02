import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // marginBottom: Theme.spacing.medium,
  },
  title: {
    fontSize: Theme.fontSizes.medium,
    color: Theme.colors.textColor1,
    marginBottom: Theme.spacing.small,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.borderColor,
    borderRadius: Theme.borderRadius.medium,
    backgroundColor: Theme.colors.backgroundColor,
    paddingVertical: Theme.spacing.semiSmall,
  },
  inputError: {
    borderColor: Theme.colors.errorColor,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: Theme.spacing.medium,
    fontSize: Theme.fontSizes.medium,
    color: Theme.colors.textColor1,
  },
  eyeButton: {
    paddingHorizontal: Theme.spacing.medium,
  },
  eyeText: {
    fontSize: Theme.fontSizes.medium,
  },
  errorText: {
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.errorColor,
    marginTop: Theme.spacing.small,
  },
});

export default styles;