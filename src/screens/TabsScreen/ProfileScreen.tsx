import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');
const scale = width / 375; 
const verticalScale = height / 812;

const profile = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.title}>
        <Text style={[styles.titletext, { fontSize: 30 * scale, paddingTop: 25 * verticalScale }]}>My Account</Text>

        <View style={styles.usercard}>
          <Image
            style={[styles.userImage, { height: 60 * verticalScale, width: 60 * verticalScale, borderRadius: 30 * verticalScale }]}
            source={require('../../assets/images/logores.jpg')}
          />
          <Text style={{ paddingTop: 6 * verticalScale, fontSize: 20 * scale, fontWeight: '700', color: '#1D2D4C', fontFamily: 'Karla-Regular' }}>
            Alok Verma
          </Text>
          <Text style={{ paddingBottom: 8 * verticalScale, fontSize: 14 * scale, color: '#1D2D4C80', fontFamily: 'Karla-Regular' }}>
            @alokverma
          </Text>
        </View>

        <View style={{ alignItems: 'center', paddingTop: 9 * verticalScale, paddingBottom: 8 * verticalScale }}>
          <TouchableOpacity style={{ height: 35 * verticalScale, width: width * 0.3, backgroundColor: '#EE2222', justifyContent: 'center', alignItems: 'center', borderRadius: 11 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 * scale }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={{ borderWidth: 0.3, height: 1, opacity: 0.4, marginVertical: 10 * verticalScale }} />

        {/* Buttons */}
        <View style={{ flexDirection: 'row', marginBottom: 15 * verticalScale,  marginLeft: wp('9%') }}>
          <TouchableOpacity
            style={{
              height: 45 * verticalScale,
              width: width * 0.85,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 12 * scale,
              elevation:11,
              borderRadius: 8,
              gap: 15 * scale,
              backgroundColor: "#FFF9F9",
              borderWidth: 0.5,
              borderColor: "#000000",
            }}
          >
            <FontAwesome name="cog" size={25 * scale} color="#5A5F74" />
            <View style={{ width: 1, height: 25 * verticalScale, backgroundColor: '#5A5F74', marginVertical: (45 * verticalScale - 25 * verticalScale)/2, marginHorizontal: 10 }} />
            <Text style={{ color: '#1D2D4C80', fontWeight: '400', fontSize: 16 * scale, fontFamily: 'Karla-Regular' }}>Setting                                   {'>'}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 15 * verticalScale,  marginLeft: wp('9%') }}>
          <TouchableOpacity
            style={{
              height: 45 * verticalScale,
              width: width * 0.85,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 12 * scale,
              borderRadius: 8,
              gap: 15 * scale,
              elevation:11,
              backgroundColor: "#FFF9F9",
              borderWidth: 0.5,
              borderColor: "#000000",
            }}
          >
            <FontAwesome name="list-alt" size={25 * scale} color="#5A5F74" />
            <View style={{ width: 1, height: 25 * verticalScale, backgroundColor: '#5A5F74', marginVertical: (45 * verticalScale - 25 * verticalScale)/2, marginHorizontal: 10 }} />
            <Text style={{ color: '#1D2D4C80', fontWeight: '400', fontSize: 16 * scale, fontFamily: 'Karla-Regular' }}>My Order                              {'>'}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 15 * verticalScale,  marginLeft: wp('9%') }}>
          <TouchableOpacity
            style={{
              height: 45 * verticalScale,
              width: width * 0.85,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 12 * scale,
              elevation:11,
              borderRadius: 8,
              gap: 15 * scale,
              backgroundColor: "#FFF9F9",
              borderWidth: 0.5,
              borderColor: "#000000",
            }}
          >
            <FontAwesome name="address-book" size={25 * scale} color="#5A5F74" />
            <View style={{ width: 1, height: 25 * verticalScale, backgroundColor: '#5A5F74', marginVertical: (45 * verticalScale - 25 * verticalScale)/2, marginHorizontal: 10 }} />
            <Text style={{ color: '#1D2D4C80', fontWeight: '400', fontSize: 16 * scale, fontFamily: 'Karla-Regular' }}>Address                                {'>'}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 15 * verticalScale,  marginLeft: wp('9%') }}>
          <TouchableOpacity
            style={{
              height: 45 * verticalScale,
              width: width * 0.85,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 12 * scale,
              borderRadius: 8,
              elevation:11,
              gap: 15 * scale,
              backgroundColor: "#FFF9F9",
              borderWidth: 0.5,
              borderColor: "#000000",
            }}
          >
            <FontAwesome name="lock" size={25 * scale} color="#5A5F74" />
            <View style={{ width: 1, height: 25 * verticalScale, backgroundColor: '#5A5F74', marginVertical: (45 * verticalScale - 25 * verticalScale)/2, marginHorizontal: 10 }} />
            <Text style={{ color: '#1D2D4C80', fontWeight: '400', fontSize: 16 * scale, fontFamily: 'Karla-Regular' }}>Change Password                {'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Divider Line */}
        <View style={{ borderWidth: 0.3, height: 1, opacity: 0.4, marginVertical: 10 * verticalScale, marginHorizontal: 25 }} />

        <View style={{ flexDirection: 'row', marginBottom: 15 * verticalScale, marginLeft: wp('9%') }}>
          <TouchableOpacity
            style={{
              height: 45 * verticalScale,
              width: width * 0.85,
              flexDirection: 'row',
              alignItems: 'center',
              elevation:11,
              paddingLeft: 12 * scale,
              borderRadius: 8,
              gap: 15 * scale,
              backgroundColor: "#FFF9F9",
              borderWidth: 0.5,
              borderColor: "#000000",
            }}
          >
            <FontAwesome name="question-circle-o" size={25 * scale} color="#5A5F74" />
            <View style={{ width: 1, height: 25 * verticalScale, backgroundColor: '#5A5F74', marginVertical: (45 * verticalScale - 25 * verticalScale)/2, marginHorizontal: 10 }} />
            <Text style={{ color: '#1D2D4C80', fontWeight: '400', fontSize: 16 * scale, fontFamily: 'Karla-Regular' }}>Help & Support                    {'>'}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 15 * verticalScale,  marginLeft: wp('9%') }}>
          <TouchableOpacity
            style={{
              height: 45 * verticalScale,
              width: width * 0.85,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 12 * scale,
              elevation:11,
              borderRadius: 8,
              gap: 15 * scale,
              backgroundColor: "#FFF9F9",
              borderWidth: 0.5,
              borderColor: "#000000",
            }}
          >
            <FontAwesome name="chain-broken" size={25 * scale} color="#5A5F74" />
            <View style={{ width: 1, height: 25 * verticalScale, backgroundColor: '#5A5F74', marginVertical: (45 * verticalScale - 25 * verticalScale)/2, marginHorizontal: 10 }} />
            <Text style={{ color: '#1D2D4C80', fontWeight: '400', fontSize: 16 * scale, fontFamily: 'Karla-Regular' }}>Log Out                                {'>'}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9F9",
    marginTop: height * 0.05,
  },
  title: {},
  titletext: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#1D2D4C',
  },
  usercard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15 * verticalScale,
  },
  userImage: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});
