import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {fontType} from '../theme';
const More = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Image source={require('../img/Profile/Profile.jpg')} style={styles.image}/>
                <Text style={styles.title}>Esa Mahardika</Text>
            </View>
        </View>
    );
}
export default More;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#252525',
        fontSize: 24,
        fontFamily: fontType['Pjs-Bold'],
    },
    box: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '30%',
        height: 100,
        borderRadius: 50,
    }
});