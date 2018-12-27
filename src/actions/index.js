// Action creator
export const selectSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

// if we need to import selectSong, we use import { selectSong } from '../actions'
// the file default in the folder is index.js
// we use export name here, if you use the export name, you need to import with {}
// however, if you export default, you don't need to use curly braces {}