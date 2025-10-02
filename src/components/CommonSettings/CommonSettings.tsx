import Theme from '@/src/theme/Theme';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface CommonSettingsProps {
  title: string;
  leftIcon: any;
  onPress?: () => void;
}

const CommonSettings: React.FC<CommonSettingsProps> = (props) => {
  return (
    <TouchableOpacity style={styles.headerContainer} onPress={props.onPress}>
      <View style={styles.leftSection}>
        <MaterialIcons name={props.leftIcon} size={Theme.responsiveSize.size20} color="#333" />
        <Text style={styles.textTitle}>{props.title}</Text>
      </View>

      <View style={styles.rightSection}>
        <MaterialIcons name="chevron-right" size={Theme.responsiveSize.size20} color="#333" />
      </View>
    </TouchableOpacity>
  )
};

export default CommonSettings;