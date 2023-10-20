/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {fontType, colors} from './assets/theme';
import { Home, User, More } from 'iconsax-react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                source={{
                  uri: 'https://img.freepik.com/premium-photo/olympic-games-sports-background-with-copy-space-text_916191-49138.jpg',
                }}/>
        </View>
      </View>
      <View style={styles.listCategory}>
          <View style={category.selected}>
            <Text style={{...category.title, color: '#252525'}}>
              Guide
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>New's</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Bookmark</Text>
          </View>
      </View>
      <ListBlog />
      <View style={Layout.navbar}>
        <View style={Layout.selectedNavbar}>
          <Home size="17" color="#FFFFFF"/>
        </View>
        <User size="17" color="#FFFFFF"/>
        <More size="17" color="#FFFFFF"/>
      </View>
    </View>
  );
}
const ListBlog = () => {
  return (
    <ScrollView>
      <View style={Layout.gallery}>
        <View style={Layout.column}>
          <View style={Layout.row}>
            <View style={Layout.column}>
              <View style={Layout.item}>
                <Image
                  style={Layout.shortcut}
                  source={require('./assets/img/tutorial.png')}
                />
              </View>
              <Text style={category.title}>Tutorial</Text>
            </View>
            <View style={Layout.column}>
              <View style={Layout.item}>
                <Image
                  style={Layout.shortcut}
                  source={require('./assets/img/board.png')}
                />
              </View>
              <Text style={category.title}>Board</Text>
            </View>
            <View style={Layout.column}>
              <View style={Layout.item}>
                <Image
                  style={Layout.shortcut}
                  source={require('./assets/img/beach.png')}
                />
              </View>
              <Text style={category.title}>Beach</Text>
            </View>
          </View>
        </View>
        <Text style={category.header}>Try it!</Text>
        <View style={Layout.box}>
          <Image
            style={Layout.photo}
            source={require('./assets/img/1.jpg')}
          />
          <Text style={Layout.name}>Madden Adams</Text>
          <Text style={Layout.caption}>Plengkung Beach</Text>
          <Text style={Layout.date}>October 11, 2023</Text>
        </View>
        <View style={Layout.box}>
          <Image
            style={Layout.photo}
            source={require('./assets/img/2.jpg')}
          />
          <Text style={Layout.name}>George</Text>
          <Text style={Layout.caption}>Mentawai Beach</Text>
          <Text style={Layout.date}>September 7, 2023</Text>
        </View>
        <View style={Layout.box}>
          <Image
            style={Layout.photo}
            source={require('./assets/img/3.jpg')}
          />
          <Text style={Layout.name}>Chad Harmon</Text>
          <Text style={Layout.caption}>Tanjung Setia Beach</Text>
          <Text style={Layout.date}>September 3, 2023</Text>
        </View>
        <View style={Layout.box}>
          <Image
            style={Layout.photo}
            source={require('./assets/img/4.jpg')}
          />
          <Text style={Layout.name}>Harvey Jones</Text>
          <Text style={Layout.caption}>Rote Beach</Text>
          <Text style={Layout.date}>August 31, 2023</Text>
        </View>
        <View style={Layout.box}>
          <Image
            style={Layout.photo}
            source={require('./assets/img/5.jpg')}
          />
          <Text style={Layout.name}>Stanley Ball</Text>
          <Text style={Layout.caption}>Nihiwatu Beach</Text>
          <Text style={Layout.date}>August 13, 2023</Text>
        </View>
        <View style={Layout.box}>
          <Image
            style={Layout.photo}
            source={require('./assets/img/6.jpg')}
          />
          <Text style={Layout.name}>Daniel Rose</Text>
          <Text style={Layout.caption}>Nusa Penida Beach</Text>
          <Text style={Layout.date}>July 28, 2023</Text>
        </View>
        <View style={Layout.box}>
          <Image
            style={Layout.photo}
            source={require('./assets/img/7.jpg')}
          />
          <Text style={Layout.name}>Ayaan Barnes</Text>
          <Text style={Layout.caption}>Nusa Lembongan Beach</Text>
          <Text style={Layout.date}>July 6, 2023</Text>
        </View>
      </View>
    </ScrollView>
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
    height: 125,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  listCategory: {
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
  selected: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: colors.blue(0.3),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: '#1D60CC',
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
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
});
const Layout = StyleSheet.create({
  column: {
    marginHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  gallery: {
    margin: 20,
  },
  photo: {
    width: '100%',
    height: 175,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginVertical: 10,
  },
  box: {
    marginBottom: 5,
    alignItems: 'Left',
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
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#1D60CC',
    borderRadius: 20,
    height: 50,
    width: '50%',
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
  },
  selectedNavbar: {
    padding: 2,
    backgroundColor: '#143b85',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
  },
});
