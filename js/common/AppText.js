/**
 * @flow
 */

"use strict";

import React from "react";
import ReactNative from "react-native";
import AppColors from "./AppColors";

export function Text({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.text, style]} {...props} />;
}

export function Heading1({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h1, style]} {...props} />;
}

export function Heading2({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h2, style]} {...props} />;
}

export function Heading3({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h3, style]} {...props} />;
}

export function Heading4({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h4, style]} {...props} />;
}

export function Paragraph({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.p, style]} {...props} />;
}

export function HeaderTitle({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.headerTitle, style]} {...props} />;
}

// Styles
// =============================================================================

const styles = ReactNative.StyleSheet.create({
  text: {
    color: AppColors.black
  },
  h1: {
    fontSize: 30,
    color: AppColors.black
  },
  h2: {
    fontSize: 23,
    color: AppColors.black,
  },
  h3: {
    fontSize: 17,
    color: AppColors.black,
  },
  h4: {
    fontSize: 13,
    color: AppColors.black
  },
  p: {
    fontSize: 17,
    color: AppColors.black
  },
  headerTitle: {
    fontWeight: "500",
    fontSize: 20
  }
});
