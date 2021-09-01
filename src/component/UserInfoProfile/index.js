import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserInfoProfile = () => {
  return (
    <View style={styles.userInfoProfileWrapper}>
      <View style={styles.userInfo}>
        <View style={styles.userInfoWrapper}>
          <Image
            style={styles.userInfoPicture}
            source={require('../../assets/profile/Profile1.jpg')}
          />
          <View style={styles.addBtnWrapper}>
            <Ionicons name="add" size={25} color="#fff" style={styles.addBtn} />
          </View>
        </View>
        <View style={styles.postWrapper}>
          <Text style={styles.infoText}>0</Text>
          <Text style={styles.infoTextLabel}>Psotingan</Text>
        </View>
        <View style={styles.followerWrapper}>
          <Text style={styles.infoText}>100RB</Text>
          <Text style={styles.infoTextLabel}>Pengikut</Text>
        </View>
        <View style={styles.followingWrapper}>
          <Text style={styles.infoText}>200</Text>
          <Text style={styles.infoTextLabel}>Mengikuti</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoProfileWrapper: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  userInfoPicture: {
    width: 90,
    height: 90,
    borderRadius: 60,
  },
  addBtnWrapper: {
    width: 28,
    height: 28,
    position: 'absolute',
    backgroundColor: '#0094F5',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 68,
    top: 58,
    borderColor: '#FFF',
    borderWidth: 1.7,
  },
  addBtn: {},
  userInfoWrapper: {
    flexDirection: 'row',
  },
  postWrapper: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  followerWrapper: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  followingWrapper: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 17,
    fontWeight: '700',
  },
  infoTextLabel: {
    fontSize: 14,
    fontWeight: '400',
  },
});

export default UserInfoProfile;
