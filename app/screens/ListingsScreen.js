import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && !getListingsApi.loading && (
        <>
          <View style={styles.errorContainer}>
            <AppText style={styles.error}>
              Couldn't retrieve the listings.
            </AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </View>
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      {!getListingsApi.loading && !getListingsApi.error && (
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 8,
    backgroundColor: colors.light,
  },
  error: {},
  errorContainer: {
    marginTop: "15%",
    marginLeft: "10%",
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListingsScreen;
