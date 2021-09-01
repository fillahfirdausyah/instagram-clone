import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Feed, Header, Navbar, Stories} from '../../component';

const HomeScreeen = ({navigation}) => {
  return (
    <>
      <View style={styles.homeScreenWrapper}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Stories />
          <Feed />
        </ScrollView>
      </View>
      <Navbar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  homeScreenWrapper: {
    flex: 1,
    // backgroundColor: 'red',
  },
});

export default HomeScreeen;
