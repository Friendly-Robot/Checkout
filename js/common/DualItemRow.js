/**
 * @flow
 */

"use strict";

import React from "react";
import { StyleSheet, View } from "react-native";
import { Heading3 } from "./AppText";

type Props = {
  bodyStyle: Object,
  itemLeftStyle: Object,
  itemRightStyle: Object,
  itemLeft: string,
  itemRight: string
};
const DualItemRow = ({
  bodyStyle = {},
  itemLeftStyle = {},
  itemRightStyle = {},
  itemLeft = "",
  itemRight = ""
}: Props) => {
  return (
    <View style={[styles.wrapper, bodyStyle]}>
      <Heading3 style={[styles.left, itemLeftStyle]}>{itemLeft}</Heading3>
      <Heading3 style={[styles.right, itemRightStyle]}>{itemRight}</Heading3>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    marginRight: 10
  },
  right: {
    marginLeft: 10
  },
  wrapper: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default DualItemRow;
