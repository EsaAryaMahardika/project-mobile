/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Gallery, Category, Nav} from '../components';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.cardItem}>
          <ImageBackground
            style={styles.cardImage}
            resizeMode="cover"
            source={{
              uri: 'https://img.freepik.com/premium-photo/olympic-games-sports-background-with-copy-space-text_916191-49138.jpg',
            }}
          />
        </View>
      </View>
      <View style={styles.listCategory}>
        <Category />
      </View>
      <View style={styles.gallery}>
        <Gallery />
      </View>
      <Nav />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 125,
  },
  listCategory: {
    paddingVertical: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardItem: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  gallery: {
    margin: 20,
  },
});
