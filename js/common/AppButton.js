/**
 * @flow
 */

"use strict";

import React from "react";
import AppColors from "./AppColors";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { Text } from "./AppText";

const BUTTON_HEIGHT = 52,
  BUTTON_HEIGHT_SM = 32;

class AppButton extends React.Component {
  props: {
    theme:
      | "blue"
      | "white"
      | "bordered",
    type: "default" | "round" | "small",
    opacity: number,
    icon?: number,
    caption?: string,
    captionStyle?: object,
    hitSlop?: number,
    style?: any,
    fontSize?: number,
    onPress: () => mixed
  };

  static defaultProps = {
    hitSlop: 0,
    opacity: 1,
    theme: "white"
  };

  static height = BUTTON_HEIGHT;

  render() {
    const { caption, captionStyle, icon, fontSize, opacity } = this.props;
    const { buttonTheme, iconTheme, captionTheme } = this.getTheme();
    const { containerType, buttonType, iconType, captionType } = this.getType();
    const hitSlop = this.getHitSlop();

    let iconImage;
    if (icon) {
      iconImage = (
        <Image source={icon} style={[styles.icon, iconTheme, iconType]} />
      );
    }

    let fontSizeOverride;
    if (fontSize) {
      fontSizeOverride = { fontSize };
    }

    const content = (
      <View style={[styles.button, buttonTheme, buttonType, { opacity }]}>
        <Text
          style={[styles.caption, captionTheme, captionType, fontSizeOverride, captionStyle]}
        >
          {caption}
        </Text>
        {iconImage}
      </View>
    );

    if (this.props.onPress) {
      return (
        <TouchableOpacity
          accessibilityTraits="button"
          activeOpacity={0.5}
          onPress={this.props.onPress}
          hitSlop={hitSlop}
          style={[styles.container, containerType, this.props.style]}
        >
          {content}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={[styles.container, containerType, this.props.style]}>
          {content}
        </View>
      );
    }
  }

  getTheme() {
    const { theme } = this.props;
    let buttonTheme, iconTheme, captionTheme;
    if (theme === "bordered") {
      buttonTheme = {
        backgroundColor: "transparent",
        borderColor: AppColors.primary,
        borderWidth: 1
      };
      iconTheme = { tintColor: AppColors.primary };
      captionTheme = { color: AppColors.primary };
    } else if (theme === "blue") {
      buttonTheme = { backgroundColor: AppColors.blue };
      iconTheme = { tintColor: AppColors.white };
      captionTheme = { color: AppColors.white };
    } else if (theme === "white") {
      buttonTheme = { backgroundColor: AppColors.white };
      iconTheme = { tintColor: AppColors.primary };
      captionTheme = { color: AppColors.primary };
    } else if (theme === "none") {
      buttonTheme = { backgroundColor: "transparent", padding: 0 };
      iconTheme = { tintColor: AppColors.primary };
      captionTheme = { color: AppColors.primary };
    } else {
      buttonTheme = { backgroundColor: AppColors.primary };
      iconTheme = { tintColor: AppColors.white };
      captionTheme = { color: AppColors.white };
    }

    return { buttonTheme, iconTheme, captionTheme };
  }

  getType() {
    const { type } = this.props;
    let containerType, buttonType, iconType, captionType;

    if (type === "round") {
      buttonType = { width: BUTTON_HEIGHT, paddingHorizontal: 0 };
      iconType = { marginRight: 0 };
      captionType = { fontSize: 13 };
    } else if (type === "small") {
      containerType = { height: BUTTON_HEIGHT_SM };
      buttonType = { paddingHorizontal: 15 };
      iconType = { marginRight: 0 };
      captionType = { fontSize: 13 };
    } else if (type === "none") {
      captionType = { textAlign: "left" };
      buttonType = { justifyContent: "flex-start", paddingHorizontal: 0, borderRadius: 0 };
    } else {
      // defaults
    }

    return { containerType, buttonType, iconType, captionType };
  }

  getHitSlop() {
    const { hitSlop } = this.props;
    return { top: hitSlop, right: hitSlop, bottom: hitSlop, left: hitSlop };
  }
}

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    borderRadius: BUTTON_HEIGHT / 2
  },
  buttonRound: {
    width: BUTTON_HEIGHT,
    paddingHorizontal: 0
  },
  icon: {
    marginRight: 12
  },
  caption: {
    fontSize: 15,
    textAlign: "center"
  }
});

export default AppButton;
