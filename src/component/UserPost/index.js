import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const UserPost = () => {
  return (
    <View style={styles.userPostWrapper}>
      <View style={styles.sectionWrapper}>
        <View style={styles.sectionPostWrapper}>
          <MaterialIcons name="grid-on" size={30} />
        </View>
        <View style={styles.sectionTagtWrapper}>
          <FontAwesome5 name="user-tag" size={30} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userPostWrapper: {
    paddingHorizontal: 8,
    marginTop: 20,
    borderTopColor: '#3d3d3d',
    borderTopWidth: 0.3,
  },
  sectionWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  sectionPostWrapper: {
    paddingBottom: 6,
    width: 90,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   sectionTagtWrapper: {
  //     paddingBottom: 6,
  //     width: 90,
  //     borderBottomColor: '#000',
  //     borderBottomWidth: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
});

export default UserPost;
