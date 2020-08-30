import React, {Component} from 'react';
import {
  Text,
  Animated,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {heightToDp, widthToDp} from '../Responsive/Responsive';
import {IconButton} from 'react-native-paper';

class Landing extends Component {
  state = {
    scroll: new Animated.Value(0),
  };

  render() {
    const translateDetails = this.state.scroll.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-45deg'],
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton
            icon="arrow-left"
            color="black"
            size={20}
            onPress={() => {}}
            style={styles.back}
          />
          <Text style={styles.label}>All Cards</Text>
        </View>
        <View style={styles.cards}>
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: this.state.scroll}}},
            ])}
            style={{width: '100%', flex: 1}}
            contentContainerStyle={{flex: 1, alignItems: 'center'}}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <Animated.View // last card
                style={[styles.card, styles.card4]}>
                <Image
                  source={require('../assets/Silver.png')}
                  style={styles.image}
                />
              </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {}}>
              <Animated.View // third card
                style={[styles.card, styles.card3]}>
                <Image
                  source={require('../assets/Black.png')}
                  style={styles.image}
                />
              </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {}}>
              <Animated.View // second card
                style={[styles.card, styles.card2]}>
                <Image
                  source={require('../assets/Orange.png')}
                  style={styles.image}
                />
              </Animated.View>
            </TouchableWithoutFeedback>

            <Animated.View // frontmost card
              style={[styles.card, styles.card1]}>
              <Image
                source={require('../assets/Blue.png')}
                style={styles.image}
              />
            </Animated.View>
          </Animated.ScrollView>
        </View>

        <Animated.View style={[styles.details]}>
          <Image
            source={require('../../src/assets/HomeContent.png')}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain',
            }}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  container: {flex: 1, padding: 10},
  header: {
    flex: 0.08,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cards: {
    flex: 0.3,
    alignItems: 'center',
  },
  details: {flex: 0.62},
  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  back: {
    position: 'absolute',
    left: 0,
  },
  card: {
    width: 300,
    height: 150,
    position: 'absolute',
  },
  card1: {
    zIndex: 4,
    bottom: 0,
    transform: [{scale: 1}],
  },
  card2: {zIndex: 3, bottom: 15, transform: [{scale: 0.95}]},
  card3: {zIndex: 2, bottom: 30, transform: [{scale: 0.9}]},
  card4: {zIndex: 1, bottom: 43, transform: [{scale: 0.83}]},
  image: {flex: 1, width: null, height: null, resizeMode: 'contain'},
};

export default Landing;
