import { Colors } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity,StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";

const MainButton=(props:any)=>{
    return(
        <TouchableOpacity onPress={()=>props.btnPress()} disabled={props?.disable} style={[props.secondary?styles.buttonSecondaryStyle:styles.buttonStyle,{backgroundColor:props.color?props.color:props.disable?Colors.gray:Colors.themeColor,borderWidth:props.hasBorder?2:0,borderColor:props.hasBorder?props.textColor:''}]}>
            {props.icon?
            <Ionicons size={20} name={props.icon} style={{height:20,width:20,marginRight:10,color:props.textColor}}/>:null
            }
            <ThemedText type="defaultSemiBold" lightColor={props.textColor} darkColor={props.textColor} style={{alignSelf:'center'}}>{props.title}</ThemedText>
        </TouchableOpacity>
    )
}

export default MainButton;

const styles = StyleSheet.create({
    buttonStyle:{
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:10,
      paddingVertical:10,
      borderRadius:30,
      flexDirection:'row'
    },
    buttonSecondaryStyle:{
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:30,
      },

  });