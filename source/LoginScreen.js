import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Icon, Item, Label, Input } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pwdView: true
    };
  }

  setPwdView = () => {
    this.setState({
      pwdView: !this.state.pwdView,
    })
    
    console.log(this.state.pwdView)
  }

  render() {
    return (
      <Container>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column', flex: 1}}
        >
          <View style={styles.logoView}>
            <Image style={styles.logoImage} source={require('../assets/logo.png')} />
          </View>
          <View style={styles.formGroup}>
            <View>
              <Text style={{color: '#9f959e'}}>Email</Text>
              <Item success={false} style={{display: "flex"}}>
                <Icon name={'mail-outline'} style={{color:"#fff"}} />
                <Input style={{color: "#fff"}} placeholder={'email'} />
              </Item>
            </View>
            <View style={{marginTop:30}}>
              <View style={styles.labelGroup}>
                <Text style={{color: '#9f959e'}}>Password</Text>
                <Text style={{color: '#eead2d'}}>Forgot Password?</Text>
              </View>
              <Item success={false} style={{display: "flex"}}>
                <Icon name={'lock-closed-outline'} style={{color:"#eead2d"}} />
                <Input style={{color: "#fff"}} secureTextEntry={this.state.pwdView} placeholder={'password'} />
                <Icon onPress={this.setPwdView} name={this.state.pwdView?'eye-outline':'eye-off-outline'} style={{color:"#fff"}} />
              </Item>
            </View>
            <View style={styles.thirdGr}>
              <View style={styles.iconSet}>
                <View style={styles.oneIcon}>
                  <Fontisto name={'facebook'} style={{color: '#fff'}} size={15} />
                </View>
                <View style={styles.oneIcon}>
                  <Fontisto name={'google'} style={{color: '#fff'}} size={15} />
                </View>
                <View style={styles.oneIcon}>
                  <Fontisto name={'instagram'} style={{color: '#fff'}} size={15} />
                </View>
              </View>
              <TouchableOpacity style={styles.loginButton} onPress={()=>{this.props.navigation.navigate('Friends')}}>
                <Text style={{fontWeight:'bold'}}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.emptyBottom}>
            <Text style={{color:'#fff'}}>Don't have an account? Signup here</Text>
            <Text style={{color:'#fff', fontSize:8}}>Powered by THE WWHNG</Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: '#000',
  },
  logoView: {
    alignSelf: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#fff',
    height: hp('30%'),
  },
  logoImage: {
    width: 200,
    height: 200
  },
  formGroup: {
    alignSelf: 'center', 
    justifyContent: 'center',
    // alignItems:'flex-end',
    width: '90%',
    height: hp('35%'),
    // borderWidth: 1,
    // borderColor: '#fff',
  },
  emptyBottom: {
    width: '100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    // borderWidth: 1,
    // borderColor: '#f00',
    height: hp('30%'),
  },
  labelGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 0.1,
    // borderColor: '#f00',
    color: '#fff'
  },
  thirdGr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    // borderWidth: 1,
    // borderColor: '#f00',
    height:'30%',
    alignItems:'center'
    // paddingTop: 20
  },
  iconSet:{
    display: 'flex',
    flexDirection: 'row'
  },
  oneIcon:{
    width: wp('8%'),
    height: wp('8%'),
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#262626',
    borderRadius: 3,
    marginRight: 5
  },
  loginButton:{
    width:100,
    height:30,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'#eead2d'
  }

});

// ...

export default HomeScreen;