import React, { Component } from 'react'
import './newslettermail.css'
import {faAngleRight} from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '../../../node_modules/@fortawesome/react-fontawesome'
export default class NewsLetterMail extends Component {
    render() {
        return (
            <div className="newsletter-div">
                <div className="newsletter-temp">
                 <div className="text-sec">
                    <p className="first-txt">Cybersecurity Newsletter — Stay Informed</p>
                    <p className="second-txt">Sign up for cybersecurity newsletter and get latest news updates delivered straight to your inbox daily.</p>
                 </div>
                 <div className="search-sec">
                    <input type="text" placeholder="Enter Your Email Address"></input>
                    <button>{<FontAwesomeIcon icon={faAngleRight}/>}</button>
                 </div>
                 </div>
            </div>
        )
    }
}
