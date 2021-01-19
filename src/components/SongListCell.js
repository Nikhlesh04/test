import  React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet} from "react-native"
import Colors from "../res/Themes";
import PlaceHolderImage from 'react-native-placeholderimage';

const SongListCell = ({item,props})=>{
	const{songImageStyle, songContainerStyle, titleTextStyle, songInfoTextStyle, songHeadingTextStyle, infoContainerStyle} = styles

	return(
			<TouchableOpacity style = {songContainerStyle} onPress = {()=>{onPressSongCell(item,props)}}>
					<View style = {songImageStyle}>
						{!item.artworkUrl30 ? <Image 
								source = {require("../res/images/common/defaultImage.png")}
								resizeMode = {"contain"} style = {[songImageStyle,{tintColor:Colors.gray}]}
							/> :

							<PlaceHolderImage
									style = {songImageStyle}
									source={{uri: item.artworkUrl30}}
									placeHolderURI={require("../res/images/common/defaultImage.png")}
									placeHolderStyle={[songImageStyle,{width:90}]}
							/>
						}
					</View>
					<View style = {infoContainerStyle}>
						{item.trackName && <Text style = {titleTextStyle} numberOfLines={3}>{item.trackName}</Text>}
						<View style = {{flexDirection:"row",justifyContent:"space-between",marginTop:item.trackName  ? 30 : 23}}>
							{item.artistName && <Text style = {[songInfoTextStyle,{fontWeight:"500"}]}>{item.artistName}</Text>}
							{item.trackTimeMillis && <Text style  = {[songHeadingTextStyle,{marginLeft:5}]}>{millisToMinutesAndSeconds(item.trackTimeMillis)} m</Text>}
						</View>
					</View>
			</TouchableOpacity>
	
)
	
}


// Method to convert milliseconfs into mintues and second.

const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
  	//If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}
  


// Method call on song cell press to see call details

onPressSongCell = (item,props)=>{
	props.navigation.navigate("SongDetails",{songDetails:item})
}


//-----------StyleSheet-----------//

const styles = StyleSheet.create({
	titleTextStyle:{
		fontWeight:"bold",
		fontSize:16,
		marginBottom:5
	},
	songImageStyle:{
		justifyContent:"center",
		alignItems:"center",
		height:120,
		width:120,
		marginRight:10
	},
	songInfoTextStyle:{
		fontSize:15,
		fontWeight:"300",
		color: Colors.light
	},
	songContainerStyle:{
		height:120,
		width:"100%",
		flexDirection:"row",
		justifyContent:"flex-start",
		alignItems:"center",
		marginTop:40,
		padding:10
	},
	imageLoaderSpinnerView:{
		flex:1,
		position: 'absolute'
	},
	infoContainerStyle: {
		height:"100%",
		flex:1
	}
})


export default SongListCell
