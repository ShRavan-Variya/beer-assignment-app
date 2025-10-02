import Theme from '@/src/theme/Theme';
import React from 'react';
import { ActivityIndicator, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  viewMainStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = (props) => {
  const getButtonStyle = () => {
    switch (props.variant) {
      case 'primary':
        return props.disabled ? styles.primaryDisabled : styles.primary;
      case 'secondary':
        return props.disabled ? styles.secondaryDisabled : styles.secondary;
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
        <Text style={[styles.buttonText, getTextStyle()]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;