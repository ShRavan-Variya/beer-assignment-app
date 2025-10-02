import { isNetworkAvailable } from '@/src/api/manager';
import { CommonHeader } from '@/src/components/CommonHeader';
import { Loader } from '@/src/components/Loader';
import { getItemDetails } from '@/src/services/productsServices';
import { useToast } from 'expo-toast';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const DetailsScreen: React.FC = (props: any) => {
  const toast = useToast();
  const {id} = props.route.params || {};
  const [loading, setLoading] = useState<boolean>(false);
  const [textImage, setTextImage] = useState<string>('');
  const [textName, setTextName] = useState<string>('');
  const [textTagLine, setTextTagLine] = useState<string>('');
  const [textDescription, setTextDescription] = useState<string>('');
  const [textFirstBrewed, setTextFirstBrewed] = useState<string>('');
  const [textABV, setTextABV] = useState<number>(0);
  const [textIBU, setTextIBU] = useState<number>(0);
  const [textTagetFG, setTextTagetFG] = useState<number>(0);
  const [textTagetOG, setTextTagetOG] = useState<number>(0);
  const [textEBC, setTextEBC] = useState<number>(0);
  const [textSRM, setTextSRM] = useState<number>(0);
  const [textPH, setTextPH] = useState<number>(0);
  const [textAttenuationLevel, setTextAttenuationLevel] = useState<number>(0);

  useEffect(() => {
    doGetItemDetails(id);
  }, [id])

  if (!id) {
    return (
      <View style={styles.viewEmpty}>
        <Text>No item</Text>
      </View>
    );
  }
  
  const doGetItemDetails = async (id: number) => {
    const isConnected = await isNetworkAvailable();
    if (!isConnected) {
      toast.show("No internet connection available!");
      return;
    }
    
    setLoading(true);
    try {
      const response: any = await getItemDetails(id);
      setLoading(false);
      
      setTextImage(response.image ?? '');
      setTextName(response.name ?? '');
      setTextTagLine(response.tagline ?? '');
      setTextDescription(response.description ?? '');
      setTextFirstBrewed(response.first_brewed ?? '');
      setTextABV(response.abv ?? 0);
      setTextIBU(response.ibu ?? 0);
      setTextTagetFG(response.target_fg ?? 0);
      setTextTagetOG(response.target_og ?? 0);
      setTextEBC(response.ebc ?? 0);
      setTextSRM(response.srm ?? 0);
      setTextPH(response.ph ?? 0);
      setTextAttenuationLevel(response.attenuation_level ?? 0);
    } catch (error: any) {
      setLoading(false);
      if (error?.data?.message) {
        const message = error?.data?.message;
        toast.show(message);
      }
    }
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <CommonHeader
        title="Details"
        showBackButton={true}
      />
      <ScrollView contentContainerStyle={{padding:20}}>
        <Image source={{uri: `https://punkapi.online/v3/images/${textImage}`}} style={styles.imageMain} resizeMode="contain" />
        <Text style={styles.textName}>{textName}</Text>
        <Text style={styles.testTag}>{textTagLine}</Text>
        <Text style={styles.textDescription}>{textDescription}</Text>
        <Text style={styles.titleSection}>Technical Details:</Text>
        <Text style={styles.textCommon1}>First brewed: <Text style={styles.textCommon2}>{textFirstBrewed}</Text></Text>
        <Text style={styles.textCommon1}>Alcohol: <Text style={styles.textCommon2}>{textABV}%</Text></Text>
        <Text style={styles.textCommon1}>International Bitterness Units: <Text style={styles.textCommon2}>{textIBU}</Text></Text>
        <Text style={styles.textCommon1}>Target Final Gravity: <Text style={styles.textCommon2}>{textTagetFG}</Text></Text>
        <Text style={styles.textCommon1}>Target Original Gravity: <Text style={styles.textCommon2}>{textTagetOG}</Text></Text>
        <Text style={styles.textCommon1}>European Brewery Convention color: <Text style={styles.textCommon2}>{textEBC}</Text></Text>
        <Text style={styles.textCommon1}>Standard Reference Method color scale: <Text style={styles.textCommon2}>{textSRM}</Text></Text>
        <Text style={styles.textCommon1}>Acidity: <Text style={styles.textCommon2}>{textPH}</Text></Text>
        <Text style={styles.textCommon1}>Sugar converted into alcohol: <Text style={styles.textCommon2}>{textAttenuationLevel}%</Text></Text>
      </ScrollView>
      <Loader isLoading={loading} />
    </SafeAreaView>
  );
}

export default DetailsScreen;
