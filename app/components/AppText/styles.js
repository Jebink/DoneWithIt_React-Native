const { StyleSheet, Platform } = require("react-native");

const styles = StyleSheet.create({
  text: {
    color: "black",
    padding: 2,
    textAlign: "left",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
