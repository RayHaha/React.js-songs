// it's overkill to put this list of songs into reducer
// but we just want to know how we could really use the redux in the application
// so we make the list of songs here

// if you don't know do you need to add {}, see the document
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Nacarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' }
    ];
}

// selectedSong default to be null to indicate that when our application
// first starts up and we don't have any selected song yet
const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

// now combine the reducers and export default
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});