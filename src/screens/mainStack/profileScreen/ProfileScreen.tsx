import { Button } from '@/src/components/Button';
import { CommonSettings } from '@/src/components/CommonSettings';
import Theme from '@/src/theme/Theme';
import { useToast } from 'expo-toast';
import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const ProfileScreen: React.FC = (props: any) => {
  const toast = useToast();
  const logout = () => props.navigation.replace('Login');

  return (
    <SafeAreaView style={styles.viewMainContainer}>
      <Image source={Theme.images.logo} style={styles.imageMain} />
      <View style={styles.viewContainer}>
        <CommonSettings
          title='Profile'
          leftIcon='account-circle'
          onPress={() => {
            toast.show("This functionality is not implemented!");
          }}
        />
        <CommonSettings
          title='Notifications'
          leftIcon='circle-notifications'
          onPress={() => {
            toast.show("This functionality is not implemented!");
          }}
        />
        <CommonSettings
          title='About'
          leftIcon='question-mark'
          onPress={() => {
            toast.show("This functionality is not implemented!");
          }}
        />
      </View>
      <Button
        title="Logout"
        onPress={logout}
        variant="danger"
        icon={"logout"}
        textStyle={{marginLeft: Theme.responsiveSize.size8}}
        viewMainStyle={{ marginVertical: Theme.responsiveSize.size24 }}
      />
    </SafeAreaView>
  );
}

export default ProfileScreen;
