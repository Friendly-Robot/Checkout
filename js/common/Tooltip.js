/**
 * @flow
 */

"use strict";

import React from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import AppColors from "./AppColors";
import { Text } from "./AppText";

/**
* @param bodyStyle requires { top, left, right, bottom } positions for placement of tooltip.
*/

type Props = {
  bodyStyle: Object,
  closeModal: Function,
  content: String,
  contentStyle: Object,
  visible: Boolean
};
const ToolTip = ({
  bodyStyle = {},
  closeModal = () => {},
  content = "",
  contentStyle = {},
  visible = false
}: Props) => {
  return (
    <Modal
      animationType={"fade"}
      onRequestClose={closeModal}
      visible={visible}
    >
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback
          onPress={closeModal}
          style={styles.exitArea}
        />

        <View style={[styles.contentWrapper, bodyStyle]}>
          <Text style={[styles.content, contentStyle]}>{content}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    textAlign: "left"
  },
  contentWrapper: {
    alignItems: "center",
    borderColor: AppColors.black,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: AppColors.white,
    justifyContent: "center",
    padding: 10,
    paddingBottom: 15,
    position: "absolute",
    zIndex: 2
  },
  exitArea: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  wrapper: {
    flex: 1,
  }
});

export default ToolTip;
