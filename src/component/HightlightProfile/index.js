import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HightlightProfile = () => {
  return (
    <View style={styles.hightlightProfileWrapper}>
      <Text style={{fontSize: 15, fontWeight: '600'}}>Sorotan Cerita</Text>
      <Text>Simpan cerita favorite di profile Anda</Text>
      <View style={styles.hightlightStoryWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.addButtonWrapper}>
            <View style={styles.addButton}>
              <Ionicons name="add" size={37} style={{marginLeft: 3}} />
            </View>
          </View>
          <View style={styles.hightlightStory}></View>
          <View style={styles.hightlightStory}></View>
          <View style={styles.hightlightStory}></View>
          <View style={styles.hightlightStory}></View>
          <View style={styles.hightlightStory}></View>
          <View style={styles.hightlightStory}></View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hightlightProfileWrapper: {
    paddingHorizontal: 8,
    marginTop: 10,
  },
  hightlightStoryWrapper: {
    marginTop: 15,
    flexDirection: 'row',
  },
  addButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    width: 63,
    height: 63,
    borderColor: '#000',
    borderWidth: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 15,
  },
  hightlightStory: {
    width: 63,
    height: 63,
    backgroundColor: '#cccecc',
    borderRadius: 50,
    marginRight: 15,
  },
});

export default HightlightProfile;
