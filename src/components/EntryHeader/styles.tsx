import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: Theme.spacing.xlarge,
  },
  welcomeText: {
    fontSize: Theme.fontSizes.large,
    fontWeight: 'bold',
    color: Theme.colors.textColor1,
    marginBottom: Theme.spacing.small,
  },
  subtitle: {
    fontSize: Theme.fontSizes.medium,
    color: Theme.colors.textColor2,
    textAlign: 'center',
  },
});

export default styles;