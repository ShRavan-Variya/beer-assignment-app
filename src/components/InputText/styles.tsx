import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // marginBottom: Theme.responsiveSize.size10,
  },
  title: {
    fontSize: Theme.responsiveSize.size11,
    color: Theme.colors.textColor1,
    marginBottom: Theme.responsiveSize.size2,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.borderColor,
    borderRadius: Theme.responsiveSize.size8,
    backgroundColor: Theme.colors.backgroundColor,
    paddingVertical: Theme.responsiveSize.size5,
  },
  inputError: {
    borderColor: Theme.colors.errorColor,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: Theme.responsiveSize.size10,
    fontSize: Theme.responsiveSize.size11,
    color: Theme.colors.textColor1,
  },
  eyeButton: {
    paddingHorizontal: Theme.responsiveSize.size10,
  },
  eyeText: {
    fontSize: Theme.responsiveSize.size11,
  },
  errorText: {
    fontSize: Theme.responsiveSize.size10,
    color: Theme.colors.errorColor,
    marginTop: Theme.responsiveSize.size2,
  },
});

export default styles;