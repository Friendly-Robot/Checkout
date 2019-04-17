/**
 * @flow
 */

"use strict";

import React from "react";
import AppColors from "./AppColors";
import { Dimensions, StyleSheet, View, Image } from "react-native";

const WIN_WIDTH = Dimensions.get("window").width,
  WIN_HEIGHT = Dimensions.get("window").height;

type props = {}
class Splash extends React.PureComponent<props> {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          source={require("./img/cart.png")}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: AppColors.white,
    flex: 1,
    justifyContent: "center"
  },
  image: {
    resizeMode: "cover"
  }
});

export default Splash;
