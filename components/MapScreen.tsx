import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

const MapScreen: React.FC = () => {
  const initialRegion: Region = {
    latitude: 37.78825, 
    longitude: -122.4324, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markerCoordinate = {
    latitude: 37.78825, 
    longitude: -122.4324, 
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker coordinate={markerCoordinate} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height:'100%',
    width:'100%',
    borderRadius: 20,
    overflow: 'hidden', 
  },
});

export default MapScreen;
