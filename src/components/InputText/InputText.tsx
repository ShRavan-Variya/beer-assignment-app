import Theme from '@/src/theme/Theme';
import React, { useState } from 'react';
import { StyleProp, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';

interface InputTextProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  mainViewStyle?: StyleProp<ViewStyle>;
}

const InputText: React.FC<InputTextProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!props.secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, props.mainViewStyle]}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={[styles.inputContainer, props.error ? styles.inputError : null]}>
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          placeholderTextColor={Theme.colors.textColor2}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry && !isPasswordVisible}
          autoCapitalize={props.autoCapitalize}
          keyboardType={props.keyboardType}
        />
        {props.secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
            <Text style={styles.eyeText}>
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </View>
  );
};

export default InputText;