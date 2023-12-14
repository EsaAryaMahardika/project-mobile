import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image} from "react-native";
import { DirectLeft, GalleryImport, Add } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from "../theme";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
const Upload = () => {
  const [Post, setPost] = useState({
    location: "",
    name: "Esa Arya Mahardika",
    image: "",
    PostAt: "",
  });
  const Tanggal = () => {
    var Now = new Date();
    var date = Now.getDate();
    var month = Now.getMonth();
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
  const [image, setImage] = useState(null);
  const UploadPost = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const reference = storage().ref(`img/${filename+'.'+extension}`);
    await reference.putFile(image);
    const url = await reference.getDownloadURL();
    await firestore().collection('post').add({
      location: Post.location,
      name: Post.name,
      image: url,
      PostAt: Tanggal(),
    });
    navigation.navigate('Home');
  };
  const Uploadimg = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        setImage(image.path);
      });
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
        {image ? (
          <View style={{position: 'relative'}}>
            <Image
              style={{width: '100%', height: 150, borderRadius: 5}}
              source={{uri: image,}}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: colors.blue(),
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add size='20' variant='Linear' color='#FFFFFF' style={{transform: [{rotate: '45deg'}]}}/>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={Uploadimg}>
          <View style={styles.imageUpload}>
            <GalleryImport size="32" color="#1D60CC"/>
            <Text style={styles.label}>Add Your Photo Here</Text>
          </View>
        </TouchableOpacity>
        )}
      </ScrollView>
        <TouchableOpacity style={styles.button} onPress={UploadPost}>
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