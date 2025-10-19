import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconSL from 'react-native-vector-icons/SimpleLineIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SignupScreen = ({ navigation }) => {
  const [fullname, setfullname]=useState('');
  const [email, setemail]=useState('');
  const [password, setpassword]=useState('');
  const [confirmpassword, setconfirmpassword]=useState('');

  const SignupHandle = async()=>{
    try {
      const response = await axios.post('https://nondomestically-supersubtle-taisha.ngrok-free.dev/api/auth/user/register',{
      fullname:fullname,
      email: email,
      password: password,
      confirmpassword:confirmpassword
      });
      Alert.alert('Success','Register SucessFully')
      setemail('');
      setpassword('');
      
    } catch (error) {
      Alert.alert('Error','Register Failed')
    }
  }
  return (
    <SafeAreaView style={{flex:1,}}> 
    <View style={styles.container}>
      
      <View style={styles.headingcontainer}>
      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subheading}>Create an account to scroll, explore, and order delicious food easily!</Text>
      </View>
      <View style={styles.textfields}>
        <IconFA name="user-o" size={25} color="#343635" style={styles.nameicon} />
        <TextInput
        style={styles.inputbox}
        placeholder='Name'
        value={fullname}
        placeholderTextColor={"#5c5c5c"}
        onChangeText={setfullname}
  
        />
        <IconFA name="envelope-o" size={25} color="#343635" style={styles.nameicon2} />
        <TextInput
        style={styles.inputbox}
        placeholder='Email Address'
        placeholderTextColor={"#5c5c5c"}
        value={email}
        onChangeText={setemail}
  
        />
        <IconSL name="lock" size={27} color="#343635" style={styles.nameicon3} />
        <TextInput
        style={styles.inputbox}
        placeholder='Password'
        placeholderTextColor={"#5c5c5c"}
        value={password}
        onChangeText={setpassword}
  
        />
        <IconSL name="lock" size={27} color="#343635" style={styles.nameicon4} />
        <TextInput
        style={styles.inputbox}
        placeholder='Confirm Password'
        placeholderTextColor={"#5c5c5c"}
        value={confirmpassword}
        onChangeText={setconfirmpassword}
  
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={SignupHandle}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
        </View>

      </View>
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:5, marginTop:15}}>
        <Text style={{fontSize:15}}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize:15,color:"#E63D3D"}}>Login</Text>
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

export default SignupScreen

const styles = StyleSheet.create({
  container:{



  },
  heading:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'700',
    paddingTop:1,
    fontFamily:'Karla-Regular',
  },
  subheading:{
    fontSize:19,
    textAlign:'center',
    fontWeight:'400',
    paddingTop:1,
    fontFamily:'Karla-Regular',
  },
  headingcontainer:{
  },
  textfields:{
  marginTop:10,
  },
  inputbox:{
    height: hp('5%'),
    margin: 12,
    borderWidth: 1.5,
    padding: 8,
    textAlign:'left',
    paddingLeft:60,
    borderRadius:10,
    borderColor:'#868686',
    fontWeight:'500',
    fontSize:18,
    fontFamily:'Karla-Regular',
  },
  nameicon:{
    position:'absolute',
    top:hp('2.5% '),
    left:wp('8%')
  },
  nameicon2:{
    position:'absolute',
    top:hp('10% '),
    left:wp('8%')
  },
  nameicon3:{
    position:'absolute',
    top:hp('17.4% '),
    left:wp('8%')
  },
  nameicon4:{
    position:'absolute',
   top:hp('25% '),
    left:wp('8%')
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E63D3D',
    marginTop:7,
    marginHorizontal:12,
    height:50,
    borderRadius:10,
  },
  buttonText:{
    fontSize: 25,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
    fontFamily:'Karla-Regular',
  },
   containeror: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp("2%"),
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
    fontWeight: '600',
    letterSpacing: 1,
    fontFamily:'Karla-Regular',
  },
  belowbuttons:{
    height:hp('6%'),
    width:50,
    borderRadius:25,
    backgroundColor:'#e6e6e6',
    justifyContent:'center',
  },
})