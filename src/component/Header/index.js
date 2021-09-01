import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerWrapper}>
      <Image
        style={styles.headerLogo}
        source={require('../../assets/Instagram_logo.png')}
      />
      <View style={styles.headerIconWrapper}>
        <TouchableOpacity style={styles.addIcon}>
          <Ionicons name="add-outline" style={styles.icon} size={27} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="heart-outline" size={27} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.push('DirectMessage')}>
          <Feather name="send" size={27} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 13,
    height: 53,
    elevation: 9,
  },
  headerLogo: {
    width: 100,
    height: 36,
  },
  headerIconWrapper: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 18,
  },
  addIcon: {
    width: 25,
    height: 25,
    borderColor: '#000',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  icon: {
    width: 25,
    height: 28,
  },
});

export default Header;
