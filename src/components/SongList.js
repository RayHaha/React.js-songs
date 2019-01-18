import React, { Component } from 'react';
import { connect } from "react-redux";

// we use the name export method to write here
class SongList extends Component{
    render(){
        console.log(this.props);
        return <div>SongList</div>;
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