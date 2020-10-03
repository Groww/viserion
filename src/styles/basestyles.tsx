import { StyleSheet } from 'react-native';
import Fonts from './fonts';

const BaseStyles = StyleSheet.create({
  borderSecondaryBtn: {
    borderWidth: 1,
    // borderColor: Colors.GREEN_BLUE
  },
  borderTertiary: {
    borderWidth: 1,
    // borderColor: Colors.DARK_SILVER
  },
  grwButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  grwLabel: {
    fontFamily: Fonts.type.gotham_medium,
    fontSize: Fonts.size.regular_16,
    fontWeight: 'bold',
  },
});

export default BaseStyles;
