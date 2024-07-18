import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemedView } from '@/components/ThemedView';
import MainButton from '@/components/MainButton';
import { Colors } from '@/constants/Colors';

type IndexScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'index'>;

const IndexScreen: React.FC = () => {
  const navigation = useNavigation<IndexScreenNavigationProp>();
  return (
        <ThemedView style={styles.titleContainer}>
          <MainButton btnPress={()=>navigation.navigate('HomeScreen',{isComplete:false})} title="Lets Begin" secondary textColor={Colors.white}/>
        </ThemedView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent:'center',
    alignItems: 'center',
    flex:1
  }
});


export default IndexScreen;


