import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navbar, HeaderDm, SearchDm, DirectMessage } from '../../component';

const DirectMessageScreen = () => {
  return (
    <>
      <View style={styles.directMessageWrapper}>
        <HeaderDm />
        <SearchDm />
        <DirectMessage />
      </View>
      <Navbar />
    </>
  );
};

const styles = StyleSheet.create({
  directMessageWrapper: {
    flex: 1,
  },
});

export default DirectMessageScreen;
