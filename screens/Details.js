import React from "react";
import { View, SafeAreaView, ScrollView, Image, StatusBar, StyleSheet } from "react-native";

import { SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton2, SubInfo, DetailsDesc, FocusedStatusBar } from "../components";


const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 200 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton2 minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} handlePress={() => navigation.navigate("Visit", { data })} />
      </View>

      <DetailsHeader data={data} navigation={navigation} />
      <SubInfo data={data} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={{ padding: SIZES.font }}>
            <DetailsDesc data={data} />
          </View>
        </ScrollView>
      </SafeAreaView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
});

export default Details;