import React, { Component } from 'react'
import './post.css'
export default class Post extends Component {
    render() {
        return (
            <div className="main-div">
                <div className="left-div">
                     <h1>Left</h1>
                </div>
                <div className="right-div">
                     <h1>Right</h1>
                </div>
            </div>
        )
    }
}
