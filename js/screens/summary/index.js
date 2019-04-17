/**
 * @flow
 */

"use strict";

import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { updateItem, submitPromo } from "../../actions/summary";
import { Item } from "../../actions/types";
import { Heading3 } from "../../common/AppText";
import AppColors from "../../common/AppColors";
import AppButton from "../../common/AppButton";
import DualItemRow from "../../common/DualItemRow";
import SavingsTooltip from "./SavingsTooltip";
import Divider from "../../common/Divider";
import { fixed, sum, x100 } from "../../utils/moneyUtils";

type props = {
  items: Array<Item>,
  promo: String
};
const Summary = ({
  items = [],
  promo = 0
}: Props) => {

  const [showDetails, setShowDetails] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  
  const subtotal = fixed(items.reduce((acc, curr) => acc += x100(curr.price), 0));
  const discount = promo ? fixed(x100(subtotal) * (promo / 100)) : 0;
  const savings = fixed(items.reduce((acc, curr) => acc += x100(curr.savings), 0));
  const taxes = (items[0]) ? fixed((x100(subtotal) * (items[0].tax)) / 100) : 0;
  const total = sum(subtotal, -savings, -discount, taxes);;

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <DualItemRow>
          <Heading3>Subtotal</Heading3>
          <Heading3 style={styles.bold}>{`$${subtotal}`}</Heading3>
        </DualItemRow>

        {renderDiscount(discount)}

        <SavingsTooltip savings={savings} />

        <DualItemRow>
          <Heading3>Est. taxes & fees</Heading3>
          <Heading3 style={styles.bold}>{`$${taxes}`}</Heading3>
        </DualItemRow>

        <DualItemRow>
          <Heading3>{items[0] && `(Based on ${items[0].zipcode})`}</Heading3>
        </DualItemRow>

        <Divider margin={20} />

        <DualItemRow>
          <Heading3 style={[styles.bold, styles.total]}>Est. total</Heading3>
          <Heading3 style={[styles.bold, styles.total]}>{`$${total}`}</Heading3>
        </DualItemRow>

        {renderButton(
          showDetails ? "Hide item details" : "See item details",
          showDetails ? "  -" : "  +",
          () => setShowDetails(!showDetails))}

        <Divider margin={0} />
        
        {renderButton(
          showPromo ? "Hide promo code" : "Apply promo code",
          showPromo ? "  -" : "  +",
          () => setShowPromo(!showPromo))}
      </ScrollView>
    </View>
  );
}

const renderDiscount = (discount) => {
  if (!discount) return null;
  return (
    <DualItemRow>
      <Heading3>PROMO APPLIED</Heading3>
      <Heading3 style={{...styles.bold, ...styles.red}}>{`- ${discount}`}</Heading3>
    </DualItemRow>
  );
}

const renderButton = (caption, icon, onPress) => (
  <DualItemRow
    itemLeftStyle={{ flex: 0, marginRight: 0 }}
    itemRightStyle={{ alignItems: "flex-start", marginLeft: 0 }}
  >
    <AppButton
      caption={caption}
      captionStyle={styles.underline}
      onPress={onPress}
      theme={"none"}
      type={"none"}
    />
    <AppButton
      caption={icon}
      captionStyle={styles.icon}
      onPress={onPress}
      theme={"none"}
      type={"none"}
    />
  </DualItemRow>
);

const styles = StyleSheet.create({
  bold: {
    fontWeight: "500"
  },
  icon: {
    fontSize: 25
  },
  red: {
    color: AppColors.red
  },
  scrollview: {
    borderColor: AppColors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    margin: 25
  },
  total: {
    fontSize: 25
  },
  underline: {
    textDecorationLine: "underline"
  },
  wrapper: {
    flex: 1
  }
});

const select = (store) => ({
    items: store.summary.items,
    promo: store.summary.promo
});


const actions = (dispatch) => ({
  onUpdateItem: item => dispatch(updateItem(item)),
  onPromoSubmit: promo => dispatch(submitPromo(promo)),
  dispatch
});

export default connect(select, actions)(Summary);
