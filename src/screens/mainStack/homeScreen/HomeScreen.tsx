import { isNetworkAvailable } from "@/src/api/manager";
import { BeerCard } from "@/src/components/BeerCard";
import { CommonHeader } from "@/src/components/CommonHeader";
import { Loader } from "@/src/components/Loader";
import { getListBgPage } from "@/src/services/productsServices";
import Theme from "@/src/theme/Theme";
import { useToast } from "expo-toast";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface BeerItem {
  id: number;
  image: string;
  name: string;
  first_brewed: string;
  abv: number;
  onPress: () => void;
}

const HomeScreen: React.FC = (props: any) => {
  const toast = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<BeerItem[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    doGetData(1, true);
  }, [])

  const doGetData = async (pageNumber: number, isInitial = false) => {
    if (loading) return;

    const isConnected = await isNetworkAvailable();
    if (!isConnected) {
      toast.show("No internet connection available!");
      return;
    }

    setLoading(true);
    try {
      const response: any = await getListBgPage(pageNumber);
      setLoading(false);
      setIsRefreshing(false)
      if (response && response.length > 0) {
        setCurrentPage(pageNumber);
        const newList = pageNumber === 1 ? response : [...data, ...response];
        setData(newList);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error: any) {
      setLoading(false);
      if (isInitial) setIsRefreshing(false);
    }
  }

  const openDetails = (id: number) => {
    props.navigation.navigate("Details", {id})
  };

  const renderBeerItem: ListRenderItem<BeerItem> = ({item, index}) => {
    return (
      <BeerCard 
        image={item.image}
        name={item.name}
        first_brewed={item.first_brewed}
        alcohol={item.abv}
        onPress={() => openDetails(item.id)}
      />
    ) 
  };

  const handleLoadMore = () => {
    setTimeout(() => {
      if (!loading && hasMore) {
        doGetData(currentPage + 1);
      }
    }, 500);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    doGetData(1, true);
  };

  const renderFooter = () => {
    if (!loading || currentPage === 1) return null;
    return (
      <View style={{ padding: Theme.responsiveSize.size15, alignItems: "center" }}>
        <ActivityIndicator size="small" color={Theme.colors.appColor} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colors.backgroundColor }}>
      <CommonHeader
        title="Dashboard"
        showBackButton={false}
        onRightPress={() => {
          props.navigation.navigate('Profile')
        }}
      />

      {data && data.length > 0 ? 
        <FlatList
          data={data}
          renderItem={renderBeerItem}
          contentContainerStyle={{paddingBottom: Theme.responsiveSize.size24, paddingHorizontal: Theme.responsiveSize.size15}}
          keyExtractor={(i: any, index: number) => (index + 1).toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.3}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          ListFooterComponent={renderFooter}
        />
      : null}
      {loading && currentPage === 1 && <Loader isLoading={true} />}
    </SafeAreaView>
  );
}

export default HomeScreen;
