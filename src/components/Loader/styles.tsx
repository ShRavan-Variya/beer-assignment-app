import Theme from '@/src/theme/Theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.overlay,
    shadowColor: Theme.colors.textColor1,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  viewLoader: {
    backgroundColor: Theme.colors.textColor5,
    height: Theme.responsiveSize.size75,
    width: Theme.responsiveSize.size75,
    borderRadius: Theme.responsiveSize.size8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
