import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import { DirectLeft, GalleryImport } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from "../theme";
import axios from 'axios';

const Upload = () => {
  const [Post, setPost] = useState({
    location: "",
    name: "Tes",
    image: "https://www.pole-optitec.com/img/entreprises/default.jpg",
    postAt: Date(),
  });
  const Date = () => {
    var Now = new Date();
    var date = Now.getDate();
    var month = Now.getMonth() + 1;
    var year = Now.getFullYear();
    var monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    var monthName = monthNames[month];
    return monthName + ' ' + date + ', ' + year;
  }
  const handleChange = (key, value) => {
    setPost({
      ...Post,
      [key]: value,
    });
  };
  const navigation = useNavigation();
  const Upload = async () => {
    await axios
    .post(`https://65641b4cceac41c0761d6c5b.mockapi.io/wocoapp/surf`, {
        name: Post.name,
        image: Post.image,
        location: Post.location,
        postAt: Post.postAt,
    })
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <DirectLeft color='#1D60CC' variant="Linear" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={styles.borderDashed}>
          <TextInput
            placeholder="Location"
            value={Post.location}
            onChangeText={(text) => handleChange("location", text)}
            placeholderTextColor={colors.blue(0.6)}
            multiline
            style={styles.title}
          />
        </View>
        <View style={styles.imageUpload}>
            <GalleryImport size="32" color="#1D60CC"/>
            <Text style={styles.label}>Add Your Photo Here</Text>
        </View>
      </ScrollView>
        <TouchableOpacity style={styles.button} onPress={Upload}>
            <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
  },
  button: {
    backgroundColor: '#1D60CC',
    padding: 10,
    position: 'absolute',
    bottom: 40,
    right: 24,
    borderRadius: 15,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType["Pjs-SemiBold"],
    color: '#FFFFFF',
  },
  label: {
    fontSize: 12,
    fontFamily: fontType["Pjs-ExtraLight"],
    color: '#1D60CC',
  },
  borderDashed: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.blue(0.4),
  },
  title: {
    fontSize: 16,
    fontFamily: fontType["Pjs-SemiBold"],
    color: '#252525',
    padding: 0,
  },
  imageUpload: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.blue(0.4),
  }
});