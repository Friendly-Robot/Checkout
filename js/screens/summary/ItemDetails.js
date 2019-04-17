/**
 * @flow
 */

"use strict";

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Item } from "../../actions/types";
import AppColors from "../../common/AppColors";
import { Heading4 } from "../../common/AppText";
import DualItemRow from "../../common/DualItemRow";
import { sum } from "../../utils/moneyUtils";

type props = {
  discount: number,
  items: Array<Item>,
  savings: number
};
const ItemDetails = ({
  discount = 0,
  items = [],
  savings = 0
}: Props) => {

  Boolean(items.length) && items.forEach(item => Boolean(item.image) && Image.prefetch(item.image));

  return (
    <View style={styles.wrapper}>
      {items.map(item => (
        <DualItemRow key={item.name}>
          <Image source={{uri: item.img}} style={styles.image} resizeMode={"contain"} />
          <View>
            <Heading4>{item.name}</Heading4>
            <DualItemRow bodyStyle={styles.space}>
              <Heading4 style={styles.bold}>{`$${sum(item.price, -savings, -discount)}`}</Heading4>
              <Heading4>Qty: ${item.quantity}</Heading4>
            </DualItemRow>
            <Heading4 style={styles.cross}>{`$${item.price}`}</Heading4>
          </View>
        </DualItemRow>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "500"
  },
  cross: {
    textDecorationLine: "line-through"
  },
  image: {
    flex: 1
  },
  space: {
    marginVertical: 2,
  },
  wrapper: {
    marginVertical: 10
  }
});

export default ItemDetails;
