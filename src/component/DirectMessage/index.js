import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dmData } from '../../data';

const DirectMessage = () => {
  const renderDm = ({ item }) => {
    if (item.message) {
      return (
        <View style={styles.dmBody}>
          <View style={styles.itemLeft}>
            <Image style={styles.userImage} source={item.profile_pic} />
            <View style={styles.dmInfo}>
              <Text style={[styles.userDisplayName, styles.haveMessage]}>
                {item.name}
              </Text>
              <Text style={styles.messageBody}>{item.message}</Text>
            </View>
          </View>
          <View style={styles.unreadMessageMark}></View>
          <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
        </View>
      );
    } else if (item.active) {
      return (
        <View style={styles.dmBody}>
          <View style={styles.itemLeft}>
            <Image style={styles.userImage} source={item.profile_pic} />
            <View style={styles.activeMark}></View>
            <View style={styles.dmInfo}>
              <Text style={styles.userDisplayName}>{item.name}</Text>
              <Text style={styles.activInfo}>Sedang Aktif</Text>
            </View>
          </View>
          <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
        </View>
      );
    } else {
      return (
        <View style={styles.dmBody}>
          <View style={styles.itemLeft}>
            <Image style={styles.userImage} source={item.profile_pic} />
            <View style={styles.dmInfo}>
              <Text style={styles.userDisplayName}>{item.name}</Text>
              <Text style={styles.activInfo}>{item.lastSeen}</Text>
            </View>
          </View>
          <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
        </View>
      );
    }
  };

  return (
    <>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.directMessageWrapper}>
        <Text style={styles.dmText}>Pesan</Text>
        <FlatList
          data={dmData}
          renderItem={renderDm}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        {/* <View style={styles.dmBody}>
            <View style={styles.itemLeft}>
              <Image
                style={styles.userImage}
                source={require('../../assets/profile/Profile1.jpg')}
              />
              <View style={styles.dmInfo}>
                <Text style={styles.userDisplayName}>Fillah Firdausyah</Text>
                <Text style={styles.activInfo}>Aktif 1 jam yang lalu</Text>
              </View>
            </View>
            <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
          </View>

          <View style={styles.dmBody}>
            <View style={styles.itemLeft}>
              <Image
                style={styles.userImage}
                source={require('../../assets/profile/Profile1.jpg')}
              />
              <View style={styles.dmInfo}>
                <Text style={[styles.userDisplayName, styles.haveMessage]}>
                  Fillah Firdausyah
                </Text>
                <Text style={styles.messageBody}>
                  Kamu kok ganteng banget...
                </Text>
              </View>
            </View>
            <View style={styles.unreadMessageMark}></View>
            <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
          </View>

          <View style={styles.dmBody}>
            <View style={styles.itemLeft}>
              <Image
                style={styles.userImage}
                source={require('../../assets/profile/Profile1.jpg')}
              />
              <View style={styles.activeMark}></View>
              <View style={styles.dmInfo}>
                <Text style={styles.userDisplayName}>Fillah Firdausyah</Text>
                <Text style={styles.activInfo}>Sedang Aktif</Text>
              </View>
            </View>
            <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
          </View> */}
      </View>
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  directMessageWrapper: {
    paddingHorizontal: 12,
  },
  dmText: {
    fontSize: 17,
    fontWeight: '700',
    marginTop: 20,
  },
  dmBody: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  userImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  dmInfo: {
    marginLeft: 17,
  },
  userDisplayName: {
    fontSize: 16,
    fontWeight: '400',
  },
  activInfo: {
    fontSize: 13,
    color: '#a8a8a8',
  },
  haveMessage: {
    fontWeight: '700',
  },
  messageBody: {
    fontWeight: 'bold',
  },
  unreadMessageMark: {
    marginLeft: 30,
    width: 11,
    height: 11,
    borderRadius: 50,
    backgroundColor: '#0094F5',
  },
  activeMark: {
    position: 'absolute',
    top: 35,
    left: 43,
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: '#78DE45',
    borderColor: '#fff',
    borderWidth: 2.5,
  },
});

export default DirectMessage;
