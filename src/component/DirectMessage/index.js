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
  // const renderDm = ({ item }) => {
  //   return (
  //     <View style={styles.dmBody}>
  //       <Image style={styles.userImage} source={item.profile_pic} />
  //       <View style={styles.dmInfo}>
  //         <Text style={styles.userDisplayName}>{item.name}</Text>
  //         <Text style={styles.activInfo}>Aktif 1 jam yang lalu</Text>
  //       </View>
  //       <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
  //     </View>
  //   );
  // };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.directMessageWrapper}>
          <Text style={styles.dmText}>Pesan</Text>
          {/* <FlatList
            data={dmData}
            renderItem={renderDm}
            keyExtractor={item => item.id}
          /> */}
          <View style={styles.dmBody}>
            <Image
              style={styles.userImage}
              source={require('../../assets/profile/Profile1.jpg')}
            />
            <View style={styles.dmInfo}>
              <Text style={styles.userDisplayName}>Fillah Firdausyah</Text>
              <Text style={styles.activInfo}>Aktif 1 jam yang lalu</Text>
            </View>
            <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
          </View>
          <View style={styles.dmBody}>
            <Image
              style={styles.userImage}
              source={require('../../assets/profile/Profile1.jpg')}
            />
            <View style={styles.dmInfo}>
              <Text style={[styles.userDisplayName, styles.haveMessage]}>
                Fillah Firdausyah
              </Text>
              <Text style={styles.message}>Kamu kok ganteng banget..</Text>
            </View>
            <Ionicons name="camera-outline" size={30} color="#a8a8a8" />
          </View>
        </View>
      </ScrollView>
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
  userImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  dmInfo: {
    marginRight: 130,
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
  message: {},
});

export default DirectMessage;
