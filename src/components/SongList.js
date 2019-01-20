import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectSong } from "../actions";

// we use the name export method to write here
class SongList extends Component{
    renderList(){
        // take the list of songs and map over them then return jsx
        return this.props.songs.map((song) => {
            // use the class name from semantic UI
            // a key is not necessarily required but highly recommended
            // anytime that you are building out a list of elements
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary" 
                            onClick={() => {
                                this.props.selectSong(song)
                            }} 
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// convention function name
const mapStateToProps = (state) => {
    return { songs: state.songs };
    // by this way, in SongList, this.props === { songs: state.songs }
}

//export default connect(mapStateToProps)(SongList);
// if the function(A) return another function(B)
// then A()() will return what function B is going to return

// now we add the action creator
// it's ES2015 syntax { selectSong } is the same as { selectSong: selectSong }
export default connect(
    mapStateToProps, 
    { selectSong }
)(SongList);

// connect function is going to take the selectSong action creator 
// and pass it into our component as a prop 
// whenever using this.props.action, connect function is going to 
// automatically take the action that gets returned and throw it into the dispatch function