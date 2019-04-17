"use strict";

import React from "react";
import AppColors from "./AppColors";
import AppFonts from "./AppFonts";
import { Platform, View, StyleSheet, TextInput  } from "react-native";
import StyleSheet from "./AppStyleSheet";

class AppInput extends React.Component {
  static defaultProps = {
    autoCapitalize: "sentences",
    multiline: true,
    maxLength: 500,
    inputColor: AppColors.coolGray,
    style: {},
    textAlign: "left",
    textColor: AppColors.tangaroa,
    underlineColor: AppColors.primary,
    onChange: _ => {},
    onSubmit: _ => {},
  };

  render() {
    const {
      autoCapitalize,
      onChange,
      onSubmit,
      multiline,
      maxLength,
      placeholder,
      inputColor,
      textAlign,
      textColor,
      underlineColor
    } = this.props;

    let platformStyles;
    if (Platform.OS === "ios") {
      platformStyles = { borderColor: inputColor, color: textColor };
    } else {
      platformStyles = { color: textColor };
    }

    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          style={[styles.input, platformStyles]}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={inputColor}
          textAlign={textAlign}
          underlineColorAndroid={underlineColor}
          onChangeText={text => onChange(text)}
          onSubmitEditing={onSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 15
  },
  input: {
    fontSize: 17,
    color: primary,
    height: 45,
  }
});

export default AppInput;
