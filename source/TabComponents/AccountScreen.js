import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Icon, Item, Label, Input } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const { width } = Dimensions.get('window');

function AccountScreen(props) {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(0);

  const clickItem = (order) => {
    if (order == 'first') {
      setFirst(1);
      setSecond(0);
      setThird(0);
    }
    if (order == 'second') {
      setFirst(0);
      setSecond(1);
      setThird(0);
    }
    if (order == 'third') {
      setFirst(0);
      setSecond(0);
      setThird(1);
    }
  }
  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.header}>Poll of the day</Text>
        <Text style={styles.title}>How many cups of the coffe do you drink each day?</Text>
        <View style={styles.buttonCon}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={first == 1 ? styles.buttonActive : styles.button}
            onPress={() => {
              clickItem('first')
            }}>
            {first === 1 && <View style={{ width: 2, backgroundColor: '#efcc4c' }}></View>}
            <Text style={{ marginLeft: 10, color: '#fff', textAlignVertical: 'center' }}>Less then 1 cup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={second == 1 ? styles.buttonActive : styles.button}
            onPress={() => {
              clickItem('second')
            }}>
            {second === 1 && <View style={{ width: 2, backgroundColor: '#efcc4c' }}></View>}
            <Text style={{ marginLeft: 10, color: '#fff', textAlignVertical: 'center' }}>1-4cups of coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={third == 1 ? styles.buttonActive : styles.button}
            onPress={() => {
              clickItem('third')
            }}>
            {third === 1 && <View style={{ width: 2, backgroundColor: '#efcc4c' }}></View>}
            <Text style={{ marginLeft: 10, color: '#fff', textAlignVertical: 'center' }}>5cups of coffee or more</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.submitButton}
          onPress={() => {
          }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center' }}>Vote</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000'
  },
  header: {
    color: '#fff',
    backgroundColor: '#272727',
    width: width,
    height: hp('10%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: wp('7%')
  },
  title: {
    color: '#fff',
    width: '80%',
    fontSize: wp('8%'),
    marginTop: 30
  },
  buttonCon: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    // borderColor: '#fff',
    // borderWidth: 2,
    borderRadius: 2,
    marginTop: 30
  },
  button: {
    backgroundColor: '#000',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15
  },
  buttonActive: {
    backgroundColor: '#121212',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    marginBottom: 15
  },
  submitButton: {
    width: '85%',
    backgroundColor: '#efcc4c',
    height: 40,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 40
  }

});


export default AccountScreen;