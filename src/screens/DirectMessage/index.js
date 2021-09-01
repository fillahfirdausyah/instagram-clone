import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navbar, HeaderDm, SearchDm, DirectMessage } from '../../component';

const DirectMessageScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.directMessageWrapper}>
        <HeaderDm navigation={navigation} />
        <SearchDm />
        <DirectMessage />
      </View>
      <Navbar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  directMessageWrapper: {
    flex: 1,
  },
});

export default DirectMessageScreen;
