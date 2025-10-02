import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: Theme.responsiveSize.size24,
  },
  welcomeText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: 'bold',
    color: Theme.colors.textColor1,
    marginBottom: Theme.responsiveSize.size2,
  },
  subtitle: {
    fontSize: Theme.responsiveSize.size11,
    color: Theme.colors.textColor2,
    textAlign: 'center',
  },
});

export default styles;