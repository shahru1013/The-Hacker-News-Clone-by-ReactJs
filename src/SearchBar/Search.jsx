import React, { Component } from 'react'
import './search.css'
export default class Search extends Component {
    render() {
        return (
            <div className="search-div">
                <div className="search-box">
                <input type="text" placeholder="Search Here..."></input>
                </div>
            </div>
        )
    }
}
