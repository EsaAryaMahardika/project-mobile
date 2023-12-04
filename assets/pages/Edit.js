import React, { useEffect, useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import { DirectLeft, GalleryImport } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from "../theme";
import axios from 'axios';

const Edit = ({route}) => {
  const {ID} = route.params;
  const [Post, setPost] = useState({
    name: "Tes",
    image: "https://www.pole-optitec.com/img/entreprises/default.jpg",
    location: "",
    postAt: "Tes"
  });
  const handleChange = (key, value) => {
    setPost({
      ...Post,
      [key]: value,
    });
  };
  const navigation = useNavigation();
  useEffect(() => {
    getID();
  }, [ID]);
  const getID = async () => {
    const response = await axios.get(
        `https://65641b4cceac41c0761d6c5b.mockapi.io/wocoapp/surf/${ID}`,
    );
    setPost({
        name : response.data.name,
        image : response.data.image,
        location : response.data.location,
        postAt : response.data.postAt
    })
  };
  const Update = async () => {
    await axios
    .put(`https://65641b4cceac41c0761d6c5b.mockapi.io/wocoapp/surf/${ID}`, {
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
        <View style={styles.border}>
          <TextInput
            placeholder="Location"
            value={Post.location}
            onChangeText={text => handleChange("location", text)}
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
        <TouchableOpacity style={styles.button} onPress={Update}>
            <Text style={styles.buttonLabel}>Edit</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Edit;

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
  border: {
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