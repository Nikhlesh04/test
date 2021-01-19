import  React from "react";
import { Text, View, ActivityIndicator, StyleSheet} from "react-native"
import Colors from "../res/Themes";

const Spinner = ({ isVisible, message = "LOADING...", spinnerColor=Colors.red})=>{
	const {spinnerContainerStyle, loadingTextStyle} = styles
	return(
		isVisible ? 
			<View style = {spinnerContainerStyle}>
				<ActivityIndicator size= {"large"} animating={isVisible} color={spinnerColor} />
				<Text style = {loadingTextStyle}>{message}</Text>
			</View> : null
	)
}


//-----------StyleSheet-----------//
const styles = StyleSheet.create({
	spinnerContainerStyle:{
		height:"100%",
		width:"100%",
		alignItems:"center", 
		justifyContent:"center",
		backgroundColor: Colors.tranprent
	},
	loadingTextStyle:{
		fontSize:15,
		fontWeight:"500",
		marginTop:10,
		color: Colors.lightGray
	}

})

export default Spinner