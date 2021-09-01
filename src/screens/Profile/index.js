import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  HeaderProfile,
  Navbar,
  UserInfoProfile,
  UserInfoName,
  HightlightProfile,
  UserPost,
} from '../../component';

const ProfileScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.profileScreenWrapper}>
        <HeaderProfile />
        <UserInfoProfile />
        <UserInfoName />
        <HightlightProfile />
        <UserPost />
      </View>
      <Navbar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  profileScreenWrapper: {
    flex: 1,
  },
});

export default ProfileScreen;
