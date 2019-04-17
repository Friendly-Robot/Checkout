/**
 * @flow
 */

"use strict";

import React from "react";
import { StyleSheet, View } from "react-native";
import { Heading3 } from "./AppText";

type Props = {
  children: Object,
  bodyStyle: Object,
  itemLeftStyle: Object,
  itemRightStyle: Object,
};
const DualItemRow = ({
  children = {},
  bodyStyle = {},
  itemLeftStyle = {},
  itemRightStyle = {},
}: Props) => {
  return (
    <View style={[styles.wrapper, bodyStyle]}>
      <View style={[styles.left, itemLeftStyle]}>
        {children[0]}
      </View>
      <View style={[styles.right, itemRightStyle]}>
        {children[1]}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    flex: 1,
    marginRight: 10
  },
  right: {
    alignItems: "flex-end",
    flex: 1,
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
