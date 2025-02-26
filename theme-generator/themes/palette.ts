import { Polished } from "../deps.ts";

const { darken, saturate } = Polished;

const darkenColor = (
  color: string,
  amounts: {
    saturateAmount?: number;
    darkenAmount?: number;
  } | null = null,
): string => {
  return saturate(
    amounts?.saturateAmount ?? 0.1,
    darken(amounts?.darkenAmount ?? 0.2, color),
  );
};

const baseRed = "#e68a8a";
const baseOrange = "#de9865";
const baseYellow = "#e1ca75";
const baseGreen = "#9bc26c";
const baseTurquoise = "#79d9c7";
const baseBlue = "#76bbd7";
const baseIndigo = "#768dd7";
const basePurple = "#bb99e0";
const basePink = "#e787ac";

const saturatedRed = "#f27979";
const saturatedOrange = "#f29655";
const saturatedYellow = "#f2d466";
const saturatedGreen = "#a4d964";
const saturatedTurquoise = "#6ff2da";
const saturatedBlue = "#6ccaf0";
const saturatedIndigo = "#6785e6";
const saturatedPurple = "#be8df2";
const saturatedPink = "#ff7aad";

export const palette = {
  black: "#121414",
  blackLighten1: "#16191a",
  blackLighten2: "#1c2021",
  blackLighten3: "#232729",
  blackLighten4: "#292e30",
  blackLighten5: "#303638",
  blackLighten6: "#363d40",
  blueBlack: "#0e1214",
  blueBlackLighten1: "#11181a",
  blueBlackLighten2: "#151d20",
  blueBlackLighten3: "#1a2428",
  blueBlackLighten4: "#1f2b30",
  blueBlackLighten5: "#243238",
  blueBlackLighten6: "#293940",
  blueWhite: "#f5fbfc",
  blueWhiteDarken1: "#f0f6f7",
  blueWhiteDarken2: "#e8eeef",
  blueWhiteDarken3: "#dfe4e6",
  blueWhiteDarken4: "#d2d8d9",
  white: "#fcfcfc",
  whiteDarken1: "#f7f7f7",
  whiteDarken2: "#f0f0f0",
  whiteDarken3: "#e6e6e6",
  whiteDarken4: "#d9d9d9",
  red: baseRed,
  redDarken1: darkenColor(baseRed),
  orange: baseOrange,
  orangeDarken1: darkenColor(baseOrange, {
    darkenAmount: 0.1,
  }),
  yellow: baseYellow,
  yellowDarken1: darkenColor(baseYellow, {
    saturateAmount: 0.5,
    darkenAmount: 0.3,
  }),
  green: baseGreen,
  greenDarken1: darkenColor(baseGreen, {
    saturateAmount: 0.3,
    darkenAmount: 0.25,
  }),
  turquoise: baseTurquoise,
  turquoiseDarken1: darkenColor(baseTurquoise),
  blue: baseBlue,
  blueDarken1: darkenColor(baseBlue, { darkenAmount: 0.15 }),
  indigo: baseIndigo,
  indigoDarken1: darkenColor(baseIndigo),
  purple: basePurple,
  purpleDarken1: darkenColor(basePurple, {
    saturateAmount: 0.1,
    darkenAmount: 0.15,
  }),
  pink: basePink,
  pinkDarken1: darkenColor(basePink, {
    darkenAmount: 0.15,
    saturateAmount: 0.05,
  }),
  saturatedRed: saturatedRed,
  saturatedRedDarken1: darkenColor(saturatedRed),
  saturatedOrange: saturatedOrange,
  saturatedOrangeDarken1: darkenColor(saturatedOrange, {
    darkenAmount: 0.1,
  }),
  saturatedYellow: saturatedYellow,
  saturatedYellowDarken1: darkenColor(saturatedYellow, {
    darkenAmount: 0.3,
    saturateAmount: 0.5,
  }),
  saturatedGreen: saturatedGreen,
  saturatedGreenDarken1: darkenColor(saturatedGreen, {
    saturateAmount: 0.3,
    darkenAmount: 0.25,
  }),
  saturatedTurquoise: saturatedTurquoise,
  saturatedTurquoiseDarken1: darkenColor(saturatedTurquoise, {
    darkenAmount: 0.3,
  }),
  saturatedBlue: saturatedBlue,
  saturatedBlueDarken1: darkenColor(saturatedBlue),
  saturatedIndigo: saturatedIndigo,
  saturatedIndigoDarken1: darkenColor(saturatedIndigo),
  saturatedPurple: saturatedPurple,
  saturatedPurpleDarken1: darkenColor(saturatedPurple, {
    saturateAmount: 0.1,
    darkenAmount: 0.15,
  }),
  saturatedPink: saturatedPink,
  saturatedPinkDarken1: darkenColor(saturatedPink, {
    darkenAmount: 0.15,
    saturateAmount: 0.05,
  }),
};
