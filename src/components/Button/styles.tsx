import Theme from '@/src/theme/Theme';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  button: {
    paddingVertical: Theme.spacing.medium,
    borderRadius: Theme.borderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Theme.spacing.small,
  },
  primary: {
    backgroundColor: Theme.colors.appColor,
  },
  primaryDisabled: {
    backgroundColor: Theme.colors.textColor2,
  },
  secondary: {
    backgroundColor: Theme.colors.transparent,
    borderWidth: 1,
    borderColor: Theme.colors.appColor,
  },
  secondaryDisabled: {
    backgroundColor: Theme.colors.transparent,
    borderWidth: 1,
    borderColor: Theme.colors.textColor2,
  },
  buttonText: {
    fontSize: Theme.fontSizes.medium,
    fontWeight: '600',
  },
  primaryText: {
    color: Theme.colors.textColor5,
  },
  secondaryText: {
    color: Theme.colors.appColor,
  },
});

export default styles;
