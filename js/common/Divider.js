/**
 * @flow
 */

"use strict";

import React from "react";
import { StyleSheet, View } from "react-native";
import AppColors from "./AppColors";

type Props = {
  margin: number,
  style: Object
};
const Divider = ({ margin = 10, style = {} }: Props) => (
  <View style={[styles.divider, { marginVertical: margin }, style]} />
);

const styles = StyleSheet.create({
  divider: {
    alignSelf: "stretch",
    backgroundColor: AppColors.lightGray,
    height: 1
  }
});

export default Divider;
