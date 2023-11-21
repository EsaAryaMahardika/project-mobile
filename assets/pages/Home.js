import React, { useState } from 'react';
import { View, ImageBackground, ScrollView, Animated, StyleSheet } from 'react-native';
import { Gallery, Category, Nav } from '../components';
const Home = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [150, 50],
    extrapolate: 'clamp',
  });
  const listCategoryWidth = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['100%', '90%'],
    extrapolate: 'clamp',
  });
  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
    useNativeDriver: false,
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.cardItem}>
          <ImageBackground
            style={styles.cardImage}
            resizeMode="cover"
            source={{
              uri: 'https://img.freepik.com/premium-photo/olympic-games-sports-background-with-copy-space-text_916191-49138.jpg',
            }}
          />
        </View>
      </Animated.View>
      <Animated.View style={[styles.listCategory, { width: listCategoryWidth }]}>
        <Category />
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.gallery}>
          <Gallery />
        </View>
      </ScrollView>
      <Nav />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listCategory: {
    paddingVertical: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    marginTop: 5,
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
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
export default Home;