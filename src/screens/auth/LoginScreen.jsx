import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, StyleSheet, Text, TouchableOpacity, View ,StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconSL from 'react-native-vector-icons/SimpleLineIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const LoginScreen = ({ navigation }) => {
  const [email, setemail]=useState('');
  const [password, setpassword]=useState('');

  useEffect(()=>{
    const checkLoginStatus = async()=>{
      try {
         const token = await AsyncStorage.getItem('authToken');
         if(token){
          navigation.replace('Tabs')
         }
      } catch (error) {
        //saving Error
      }
    }
    checkLoginStatus();
  },[]);


  // 🔻 Commented out API login logic
  // const Loginhandle = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://nondomestically-supersubtle-taisha.ngrok-free.dev/api/auth/user/login',
  //       {
  //         email: email,
  //         password: password,
  //       }
  //     );

  //     const token = response.data.token;

  //     if (token) {
  //       await AsyncStorage.setItem('authToken', token);
  //       Alert.alert('Success', 'Login Successfully ✅');
  //       setemail('');
  //       setpassword('');
  //       navigation.replace('Tabs'); 
  //     } else {
  //       Alert.alert('Error', 'No token received from server');
  //     }

  //   } catch (error) {
  //     console.log('Login Error:', error.response?.data || error.message);
  //     Alert.alert('Error', 'Login Failed');
  //   }
  // };

  // ✅ Simple navigation for now
  const Loginhandle = () => {
    navigation.replace('Tabs');
  };

  
  return (
    <SafeAreaView style={{flex:1,}}> 
    <View style={styles.container}>
      
      <View style={styles.headingcontainer}>
      <Text style={styles.heading}>Log In</Text>
      <Text style={styles.subheading}>Login Your account to scroll, explore, and order delicious food easily!</Text>
      </View>
      <View style={styles.textfields}>
        
        <IconFA name="envelope-o" size={22} color="#343635" style={styles.nameicon2} />
        <TextInput
        style={styles.inputbox}
        placeholder='Email Address'
        value={email}
        onChangeText={setemail}
        placeholderTextColor={"#5c5c5c"}
  
        />
        <IconSL name="lock" size={27} color="#343635" style={styles.nameicon3} />
        <TextInput
        style={styles.inputbox}
        placeholder='Password'
        value={password}
        onChangeText={setpassword}
        placeholderTextColor={"#5c5c5c"}
        secureTextEntry
        />
        
        <View>
          <TouchableOpacity style={styles.button} onPress={Loginhandle}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
        </View>

      </View>
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:5, marginTop:15}}>
        <Text style={{fontSize:15}}>Create An Account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
          <Text style={{fontSize:15,color:"#E63D3D"}}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containeror}>
      <View style={styles.line} />
      <Text style={styles.textor}>OR</Text>
      <View style={styles.line} />
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', marginHorizontal:80, gap:20}}>
      <TouchableOpacity style={styles.belowbuttons}
       onPress={() => navigation.navigate('Login')}>
        <IconFA name="google" size={28} color="#343635" style={{alignSelf:'center'}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.belowbuttons}
       onPress={() => navigation.navigate('Login')}>
        <IconFA name="facebook" size={28} color="#343635" style={{alignSelf:'center'}} />   
      </TouchableOpacity>
      <TouchableOpacity style={styles.belowbuttons}
       onPress={() => navigation.navigate('Login')}>
        <IconFA name="apple" size={28} color="#343635" style={{alignSelf:'center'}} />   
      </TouchableOpacity>
    </View>
      
    </View>
    </SafeAreaView>   
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    margin:1,
  },
  heading:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'700',
    paddingTop:5,
    fontFamily:'Karla-Regular',
  },
  subheading:{
    fontSize:19,
    textAlign:'center',
    fontWeight:'400',
    paddingTop:10,
    fontFamily:'Karla-Regular',
    color:'#5c5c5c'
  },
  headingcontainer:{},
  textfields:{
    marginTop:40,
  },
  inputbox:{
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    padding: 8,
    textAlign:'left',
    paddingLeft:60,
    borderRadius:10,
    borderColor:'#868686',
    fontFamily:'Karla-Regular',
    fontWeight:'500',
    fontSize:18,
  },
  nameicon2:{
    position:'absolute',
    top:hp('2%'),
    left:wp('7%')
  },
  nameicon3:{
    position:'absolute',
    top:hp('8.7%'),
    left:wp('6.7%')
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E63D3D',
    marginTop:30,
    marginHorizontal:12,
    height:50,
    borderRadius:10,
  },
  buttonText:{
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '600',
    fontFamily:'Karla-Regular',
    letterSpacing: 0.25,
    color: 'white',
  },
  containeror: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#d1d1d1', 
  },
  textor: {
    marginHorizontal: 12,
    color: '#444',
    fontSize: 16,
    fontFamily:'Karla-Regular',
    fontWeight: '600',
    letterSpacing: 1,
  },
  belowbuttons:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:'#e6e6e6',
    justifyContent:'center',
  },
});
