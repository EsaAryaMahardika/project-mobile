/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Home, User, More} from 'iconsax-react-native';
const Nav = () => {
  return (
    <View style={Layout.navbar}>
        <View style={Layout.selectedNavbar}>
          <Home size="17" color="#FFFFFF"/>
        </View>
        <User size="17" color="#FFFFFF"/>
        <More size="17" color="#FFFFFF"/>
    </View>
  );
};
export default Nav;
const Layout = StyleSheet.create({
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
