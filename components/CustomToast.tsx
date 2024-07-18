import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface CustomToastProps {
  description: string;
  onClose: () => void;
}

const CustomToast: React.FC<CustomToastProps> = ({ description, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
  }, [onClose]);

  return (
    <View style={styles.toastContainer}>
      <View style={styles.greenStrip} />
      <View style={styles.header}>
        <Ionicons name="ticket" size={24} color={Colors.green} />
        <Text style={styles.headerText}>Ticket Confirmed</Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    zIndex:5
  },
  greenStrip: {
    height: 5,
    backgroundColor: Colors.green,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -10,
    marginHorizontal: -10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding:10
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    padding:10,
    fontSize: 14,
    color: '#333',
  },
});

export default CustomToast;
