import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchDm = () => {
  return (
    <View style={styles.searchDmWrapper}>
      <View style={styles.searchInput}>
        <Ionicons name="search" size={20} color="#7f7e82" />
        <Text style={styles.searchText}>Cari</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchDmWrapper: {
    paddingHorizontal: 12,
    marginTop: 20,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    padding: 8,
    borderRadius: 7,
    borderColor: '#7f7e82',
    borderWidth: 0.7,
  },
  searchText: {
    fontSize: 17,
    marginLeft: 6,
    color: '#7f7e82',
  },
});

export default SearchDm;
