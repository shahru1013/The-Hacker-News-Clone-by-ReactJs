import React, { Component } from 'react'
import './socialfooter.css'
import {FontAwesomeIcon} from '../../../../node_modules/@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faLinkedin,faInstagram,faYoutube} from '../../../../node_modules/@fortawesome/free-brands-svg-icons'
export default class Socialfooter extends Component {
    render() {
        return (
            <div className="socialicon-div">
                 <h3 style={{textAlign:'center',color:'gray'}}> <b style={{borderBottom:'2px solid yellow'}}>Follow Us</b></h3>
                 <div className="soc-icon">
                    <button style={{backgroundColor:'#3b5998',color:'white'}}>{<FontAwesomeIcon icon={faFacebook}/>}</button>
                    <button style={{backgroundColor:'#00acee',color:'white'}}>{<FontAwesomeIcon icon={faTwitter}/>}</button>
                    <button style={{backgroundColor:'#3f729b',color:'white'}}>{<FontAwesomeIcon icon={faInstagram}/>}</button>
                    <button style={{backgroundColor:'#c4302b',color:'white'}}>{<FontAwesomeIcon icon={faYoutube}/>}</button>
                    <button style={{backgroundColor:'#0e76a8',color:'white'}}>{<FontAwesomeIcon icon={faLinkedin}/>}</button>
                 </div>
            </div>
        )
    }
}
