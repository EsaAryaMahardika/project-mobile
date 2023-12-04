/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from "react";
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, RefreshControl} from 'react-native';
import { MoreSquare } from "iconsax-react-native";
import {fontType} from '../theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Feature from './Feature';
import axios from 'axios';
const GalleryTemplate = ({item}) => {
  const [isOverflowed, setIsOverflowed] = useState(false);
  const navigation = useNavigation();
  const toggleOverflow = () => {
    setIsOverflowed(!isOverflowed);
  };
  const Edit = () => {
    navigation.navigate('Edit', {ID:item.id})
  }
  const Delete = async () => {
   await axios.delete(`https://65641b4cceac41c0761d6c5b.mockapi.io/wocoapp/surf/${item.id}`)
  }
  return (
    <View style={Layout.box}>
      <Image style={Layout.photo} source={{ uri:item.image }} />
      <View style={Layout.row}>
        <View>
          <Text style={Layout.name}>{item.name}</Text>
          <Text style={Layout.caption}>{item.location}</Text>
          <Text style={Layout.date}>{item.postAt}</Text>
        </View>
        <View style={Layout.more}>
          <TouchableOpacity onPress={toggleOverflow}>
            <View style={Layout.overflowButton}>
              <MoreSquare size="30" color="#1D60CC"/>
            </View>
          </TouchableOpacity>
          {isOverflowed && (
            <View style={Layout.overflow}>
              <TouchableOpacity style={Layout.choice} onPress={Delete}>
                <Text style={{ color:'red' }}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Layout.choice} onPress={Edit}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
const Gallery = () => {
  const [Post, setPost] = useState([]);
  const [fresh, setfresh] = useState(false);
  const getPost = async () => {
      const response = await axios.get(
        'https://65641b4cceac41c0761d6c5b.mockapi.io/wocoapp/surf',
      );
      setPost(response.data);
  };
  const onfresh = useCallback(() => {
    setfresh(true);
    setTimeout(() => {
      getPost()
      setfresh(false);
    }, 1500);
  }, []);
  useFocusEffect(
    useCallback(() => {
      getPost();
    }, [])
  );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={fresh} onRefresh={onfresh} />
      }
    >
      <Feature />
      <Text style={Layout.header}>Try it!</Text>
      {Post.map(item => (
        <GalleryTemplate key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};
export default Gallery;
const Layout = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  more: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
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
  overflowButton: {
    paddingVertical: 15,
  },
  overflow: {
    width: 100,
    height: 70
  },
  choice: {
    height: 35,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
