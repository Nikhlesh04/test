import { WebApi,APIEndPoints } from "../network";
import {SHOW_SPINNER, HIDE_SPINNER, SONG_LIST}  from "./ActionType";

export const fetchSongListAPI = ()=>{
	return(dispatch)=>{
		dispatch(showSpinner())
		WebApi.getRequest(APIEndPoints.name).then((response)=>{
			dispatch(hideSpinner())
			const data = response.data
			dispatch({ type: SONG_LIST, payload: data.results})
			
		}).catch(error =>{
			console.log(error)
			dispatch(hideSpinner())
		})
	}
} 

export function showSpinner() {
	return {type: SHOW_SPINNER}
}
export function hideSpinner() {
	return {type: HIDE_SPINNER}
}





