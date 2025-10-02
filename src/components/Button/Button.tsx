import Theme from '@/src/theme/Theme';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  viewMainStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const getButtonStyle = () => {
    switch (props.variant) {
      case 'primary':
        return props.disabled ? styles.primaryDisabled : styles.primary;
      case 'secondary':
        return props.disabled ? styles.secondaryDisabled : styles.secondary;
      case 'danger':
        return props.disabled ? styles.dangerDisabled : styles.danger;
      default:
        return styles.primary;
    }
  };

  const getTextStyle = () => {
    switch (props.variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'danger':
        return styles.dangerText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), props.viewMainStyle]}
      onPress={props.onPress}
      disabled={props.disabled || props.loading}
    >
      {props.loading ? (
        <ActivityIndicator 
          color={props.variant === 'primary' ? Theme.colors.textColor5 : Theme.colors.appColor} 
          size="small" 
        />
      ) : (
        // <Text style={[styles.buttonText, getTextStyle()]}>{props.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          {props.icon && <MaterialIcons name={props.icon} size={Theme.responsiveSize.size20} color={Theme.colors.textColor5} />} 
          <Text style={[styles.buttonText, getTextStyle(), props.textStyle]}>{props.title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;