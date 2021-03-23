"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var cardDeck_1 = require("./cardDeck");
var App = function () {
    var _a = react_1.useState(0), index = _a[0], setIndex = _a[1];
    function getRandomCard(input) {
        var newNum = Math.floor(Math.random() * (input.length - 1) + 1);
        if (newNum !== index) {
            setIndex(newNum);
            return;
        }
        else
            return getRandomCard(input.splice(input.indexOf(newNum), 1));
    }
    return (<>
      <react_native_1.StatusBar barStyle="dark-content"/>
      <react_native_1.SafeAreaView style={styles.safeAreaView}>
        <react_native_1.View style={styles.body}>
          <react_native_1.View style={styles.sectionContainer}>
            <react_native_1.Text style={styles.sectionTitle}>{cardDeck_1["default"][index].title}</react_native_1.Text>
            <react_native_1.Image source={cardDeck_1["default"][index].image} style={styles.images}/>
            <react_native_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faCoffee}/>
            <react_native_1.Button title="New Card" onPress={function () { return getRandomCard(cardDeck_1["default"]); }}/>
            <react_native_1.Text style={styles.sectionTitle}>
              {cardDeck_1["default"][index].description}
            </react_native_1.Text>
            <react_native_1.Text style={styles.bottomTitle}>{cardDeck_1["default"][index].title}</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.SafeAreaView>
    </>);
};
var styles = react_native_1.StyleSheet.create({
    safeAreaView: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'white'
    },
    engine: {
        position: 'absolute',
        right: 0
    },
    body: {
        flex: 1
    },
    sectionContainer: {
        flex: 1,
        marginTop: 32,
        paddingHorizontal: 24,
        display: 'flex',
        alignItems: 'center'
    },
    sectionTitle: {
        flex: 1,
        fontSize: 32,
        fontWeight: '600',
        width: '100%',
        color: 'black'
    },
    bottomTitle: {
        flex: 1,
        fontSize: 32,
        fontWeight: '600',
        color: 'black',
        width: '100%',
        textAlign: 'left',
        transform: [{ rotateX: '180deg' }],
        transform: [{ rotateY: '180deg' }]
    },
    images: {
        flex: 3,
        height: 50,
        width: '100%',
        resizeMode: 'cover'
    },
    buton: {
        flex: 1
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'black'
    },
    highlight: {
        fontWeight: '700'
    }
});
exports["default"] = App;
