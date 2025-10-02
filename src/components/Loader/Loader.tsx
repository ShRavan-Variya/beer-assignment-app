import Theme from '@/src/theme/Theme';
import React, { FC } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = props => {
  return (
    <Modal
      visible={props.isLoading}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <SafeAreaView style={styles.overlay}>
        <View style={styles.viewLoader}>
          <ActivityIndicator size="large" color={Theme.colors.appColor} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Loader;
