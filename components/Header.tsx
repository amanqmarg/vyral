// Header.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  onBackPress: () => void;
  onMenuPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBackPress, onMenuPress }) => {
  return (
    // <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  iconButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
