import { ThemedView } from "@/components/ThemedView";
import { StyleSheet,View,TextInput,FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import MainButton from "@/components/MainButton";
import { useEffect, useState } from "react";
import DummyData from "@/constants/DummyData";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "@/constants/Types";
import { Ionicons } from "@expo/vector-icons";


type QuestionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'QuestionsScreen'>;

const QuestionsScreen: React.FC = () => {
  const navigation = useNavigation<QuestionScreenNavigationProp>();
  const [data,setData] = useState(DummyData.questionsData[0]?.questions);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [buttonText,setButtonText] = useState('Next question');
  const [inputText,setInputText] =useState('');
  const [answers,setAnswers] = useState<String[]>([]);
  const [isDisable,setIsDisable] = useState(true);
  const [lastSelected,setLastSelected] = useState<String>();

  useEffect(()=>{
    inputText==''?setIsDisable(true):setIsDisable(false);
  },[inputText])

  const nextBtnPress=(item:String)=> {
    if(currentIndex==data.length-1){
      if(item){
        setLastSelected(item);
        setIsDisable(false);
      }
      else{
      navigation.push('HomeScreen',{isComplete:true});
      }
    }
    else if(currentIndex<data.length-2){
    setCurrentIndex(currentIndex+1);
    }else{
      setButtonText('Claim ticket')
      setCurrentIndex(currentIndex+1);
    }
    setInputText('');
    updateArray(item);
  }
  const updateArray=(item:String):void=>{
    if(item && answers.length<data.length){
    let arr:String[]= [...answers];
    arr.push(inputText);
    setInputText('');
    setAnswers(arr);
    }
  }
  const renderQuestion=()=>{
    return(
      <View style={{padding:10}}>
        <ThemedText type="defaultSemiBold" lightColor={Colors.themeColor} darkColor={Colors.themeColor} style={{alignSelf:'flex-start'}}>{`Question ${currentIndex+1} OF ${data.length}`}</ThemedText>
        <ThemedText type="subtitle" lightColor={Colors.black} darkColor={Colors.black} style={{alignSelf:'flex-start'}}>{data[currentIndex]?.question}:</ThemedText>
        <TextInput
          style={styles.textInput}
          placeholder={'Write your answer here'}
          placeholderTextColor={Colors.themeColor}
          onChangeText={(value)=>setInputText(value)}
          value={inputText}
        />
      </View>
    )
  }

  const renderListItem=({item}:{item:String})=>{
    return(
      <TouchableOpacity onPress={()=>nextBtnPress(item)} style={styles.itemContainer}>
        <ThemedText type="defaultSemiBold" darkColor={Colors.themeColor} lightColor={Colors.themeColor} style={{alignSelf:'center'}}>{item}</ThemedText>
        {lastSelected == item?<Ionicons size={20} name={'checkmark-circle'} style={{height:20,width:20,right:10,position:'absolute',color:Colors.themeColor}}/>:null}
      </TouchableOpacity>
    )
  }
  const renderOptions=()=>{
    return(
      <FlatList data={data[currentIndex].options} renderItem={renderListItem} showsVerticalScrollIndicator={false}/>
    )
  }
  return (
    <ThemedView style={styles.titleContainer}>
      <View style={{width:"80%",flex:0.6}}>
        {renderQuestion()}
        {data[currentIndex].options?.length>0?renderOptions():null}
      </View>
      {currentIndex==data.length-1 || data[currentIndex].options?.length==0?
      <View style={{width:"90%",bottom:50,position:'absolute'}}>
         <MainButton btnPress={()=>nextBtnPress('')} title={buttonText} disable={isDisable} textColor={Colors.white}/>
      </View>:null}
    </ThemedView>
  );
}

export default QuestionsScreen;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent:'center',
    alignItems: 'center',
    flex:1
  },
  textInput: {
    marginTop:5,
    marginLeft:-10,
    padding: 10,
    fontSize:20,
    fontWeight:'700',
    color:Colors.themeColor
  },
  itemContainer:{
    backgroundColor:'#f5f1ff',
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginTop:15,
    padding:10}
});


