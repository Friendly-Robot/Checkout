/**
 * @flow
 */

"use strict";

import React, { useState } from "react";
import { findNodeHandle, StyleSheet, View } from "react-native";
import NativeMethodsMixin from 'NativeMethodsMixin';
import AppButton from "../../common/AppButton";
import AppColors from "../../common/AppColors";
import { Heading3 } from "../../common/AppText";
import DualItemRow from "../../common/DualItemRow";
import Tooltip from "../../common/Tooltip";

type props = {
  savings: Number,
};
const SavingsTooltip = ({
  savings = 0,
}: Props) => {

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipBounds, setTooltipBounds] = useState({});

  let tooltipRef;

  return (
    <View
      onLayout={() => timeoutLayout(() => onTooltipLayout(tooltipRef, setTooltipBounds))}
      ref={(ref) => {tooltipRef = ref;}}
    >
      <DualItemRow>
        <AppButton
          caption={"Pickup savings"}
          captionStyle={{...styles.tooltipCaption, ...styles.underline}}
          hitSlop={5}
          onPress={() => setShowTooltip(!showTooltip)}
          theme={"none"}
          type={"none"}
        />
        <Heading3 style={[styles.bold, styles.red]}>{savings}</Heading3>
      </DualItemRow>

      {showTooltip &&
          <Tooltip
            bodyStyle={{ left: tooltipBounds.x, top: tooltipBounds.y,  ...styles.tooltipWrapper }}
            closeModal={() => setShowTooltip(!showTooltip)}
            content={"Picking up your order in the store helps cut costs, and we pass the savings on to you."}
            visible={showTooltip}
          />}
    </View>
  )
}

const timeoutLayout = cb => setTimeout(cb, 0);

const onTooltipLayout = (ref, setTooltipBounds) => {
  if (ref) {
    NativeMethodsMixin.measureInWindow.call(
      findNodeHandle(ref),
      (x, y) => setTooltipBounds({ x, y })
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "500"
  },
  red: {
    color: AppColors.red
  },
  tooltipCaption: {
    color: AppColors.black
  },
  tooltipWrapper: {
    marginRight: 150,
    marginTop: 45
  },
  underline: {
    textDecorationLine: "underline"
  }
});

export default SavingsTooltip;
