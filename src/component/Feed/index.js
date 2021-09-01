import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {feedData} from '../../data';

const {width, height} = Dimensions.get('window');

const Feed = () => {
  const renderFeed = ({item}) => {
    return (
      <>
        <View style={styles.feedWrapper}>
          <View style={styles.userInfoWrapper}>
            <View style={styles.userInfo}>
              <Image style={styles.userInfoImage} source={item.profile_pic} />
              <Text style={styles.userName}>{item.name}</Text>
            </View>
            <Feather name="more-vertical" size={27} />
          </View>
        </View>
        <View style={styles.feedContentWrapper}>
          <View style={styles.feedContentImageWrapper}>
            <Image style={styles.feedContent} source={item.content} />
          </View>
          <View style={styles.feedContentActionWrapper}>
            <View style={styles.feedContentActionBtn}>
              <TouchableOpacity>
                <Ionicons
                  style={styles.feedContentActionBtnIcon}
                  name="heart-outline"
                  size={27}
                />
              </TouchableOpacity>
              <Ionicons
                style={styles.feedContentActionBtnIcon}
                name="chatbubble-outline"
                size={27}
              />
              <Feather
                style={styles.feedContentActionBtnIcon}
                name="send"
                size={27}
              />
            </View>
            <Feather name="bookmark" size={27} />
          </View>
          <View style={styles.feedContentTextWrapper}>
            <Text style={styles.feedContentTextuserName}>{item.name}</Text>
            <Text>{item.text}</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <FlatList
        data={feedData}
        renderItem={renderFeed}
        keyExtractor={item => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  feedWrapper: {
    marginTop: 10,
    // borderTopColor: '#B1A9A9',
    // borderTopWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoImage: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  userName: {
    marginLeft: 7,
    fontSize: 13,
    fontWeight: '600',
  },
  feedContentWrapper: {
    width: width,
    marginTop: -8,
  },
  feedContentImageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedContent: {
    width: '100%',
    height: 350,
  },
  feedContentActionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 12,
  },
  feedContentActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feedContentActionBtnIcon: {
    marginRight: 12,
  },
  feedContentTextWrapper: {
    paddingHorizontal: 8,
    marginTop: 8,
  },
  feedContentTextuserName: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Feed;
