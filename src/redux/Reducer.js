const initialState = {
	songList: [],
	showSpinner: false
}

const reducer = (state=initialState, action) => {
		switch(action.type){
			case "SONG_LIST":
			return {...state,songList:action.payload}
			case "SHOW_SPINNER":
			return {...state,isShowSpinner:true}
			case "HIDE_SPINNER":
			return {...state,isShowSpinner:false}
			default:
			return state
		}
	
}

export default reducer

