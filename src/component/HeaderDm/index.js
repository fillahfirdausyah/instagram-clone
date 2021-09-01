import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const HeaderDm = ({ navigation }) => {
  return (
    <View style={styles.headerDmWrapper}>
      <View style={styles.sectionLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={32} />
        </TouchableOpacity>
        <Text style={styles.userName}>firdausyah.22</Text>
      </View>
      <View style={styles.sectionRight}>
        <Ionicons style={styles.iconVideo} name="videocam-outline" size={32} />
        <Feather name="edit" size={29} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerDmWrapper: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 55,
    elevation: 7,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionRight: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 14,
  },
  iconVideo: {
    marginRight: 15,
  },
});

export default HeaderDm;
