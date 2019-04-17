"use strict";

const NAMED_COLORS = {
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(3, 3, 3, 1)",
  red: "rgba(240, 52, 52, 1)",
  lightGray: "rgba(208, 208, 208, 1)",

  // Walmart brand colors
  mediumBlue: "rgba(0, 114, 206, 1)",
  yellow: "rgba(253, 187, 48, 1)",
  darkBlue: "rgba(0, 56, 150, 1)",
  lightBlue: "rgba(108, 171, 231, 1)"
};

const THEME_COLORS = {
  primary: NAMED_COLORS.mediumBlue,
  secondary: NAMED_COLORS.yellow
};

export default {
  ...NAMED_COLORS,
  ...THEME_COLORS
}
