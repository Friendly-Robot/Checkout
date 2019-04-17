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
  bodyStyle?: Object,
  closeModal: Function,
  content: String,
  contentStyle?: Object,
  transparent?: Boolean,
  visible: Boolean
};
const ToolTip = ({
  bodyStyle = {},
  closeModal = () => {},
  content = "",
  contentStyle = {},
  transparent = true,
  visible = false
}: Props) => {
  return (
    <Modal
      animationType={"fade"}
      onRequestClose={closeModal}
      transparent={transparent}
      visible={visible}
    >
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback
          onPress={closeModal}
        >
          <View style={styles.exitArea} />
        </TouchableWithoutFeedback>

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
    borderColor: AppColors.lightGray,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: AppColors.white,
    justifyContent: "center",
    marginTop: 5,
    marginRight: 15,
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
