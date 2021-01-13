import React, { Component } from 'react'
import './mainfooter.css'
import Socialfooter from '../SocialFooter/Socialfooter'
import Lowerfooter from '../LowerFooter/Lowerfooter'
export default class Mainfooter extends Component {
    render() {
        return (
            <div className="mainfooter-div">
                <Socialfooter/>
                <Lowerfooter/>
                <p>© The Hacker News, 2019. All Rights Reserved.</p>
            </div>
        )
    }
}
