import React from 'react';

import {observer} from 'mobx-react';
import {Text, TouchableOpacity, View} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

import {appCtrl} from '../baseCtrl';
import EnterBox from '../components/enterBox';

function Home({navigation}: {navigation: NavigationProp<any, any>}) {
  // setInterval(function() {
  //     appCtrl.setText('Hello Mobile Tech Brother!')
  // }, 5000);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <EnterBox
        placeholder="Enter any text"
        value={appCtrl.text}
        changeText={text => {
          appCtrl.setText(text);
        }}
      />
      <Text style={{fontSize: 30}}>{appCtrl.value}</Text>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => {
          // appCtrl.setText('Hello Mobile Tech Brother!')
          appCtrl.setValue(100);
        }}
      >
        <Text style={{fontSize: 20, color: 'red'}}>Change Value</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => appCtrl.reset()}>
        <Text style={{fontSize: 20, color: 'red'}}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Detail')}
      >
        <Text style={{fontSize: 20, color: 'red'}}>Move to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default observer(Home);
