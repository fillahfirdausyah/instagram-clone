import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import userData from '../../data';

const Stories = () => {
  const renderUserStories = ({item}) => {
    return (
      <View style={styles.friendStoriesWrapper}>
        <View style={styles.friendStories}>
          <LinearGradient
            colors={['#9E2692', '#CF6C73', '#FAA958']}
            style={styles.storiesThumbnailWrapper}>
            <Image style={styles.storiesThumbnail} source={item.profile_pic} />
          </LinearGradient>
          <Text style={styles.storiesName}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.storiesWrapper}>
      <View style={styles.currentUserWrapper}>
        <TouchableOpacity>
          <Image
            style={styles.currentUser}
            source={require('../../assets/profile/Profile1.jpg')}
          />
          <View style={styles.addIcon}>
            <Ionicons
              name="add-circle"
              color="#0094F5"
              size={25}
              style={{marginTop: -2}}
            />
          </View>
          <Text style={styles.storiesName}>Your Story</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={userData}
        renderItem={renderUserStories}
        keyExtractor={item => item.id}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={{height: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  storiesWrapper: {
    paddingLeft: 8,
    paddingVertical: 10,
    height: 120,
    flexDirection: 'row',
    marginTop: 1,
    borderBottomColor: '#B1A9A9',
    borderBottomWidth: 0.4,
  },
  currentUserWrapper: {
    marginRight: 8,
  },
  currentUser: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  addIcon: {
    backgroundColor: '#fff',
    width: 23,
    height: 23,
    position: 'absolute',
    left: 45,
    top: 46,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendStories: {
    textAlign: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  storiesThumbnailWrapper: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storiesThumbnail: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1.7,
  },
  storiesName: {
    marginTop: 8,
  },
});

export default Stories;
