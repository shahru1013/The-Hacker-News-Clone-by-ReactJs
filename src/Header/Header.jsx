import React, { Component } from 'react'
import {faEnvelope,faSearch,faBars} from '../../node_modules/@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '../../node_modules/@fortawesome/react-fontawesome'
import './header.css'

export class Header extends Component {
    render() {
        return (
         <div className="main-head">
             <p className="main-title" id="title-id" onClick={this.props.onClick} val="TheHackerNews">The Hacker News</p>
             <div className="head-button-div">
                <button className="head-button">
                  <div className="sub-style">
                     <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                     Subscribe to Newsletter
                  </div>
                 </button>
                </div>
                <div className="open-at-750">
                    <FontAwesomeIcon icon={faSearch} className="r-icon" onClick={this.props.onClick} val="SearchBox"/>
                    <FontAwesomeIcon icon={faBars} className="r-icon" onClick={this.props.onClick} val="Option"/>
                </div>
            </div>
        )
    }
}

export default Header
