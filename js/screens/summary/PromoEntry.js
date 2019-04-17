/**
 * @flow
 */

"use strict";

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppColors from "../../common/AppColors";
import { Heading3 } from "../../common/AppText";
import AppInput from "../../common/AppInput";
import AppButton from "../../common/AppButton";
import DualItemRow from "../../common/DualItemRow";

type Props = {
  handlePromoSubmit: function
};
const PromoEntry = ({
  handlePromoSubmit = () => {}
}: Props) => {

  const [promo, setPromo] = useState("");

  return (
    <View style={styles.wrapper}>
      <Heading3 style={styles.label}>Promo code</Heading3>
      <DualItemRow itemRightStyle={styles.buttonWrapper}>
        <AppInput
          autoCapitalize={"characters"}
          multiline={false}
          maxLength={50}
          inputColor={AppColors.coolGray}
          textColor={AppColors.black}
          onChange={setPromo}
          type={"box"}
          underlineColor={AppColors.white}
        />
        <AppButton
          caption={"Apply"}
          hitSlop={5}
          onPress={() => handlePromoSubmit(promo)}
          theme={"bordered"}
          type={"small"}
        /> 
      </DualItemRow>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: AppColors.lightGray,
    marginLeft: 10
  },
  buttonWrapper: {
    alignItems: "flex-start",
    flex: 0.3,
    marginLeft: 15
  },
  wrapper: {
    marginVertical: 10
  }
});

export default PromoEntry;
