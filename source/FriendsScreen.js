import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,ImageBackground } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Icon, Item, Label, Input } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

class FriendsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 0,
      heart: 0,
      clock: 0,
    };
  }
  add = (para) =>{
    if (para == "message") {
      let msg = this.state.message + 1
      this.setState({
        message: msg,
      })
    }else
    if (para == "heart") {
      let msg = this.state.heart + 1
      this.setState({
        heart: msg,
      })
    }else
    if (para == "clock") {
      let msg = this.state.clock + 1
      this.setState({
        clock: msg,
      })
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1, y: 0.0}} colors={['#864f86', '#719fd3']} style={styles.linearGradient}>
            <View style={styles.personImage}>
              <Image style={{width:350, height:500}} source={require('../assets/person.png')} />
            </View>
            <MaterialIcons name={'keyboard-arrow-left'} style={styles.backIcon} size={35} onPress={()=>{this.props.navigation.navigate('Login')}} />
            <Entypo name={'dots-three-vertical'} style={styles.threeDots} size={25}  />
            <View style={styles.messageView}>
              <MaterialCommunityIcons name={'message-text-outline'} style={{color:'#fff'}} size={25} onPress={()=>{this.add("message")}} />
              <Text style={{textAlign:'center', color:'#fff'}}>{this.state.message}</Text>
            </View>
            <View style={styles.heartView}>
              <MaterialCommunityIcons name={'heart-outline'} style={{color:'#fff'}} size={25} onPress={()=>{this.add("heart")}} />
              <Text style={{textAlign:'center', color:'#fff'}}>{this.state.heart}</Text>
            </View>
            <View style={styles.clockView}>
              <MaterialCommunityIcons name={'clock-outline'} style={{color:'#fff'}} size={25} onPress={()=>{this.add("clock")}} />
              <Text style={{textAlign:'center', color:'#fff'}}>{this.state.clock}</Text>
            </View>
            <View style={styles.bottomGr}>
              <Text style={{color:'#fff', textAlign:'left', fontSize:wp('5%'), paddingBottom:2, fontWeight:'bold'}}>Milla Jovovich</Text>
              <Text style={{color:'#fff', textAlign:'left', fontSize:wp('3.5%'), }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </Text>
              <TouchableOpacity style={styles.bottomBtn} onPress={()=>{this.props.navigation.navigate('Main')}}>
                <Text style={{textAlign:'center', color:'#fff', fontWeight:'bold'}}>Fallaps</Text>
                <Ionicons name={'caret-forward-circle'} style={{color:'#fff'}} size={25} /> 
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient:{
    width:wp('100%'),
    height:hp('100%'),
    display:'flex',
    borderWidth:1,
    borderColor:'#fff',
  },
  personImage: {
    height:hp('100%'),
    width:wp('100%'),
    // borderWidth:1,
    // borderColor:'#fff',
    // display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  backIcon:{
    position:'absolute',
    color:'#fff',
    top: hp('5%'),
    left: wp('5%')
  },
  threeDots:{
    position:'absolute',
    top:hp('5%'),
    right:wp('5%'),
    color:'#fff'
  },
  messageView:{
    position:'absolute',
    top: hp('20%'),
    left: wp('7%'),
  },
  heartView:{
    position:'absolute',
    top: hp('30%'),
    left: wp('7%'),
  },
  clockView:{
    position:'absolute',
    top: hp('40%'),
    left: wp('7%'),
  },
  bottomGr:{
    position:'absolute',
    alignSelf:'center',
    bottom:hp('5%'),
    width:wp('90%'),
    padding:10,
    borderRadius: wp('6%'),
    // borderWidth:1,
    // borderColor:'#fff',
    backgroundColor:'rgba(255,255,255,0.2)'
  },
  bottomBtn:{
    width:wp('25%'),
    height:hp('5%'), 
    display:'flex', 
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    backgroundColor: '#b9122e',
    borderTopLeftRadius:wp('4%'),
    borderTopRightRadius:wp('3%'),
    borderBottomRightRadius:wp('2%'),
  }

});

// ...

export default FriendsScreen;