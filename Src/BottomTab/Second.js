import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

const Second = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const limit = 20;

  const getApi = async () => {
    try {
      setloading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const filter = await response.json();
      setdata((prev) => [...prev, ...filter.results]);
    } catch (error) {
      console.log("Failed", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, [offset]);

  const loadMore = async () => {
    if (!loading) {
      setOffset((prev) => prev + limit);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setOffset(0);
    setdata([]);
    await getApi();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FlatList
        style={styles.flatitem}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={{ fontSize: 12, color: "blue" }}>
              Data: {item.name}
            </Text>
            <Text>URL: {item.url}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text>Header</Text>}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ marginTop: 10, height: 2 }} />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          return loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : null;
        }}
        ListEmptyComponent={<Text>incorrect</Text>}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderWidth: 0.6,
  },
  flatitem: {
    marginTop: 40,
  },
});
