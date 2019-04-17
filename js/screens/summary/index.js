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
import Tooltip from "../../common/Tooltip";
import Divider from "../../common/Divider";

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
  const [showTooltip, setShowTooltip] = useState(false);

  
  const subtotal = (items.reduce((acc, curr) => acc += (curr.price * 100), 0) / 100).toFixed(2);
  const discount = promo ? (((subtotal * 100) * (promo / 100)) / 100).toFixed(2) : 0;
  const savings = (items.reduce((acc, curr) => acc += (curr.savings * 100), 0) / 100).toFixed(2);
  const taxes = (items[0]) ?
    ((((subtotal * 100) * (items[0].tax)) / 100) / 100).toFixed(2) : 0;
  const total = (((subtotal * 100) - (savings * 100) - (discount * 100) + (taxes * 100)) / 100).toFixed(2);

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <DualItemRow>
          <Heading3>Subtotal</Heading3>
          <Heading3 style={styles.bold}>{`$${subtotal}`}</Heading3>
        </DualItemRow>

        {renderDiscount(discount)}

        {renderTooltip(`-${savings}`, setShowTooltip)}

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

const renderTooltip = (savings, onPress) => (
  <DualItemRow>
    <AppButton
      caption={"Pickup savings"}
      captionStyle={{...styles.tooltipCaption, ...styles.underline}}
      onPress={onPress}
      theme={"none"}
      type={"none"}
    />
    <Heading3 style={[styles.bold, styles.red]}>{savings}</Heading3>
  </DualItemRow>
);

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
  row: {
    flexDirection: "row"
  },
  scrollview: {
    borderColor: AppColors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    margin: 25
  },
  tooltipCaption: {
    color: AppColors.black
  },
  tooltipWrapper: {
    alignItems: "center",
    justifyContent: "space-between"
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
