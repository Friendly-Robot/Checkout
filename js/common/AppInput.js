"use strict";

import React from "react";
import AppColors from "./AppColors";
import { Platform, View, StyleSheet, TextInput  } from "react-native";

class AppInput extends React.Component {
  static defaultProps = {
    autoCapitalize: "sentences",
    multiline: true,
    maxLength: 500,
    inputColor: AppColors.coolGray,
    style: {},
    textAlign: "left",
    textColor: AppColors.black,
    type: "",
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
      type,
      underlineColor
    } = this.props;

    const buttonType = this.getType(type);

    let platformStyles;
    if (Platform.OS === "ios") {
      platformStyles = { borderColor: inputColor, color: textColor };
    } else {
      platformStyles = { color: textColor };
    }

    return (
      <View style={[styles.wrapper, buttonType, this.props.style]}>
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

  getType = (type) => {
    if (type === "box") {
      return styles.box;
    }
  }
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 1,
    borderColor: AppColors.lightGray,
    borderWidth: 1
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  input: {
    fontSize: 17,
    color: AppColors.primary,
  }
});

export default AppInput;
