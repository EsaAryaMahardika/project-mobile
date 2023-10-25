/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {fontType} from '../theme';
import {GalleryData} from '../../content';
import Feature from './Feature';
const GalleryTemplate = ({item}) => {
  return (
    <View style={Layout.box}>
      <Image style={Layout.photo} source={item.image} />
      <Text style={Layout.name}>{item.name}</Text>
      <Text style={Layout.caption}>{item.location}</Text>
      <Text style={Layout.date}>{item.postAt}</Text>
    </View>
  );
};
const Gallery = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Feature />
      <Text style={Layout.header}>Try it!</Text>
      {GalleryData.map(item => (
        <GalleryTemplate key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};
export default Gallery;
const Layout = StyleSheet.create({
  photo: {
    width: '100%',
    height: 175,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginVertical: 5,
  },
  box: {
    marginBottom: 5,
  },
  name: {
    color: '#252525',
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
  },
  caption: {
    color: '#252525',
    fontSize: 15,
    fontFamily: fontType['Pjs-Light'],
  },
  date: {
    color: '#252525',
    fontSize: 12,
    fontFamily: fontType['Pjs-ExtraLight'],
  },
  header: {
    color: '#252525',
    fontSize: 24,
    fontFamily: fontType['Pjs-ExtraBold'],
    borderBottomWidth: 3,
    width: '30%',
    marginVertical: 20,
  },
});
