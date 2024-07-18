import { ThemedView } from "@/components/ThemedView";
import {  StyleSheet,View,Image, TouchableOpacity, ScrollView, ImageBackground,Share, Alert} from "react-native";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import MainButton from "@/components/MainButton";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import DummyData from "@/constants/DummyData";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import MapScreen from "@/components/MapScreen";
import Header from "@/components/Header";
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/constants/Types';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import CustomToast from "@/components/CustomToast";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();
  const { isComplete } = route?.params;
  const eventDetails = DummyData.eventDetails;
  const isApproved = false;
  const [btnAction,setBtnAction] =useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mainBtnObj, setMainBtnObj] = useState({ title: 'Buy tickets', id: 1 });
  const address=['Join to see full address',`You'll see the full address once you're approved`]



  useEffect(()=>{
    if(isComplete==true){
        setMainBtnObj({ id:2, title: 'Waiting for approval' });
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
        setTimeout(() => {
            setMainBtnObj({ id:3, title: 'My tickets' });
          }, 7000);
    }
  },[isComplete])

  const handleBtnPress = () => {
    navigation.navigate('QuestionsScreen')
  };
  const checkTickets = () => {
    console.log('Check Tickets here')
  };

  const shareEvent = async() => {
    try {
        const result = await Share.share({
          message: 'Check out this amazing event!',
          url: 'https://google.com',
        });
  
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
          } else {
            console.log('Content Shared');
          }
        } else if (result.action === Share.dismissedAction) {
            console.log('Share Dismissed');
        }
      } catch (error:any) {
        console.log('Error', error.message);
      }
  };
  const renderFooter=()=>{
    return(
    <View style={styles.footerContainer}>
        {mainBtnObj.id==3?
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{width:'50%'}}>
             <MainButton btnPress={checkTickets} title='My tickets' color={Colors.themeColor} icon='ticket' textColor={Colors.white}/>
           </View>
           <View style={{width:'50%'}}>
             <MainButton btnPress={shareEvent} title='Share event' color={Colors.white} icon='share-outline' textColor={Colors.themeColor} hasBorder={true}/>
           </View>
        </View>:
        <MainButton btnPress={handleBtnPress} title={mainBtnObj.title} color={mainBtnObj.id==2?Colors.orange:null} textColor={Colors.white}/>
       }
    </View>
    )
  }

  const renderListItem=({title,details,icon,color}:{title:String,details:String,icon:any,color:any})=>{
    return(
        <View style={{marginTop:15,flexDirection:'row'}}>
            <Ionicons size={25} name={icon} style={{height:25,width:25}}/>
            <View style={{marginLeft:20,paddingRight:20}}>
            <ThemedText type="defaultSemiBold" lightColor={Colors.black} darkColor={Colors.black} style={{alignSelf:'flex-start'}}>{title}</ThemedText>  
            <ThemedText type="link" lightColor={color} darkColor={color}  style={{alignSelf:'flex-start'}}>{details}</ThemedText>  
            </View>
        </View>
    )
  }
  const renderCard=()=>{
    return(
        <View style={[styles.cardContainer,{marginTop:btnAction?-50:-125}]}>
            <TouchableOpacity onPress={()=>btnAction?setBtnAction(false):setBtnAction(true)} style={{padding:10,paddingTop:5}}>
                <View style={{height:3,width:50,backgroundColor:Colors.gray,alignSelf:'center',borderRadius:5}}/>
            </TouchableOpacity> 
            <ScrollView style={{height:'100%',marginBottom:90}} showsVerticalScrollIndicator={false}>
                <ThemedText type="subtitle" lightColor={Colors.black} darkColor={Colors.black} style={{alignSelf:'flex-start',marginTop:25}}>{eventDetails.eventName}</ThemedText>  
                <ThemedText type="default" lightColor={Colors.black} darkColor={Colors.black} style={{alignSelf:'flex-start'}}>by {eventDetails.eventBy}</ThemedText>  
                <View style={{marginTop:10}}/>
                {renderListItem({title:eventDetails.date,details:eventDetails.time,icon:'calendar',color:Colors.gray})}
                {renderListItem({title:eventDetails.place,details:mainBtnObj.id==3?eventDetails.address:mainBtnObj.id==2?address[1]:address[0],icon:'location-sharp',color:mainBtnObj.id==3 ? Colors.gray : Colors.themeColor})}
                {renderListItem({title:eventDetails.ticketsLeft,details:`${eventDetails.totalInvited} invited`,icon:'ticket',color:Colors.gray})}
                {renderListItem({title:eventDetails.price,details:'',icon:'logo-euro',color:Colors.gray})}
                <ThemedText type="subtitle" lightColor={Colors.black} darkColor={Colors.black} style={{alignSelf:'flex-start',marginTop:25}}>About this event</ThemedText>  
                <ThemedText type="default" lightColor={Colors.black} darkColor={Colors.black}  style={{alignSelf:'flex-start'}}>{eventDetails.eventDesc}</ThemedText>
                <ThemedText type="subtitle" lightColor={Colors.black} darkColor={Colors.black} style={{alignSelf:'flex-start',marginTop:25}}>Find this event</ThemedText>  
                <View style={{marginTop:10,borderRadius:20,height:200,width:'100%',paddingBottom:20}}>
                    <MapScreen/>
                </View>
            </ScrollView>
        </View>
    )
  }
  const handleBackPress = () => {
    console.log('Back button pressed');
    navigation.goBack();
  };

  const handleMenuPress = () => {
    console.log('Menu button pressed');
  };
  return (
    <ThemedView style={styles.mainContainer}>
        <SafeAreaView style={styles.mainContainer}>
        {renderFooter()}
        {showToast && (
        <CustomToast
          description="Now we need to wait for the host to approve you. Once you're approved you'll have access to your ticket."
          onClose={() => setShowToast(false)}
        />
      )}
        <View style={{height:300,width:'100%'}}>
            <ImageBackground source={require('../assets/images/event.jpg')} style={{height:'100%',width:'100%'}} resizeMode="cover">
              <Header title="My App" onBackPress={handleBackPress} onMenuPress={handleMenuPress} />
            </ImageBackground>
        </View>
        {renderCard()}
        
        </SafeAreaView>
    </ThemedView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex:1
  },
  footerContainer:{
    backgroundColor:Colors.white,
    paddingVertical:30,
    paddingHorizontal:10,
    width:'100%',
    position:'absolute',
    bottom:0,
    zIndex:2,
    elevation:10
  },
  cardContainer:{
    flex:1,
    backgroundColor:Colors.white,
    borderTopRightRadius:70,
    borderTopLeftRadius:70,
    paddingVertical:15,
    paddingHorizontal:25
}
});


