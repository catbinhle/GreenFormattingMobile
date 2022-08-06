import React, {Component} from 'react';

import {LogBox} from 'react-native';

import Navigator from './src/Navigator';

class App extends Component {
  render() {
    LogBox.ignoreAllLogs();
    LogBox.ignoreLogs(['Warning:...']);
    return <Navigator />;
  }
}

export default App;
