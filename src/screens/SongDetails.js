import React from "react";
import { View, Image, SafeAreaView, StyleSheet } from "react-native"
import {SongDetailText} from "../components"
import {SongListString} from "../res/Strings"
import Colors from "../res/Themes";

class SongDetails extends React.Component{
	render(){
		const{songDetails} = this.props.navigation.state.params
		const{artistName, collectionPrice, collectionCensoredName, country, trackName, isStreamable} = SongListString
		const{safeAreaViewStyle,mainContainerViewStyle,songImageStyle} = styles
		return(
			<SafeAreaView style = {safeAreaViewStyle}>
				<View style = {mainContainerViewStyle}>

						{songDetails.artworkUrl30 ?
								<Image 
									source = {{ uri: songDetails.artworkUrl30 }} 
									resizeMode = {"contain"} 
									style = {songImageStyle}
								/> :
								<Image 
									source = {require("../res/images/common/defaultImage.png")}
									resizeMode = {"contain"} style = {[songImageStyle,{tintColor:Colors.gray}]}
								/>
						}

						{songDetails.artistName && <SongDetailText title = {artistName} label = {songDetails.artistName}/>}
						{songDetails.collectionPrice && <SongDetailText title = {collectionPrice} label = {songDetails.collectionPrice}/>}
						{songDetails.collectionCensoredName && <SongDetailText title = {collectionCensoredName} label = {songDetails.collectionCensoredName}/>}
						{songDetails.country && <SongDetailText title = {country} label = {songDetails.country}/>}
						{songDetails.trackName && <SongDetailText title = {trackName} label = {songDetails.trackName}/>}
						{songDetails.isStreamable && <SongDetailText title = {isStreamable} label = {songDetails.isStreamable}/> }
				</View>
			</SafeAreaView>
		)
	}
}
export default SongDetails

//-----------StyleSheet-----------//

const styles = StyleSheet.create({
	safeAreaViewStyle :{
		flex:1,
		alignItems:"center"
	},
	mainContainerViewStyle:{
		marginHorizontal:10,
		paddingVertical:20,
		width:"90%",
		marginTop:20,
		borderRadius:10,
		paddingHorizontal:10,
		justifyContent:"center",
		borderWidth:0.5,
		borderTopWidth : 0.5, 
		borderColor:Colors.gray
	},
	songImageStyle:{
		height:130,
		width:'100%',
		marginVertical:20
	},
})
