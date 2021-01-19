import  React from "react";
import {View, Text, StyleSheet} from "react-native"
import Colors from "../res/Themes";

const SongDetailText = ({title,label})=>{
	const {SongDetailTextStyle} = styles
	return(
		<View style = {{flexDirection:"row", marginTop:10, width:"100%",}}>
			{title && <Text style = {SongDetailTextStyle} numberOfLines = {3}>{`${title} : `}</Text>}
			{label && <Text style = {[SongDetailTextStyle,{fontWeight:"300"}]} numberOfLines = {3}>{`${label}`}</Text>}
		</View>
	)
}


//-----------StyleSheet-----------//
const styles = StyleSheet.create({
	SongDetailTextStyle :{
		color: Colors.lightBlack,
		flex:1,
		fontSize:17,
		fontWeight:"500",
		marginBottom:5,
		marginTop:10
	}
})

export default SongDetailText