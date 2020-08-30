import React, {Component} from 'react';
import {Text, View} from 'react-native';

//Components
import Landing from './src/components/Landing';

console.disableYellowBox = true;
class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Landing />
      </View>
    );
  }
}

export default App;
