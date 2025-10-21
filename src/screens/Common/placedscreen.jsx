import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const placedscreen = () => {
  return (
    <View>
       <LottieView source={require('../../assets/images/Sucess.json')} autoPlay loop 
       style={styles.animation}
       />
       <Text style={styles.textMain}>Order Placed SuccessFully</Text>
       <Text style={styles.textSub}>Your Food Will Be Delivered In 30 Minutes</Text>
    </View>
  )
}

export default placedscreen

const styles = StyleSheet.create({
    animation:{
     height:hp("50%"),
     width:wp("100%"),
     marginTop:hp("16%")
    },
    textMain:{
        fontSize:28,
        textAlign:"center",
        fontFamily:'Karla-Regular',
        fontWeight:'700'

    },
     textSub:{
        fontSize:20,
        textAlign:"center",
        marginTop:hp("2%"),
        marginLeft:hp("4%"),
        marginRight:hp("4%"),
        fontFamily:'Karla-Regular',

    }
})