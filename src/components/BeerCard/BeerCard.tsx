import Theme from '@/src/theme/Theme';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface BeerCardProps {
  image: string;
  name: string;
  first_brewed: string;
  alcohol: number;
  onPress: () => void;
}

const BeerCard: FC<BeerCardProps> = props => {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <Image source={{ uri: `https://punkapi.online/v3/images/${props.image}` }} style={styles.image} resizeMode="contain" />
      <View style={styles.right}>
        <Text style={styles.title} numberOfLines={1}>{props.name}</Text>
        <Text style={[styles.sub, {marginTop: Theme.responsiveSize.size8}]}>{'First Brewed: '+props.first_brewed}</Text>
        <Text style={styles.sub}>{'Alcohol: '+props.alcohol+'%'}</Text>
        <Text style={styles.view}>View Details</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BeerCard;
