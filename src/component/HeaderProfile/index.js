import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderProfile = () => {
  return (
    <View style={styles.headerProfileWrapper}>
      <View style={styles.headerProfile}>
        <View style={styles.headerProfileUsername}>
          <Ionicons name="add" size={32} />
          <Text style={styles.headerProfileUsernameText}>firdausyah.22</Text>
        </View>
        <Ionicons name="menu-outline" size={32} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerProfileWrapper: {
    paddingHorizontal: 8,
    marginTop: 10,
  },
  headerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerProfileUsername: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerProfileUsernameText: {
    marginLeft: 15,
    fontSize: 18,
  },
});

export default HeaderProfile;
