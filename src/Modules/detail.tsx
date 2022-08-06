import React from 'react';

import {observer} from 'mobx-react';
import {Text, View} from 'react-native';

import {appCtrl} from '../baseCtrl';

function Detail() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: 'red'}}>{appCtrl.text}</Text>
    </View>
  );
}

export default observer(Detail);
