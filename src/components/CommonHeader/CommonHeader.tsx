import Theme from '@/src/theme/Theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface CommonHeaderProps {
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  showBackButton?: boolean;
  onBackPress?: () => void;
  onRightPress?: () => void;
}

const CommonHeader: React.FC<CommonHeaderProps> = (props) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (props.onBackPress) {
      props.onBackPress();
    } else {
      navigation.goBack();
    }
  };

  if (props.showBackButton) {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialIcons name="arrow-back" size={Theme.responsiveSize.size24} color="#333" />
        </TouchableOpacity>
        <Text style={[styles.title, {marginLeft: Theme.responsiveSize.size10}]} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
    )
  } else {
    return (
      <View style={[styles.headerContainer, {justifyContent: 'space-between'}]}>
        <View style={styles.leftSection}>
          <Image
            source={Theme.images.logo}
            style={{
              width: Theme.responsiveSize.size22,
              height: Theme.responsiveSize.size18,
            }}
          />
        </View>

        <View style={styles.centerSection}>
          <Text style={[styles.title, {textAlign: 'center'}]} numberOfLines={1}>
            {props.title}
          </Text>
        </View>

        <View style={styles.rightSection}>
          <TouchableOpacity onPress={props.onRightPress}>
            <MaterialIcons name="settings" size={Theme.responsiveSize.size24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

export default CommonHeader;