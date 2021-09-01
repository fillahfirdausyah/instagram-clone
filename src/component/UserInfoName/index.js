import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const UserInfoName = () => {
  return (
    <View style={styles.userInfoNameWrapper}>
      <Text style={styles.userDisplayName}>Fillah Firdausyah</Text>
      <Text>IT Enthusiast</Text>
      <TouchableOpacity style={styles.editProfileBtn}>
        <Text style={styles.editProfileBtnText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoNameWrapper: {
    paddingHorizontal: 8,
    marginTop: 7,
  },
  userDisplayName: {
    fontSize: 17,
    fontWeight: '600',
  },
  editProfileBtn: {
    backgroundColor: '#0094F5',
    height: 34,
    borderRadius: 5,
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileBtnText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default UserInfoName;
