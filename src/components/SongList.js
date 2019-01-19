import React, { Component } from 'react';
import { connect } from "react-redux";

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
                        <button className="ui button primary">
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

export default connect(mapStateToProps)(SongList);
// if the function(A) return another function(B)
// then A()() will return what function B is going to return