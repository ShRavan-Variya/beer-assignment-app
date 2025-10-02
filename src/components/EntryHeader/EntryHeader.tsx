import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface EntryHeaderProps {
  title: string;
  subtitle: string;
}

const EntryHeader: React.FC<EntryHeaderProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
};

export default EntryHeader;