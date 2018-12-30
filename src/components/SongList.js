import React, { Component } from 'react';
import { connect } from "react-redux";

// we use the name export method to write here
class SongList extends Component{
    render(){
        return <div>SongList</div>;
    }
}

export default connect()(SongList);
// if the function(A) return another function(B)
// then A()() will return what function B is going to return