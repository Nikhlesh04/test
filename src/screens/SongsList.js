import  React from "react";
import {View, StyleSheet, FlatList, SafeAreaView} from "react-native"
import  {connect}  from "react-redux";
import * as actions from '../redux/Actions';
import { SongListCell, Spinner } from "../components";
import SplashScreen from 'react-native-splash-screen';

class SongsList extends React.Component{
	
	componentDidMount(){
		SplashScreen.hide()
		// Calling API for fetching Song List
		this.props.fetchSongListAPI()
	}

	render(){
		const {songList, isShowSpinner} = this.props
		const {safeAreaViewStyle, mainContainerViewStyle,songListStyle} = styles
		return(
			<SafeAreaView style = {safeAreaViewStyle}>
				<View style = {mainContainerViewStyle}>
				<Spinner isVisible = {isShowSpinner}/>
					<FlatList 
						style={songListStyle}
						data={songList}
						showsVerticalScrollIndicator={false}
						renderItem={this.renderItem}
						extraData={item => item.trackId}
						keyExtractor={item => item.trackId}
					/>
				</View>
			</SafeAreaView>
		)
	}

	renderItem = ({item})=>{
			return <SongListCell item={item} props={this.props}/>
	}	
	
}

//Map state to props method

const mapStateToProps = (state)=>{
	const {songList, isShowSpinner} = state
	return{
		songList,
		isShowSpinner
	}
}

export default connect(mapStateToProps, actions)(SongsList);

//-----------StyleSheet-----------//

const styles = StyleSheet.create({
	safeAreaViewStyle :{
		flex:1
	},
	mainContainerViewStyle:{
		flex:1,
		marginVertical:20,
		marginHorizontal:10
	},
	songListStyle:{
		flex:1,
		marginHorizontal:10
	}
})