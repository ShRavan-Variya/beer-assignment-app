import Theme from '@/src/theme/Theme';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  button: {
    paddingVertical: Theme.responsiveSize.size10,
    borderRadius: Theme.responsiveSize.size8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Theme.responsiveSize.size2,
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
    fontSize: Theme.responsiveSize.size14,
    paddingVertical: Theme.responsiveSize.size2,
    fontWeight: '600',
  },
  primaryText: {
    color: Theme.colors.textColor5,
  },
  secondaryText: {
    color: Theme.colors.appColor,
  },
  danger: {
    backgroundColor: 'red',
  },
  dangerDisabled: {
    backgroundColor: '#ff9999',
  },
  dangerText: {
    color: Theme.colors.backgroundColor,
  },
});

export default styles;
