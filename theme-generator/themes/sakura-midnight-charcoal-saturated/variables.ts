import { generateDarkTheme } from "../generate-dark-theme.ts";
import { palette } from "../palette.ts";

const themeName = "Sakura Midnight Saturated (Charcoal)";
const editorScheme = "/themes/sakura-midnight-charcoal-saturated.xml";

const backgroundColor = palette.blackLighten1;
const overlayBackgroundColor = palette.blackLighten2;
const topBarBackgroundColor = palette.black;
const editorBackgroundColor = palette.black;

export default generateDarkTheme(
  themeName,
  editorScheme,
  backgroundColor,
  overlayBackgroundColor,
  topBarBackgroundColor,
  editorBackgroundColor,
  palette.white,
  palette.whiteDarken1,
  palette.whiteDarken2,
  palette.whiteDarken3,
  palette.whiteDarken4,
  palette.saturatedRed,
  palette.saturatedOrange,
  palette.saturatedYellow,
  palette.saturatedGreen,
  palette.saturatedTurquoise,
  palette.saturatedBlue,
  palette.saturatedIndigo,
  palette.saturatedPurple,
  palette.saturatedPink,
);
