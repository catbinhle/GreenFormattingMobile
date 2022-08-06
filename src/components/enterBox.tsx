import React from 'react';

import {Text, TextInput, View} from 'react-native';

type Props = {
  placeholder: string;
  value: string;
  changeText: (text: string) => void;
};

const EnterBox: React.FC<Props> = ({placeholder, value, changeText}) => (
  <View style={{padding: 20}}>
    <Text style={{fontSize: 16}}>Enter Text: </Text>
    <View
      style={{
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 6,
        marginVertical: 8,
        height: 44,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          fontSize: 16,
          fontWeight: 'bold',
          marginRight: 6,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={changeText}
      />
    </View>
  </View>
);

export default EnterBox;
