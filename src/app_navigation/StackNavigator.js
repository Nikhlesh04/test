import  React from "react";
import { View } from "react-native"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from "react-redux";
import { store } from "../redux";
import { SongDetails, SongsList } from "../screens";


const HomeStack = createStackNavigator({
	SongsList: {
		screen: SongsList,
		navigationOptions:{
			title: 'SONGS',
		  },
	},
	SongDetails: {
		screen: SongDetails,
		navigationOptions:{
		  title: 'SONG DETAILS',
		},
	  },
  });
  const AppContainer = createAppContainer(HomeStack); 
  
  class StackNavigator extends React.Component{
	 
	render(){
		return(
			<Provider store={store}>
				<View style = {{flex:1}}>
					<AppContainer/>
				</View>
			</Provider>
		)
	}
  }

  export default StackNavigator 