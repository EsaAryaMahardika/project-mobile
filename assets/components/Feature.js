/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fontType} from '../theme';
import {FeatureData} from '../../content';
const FeatureTemplate = ({item}) => {
  return (
    <View style={Layout.column}>
      <View style={Layout.item}>
        <Image
          style={Layout.shortcut}
          source={item.icon}
        />
      </View>
      <Text style={Layout.title}>{item.name}</Text>
    </View>
  );
};
const Feature = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {FeatureData.map(item => (
        <FeatureTemplate key={item.id} item={item} />
      ))}
    </View>
  );
};
export default Feature;
const Layout = StyleSheet.create({
  column: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  shortcut: {
    width: 30,
    height: 30,
  },
  item: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#1D60CC',
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: '#1D60CC',
  },
});
