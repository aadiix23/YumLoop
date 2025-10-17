import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');
const scale = width / 375;  
const verticalScale = height / 812; 

export default function OrderDetails() {
  const [selectedPayment, setSelectedPayment] = useState('COD');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height * 0.03 }}
      >
        <Text style={styles.header}>Order Details</Text>

        <View style={styles.mapContainer}>
          <Image
            source={{
              uri: 'https://cache.careers360.mobi/media/colleges/staticmap/2025/5/16/1374.png',
            }}
            style={styles.map}
            resizeMode="cover"
          />
        </View>

        <View style={styles.card}>
          {/* Delivery Address */}
          <View style={styles.section}>
            <View style={styles.row}>
              <Icon name="map-marker" size={16 * scale} color="#1D2D4C" />
              <Text style={styles.sectionTitle}>Delivery Address</Text>
              <Icon
                name="pencil-outline"
                size={14 * scale}
                color="#1D2D4C"
                style={{ marginLeft: 'auto' }}
              />
            </View>
            <Text style={styles.address}>
              SS1/237, Sec - A, Aliganj, Lucknow, 226021
            </Text>
          </View>

          {/* Payment Method */}
          <View style={styles.section}>
            <View style={styles.row}>
              <Icon name="credit-card-outline" size={16 * scale} color="#1D2D4C" />
              <Text style={styles.sectionTitle}>Payment Method</Text>
            </View>

            {['COD', 'UPI', 'CARD'].map((method, index) => (
              <TouchableOpacity
                key={index}
                style={styles.paymentRow}
                onPress={() => setSelectedPayment(method)}
              >
                <View style={styles.radioOuter}>
                  {selectedPayment === method && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.paymentText}>
                  {method === 'COD'
                    ? 'COD ( Cash On Delivery )'
                    : method === 'UPI'
                    ? 'UPI'
                    : 'Credit / Debit Card'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Order Summary */}
          <View style={styles.section}>
            <View style={styles.row}>
              <Icon name="file-document-outline" size={16 * scale} color="#1D2D4C" />
              <Text style={styles.sectionTitle}>Order Summary</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.itemText}>1 x Cheese Burger</Text>
              <Text style={styles.itemPrice}>150</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.itemText}>1 x French fries with honey sauce</Text>
              <Text style={styles.itemPrice}>350</Text>
            </View>

            <View style={styles.line} />
            <View style={styles.summaryRow}>
              <Text style={styles.itemText}>Subtotal</Text>
              <Text style={styles.itemPrice}>500</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.itemText}>Delivery Fee</Text>
              <Text style={styles.itemPrice}>77</Text>
            </View>

            <View style={styles.line} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>577</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.placeOrderBtn}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By completing this order, I agree to all terms & conditions
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 * scale },
  header: {
    textAlign: 'center',
    fontSize: 28 * scale,
    fontWeight: '700',
    paddingTop: 5 * verticalScale,
    fontFamily: 'Karla-Regular',
    color: '#1D2D4C',
    paddingBottom: 5 * verticalScale,
  },
  mapContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    height: height * 0.18,
    marginBottom: 8 * verticalScale,
  },
  map: { width: '100%', height: '100%' },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10 * scale,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  section: { marginBottom: 10 * verticalScale },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 * verticalScale },
  sectionTitle: { fontSize: 16 * scale, fontWeight: '600', marginLeft: 6, color: '#1D2D4C' },
  address: { fontSize: 14 * scale, color: '#1D2D4C80', marginLeft: 20 },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3 * verticalScale,
    marginLeft: 20,
  },
  radioOuter: {
    height: 14 * scale,
    width: 14 * scale,
    borderRadius: 7 * scale,
    borderWidth: 1.5,
    borderColor: '#1D2D4C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  radioInner: {
    height: 6 * scale,
    width: 6 * scale,
    backgroundColor: '#EE2222',
    borderRadius: 3 * scale,
  },
  paymentText: { fontSize: 14 * scale, color: '#1D2D4C80' },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2 * verticalScale,
  },
  itemText: { fontSize: 14 * scale, color: '#1D2D4C80' },
  itemPrice: { fontSize: 14 * scale, color: '#1D2D4C', fontWeight: '500' },
  line: { height: 1, backgroundColor: '#ddd', marginVertical: 4 * verticalScale },
  totalLabel: { fontSize: 16 * scale, fontWeight: '700', color: '#1D2D4C' },
  totalValue: { fontSize: 16 * scale, fontWeight: '700', color: '#1D2D4C' },
  placeOrderBtn: {
    backgroundColor: '#EE2222',
    paddingVertical: 10 * verticalScale,
    borderRadius: 20 * scale,
    marginTop: 10 * verticalScale,
    alignItems: 'center',
    elevation: 2,
    width: width * 0.85,
    alignSelf: 'center',
  },
  placeOrderText: { color: '#fff', fontWeight: '700', fontSize: 18 * scale },
  footerText: {
    textAlign: 'center',
    fontSize: 12 * scale,
    color: '#1D2D4C80',
    marginVertical: 5 * verticalScale,
  },
});
