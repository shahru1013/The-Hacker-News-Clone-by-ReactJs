import React, { Component } from 'react'
import './lowerfooter.css'
import {Link,BrowserRouter} from '../../../../node_modules/react-router-dom'
export default class Lowerfooter extends Component {
    render() {
        return (
            <div className="lowerfooter-div">
                <div className="lower-sec">
                    <div className="about-sec">
                        <h4>About</h4>
                        <BrowserRouter>
                                <Link to={""} className="link-1">About Us</Link>
                                <Link to={""} className="link-1">Advertising</Link>
                                <Link to={""} className="link-1">Editorial Team</Link>
                                <Link to={""} className="link-1">Contact</Link>
                        </BrowserRouter>
                    </div>
                    <div className="pages-sec">
                        <h4>Pages</h4>
                        <BrowserRouter>
                                <Link to={""} className="link-1">RSS Feeds</Link>
                                <Link to={""} className="link-1">Deals Store</Link>
                                <Link to={""} className="link-1">Privacy Policy</Link>
                                <Link to={""} className="link-1">Copyright Policy</Link>
                        </BrowserRouter>
                    </div>
                    <div className="deals-sec">
                        <h4>Deals</h4>
                        <BrowserRouter>
                                <Link to={""} className="link-1">Exclusives</Link>
                                <Link to={""} className="link-1">Hacking</Link>
                                <Link to={""} className="link-1">Development</Link>
                                <Link to={""} className="link-1">Android</Link>
                        </BrowserRouter>
                    </div>
                    <div className="button-sec">

                    </div>
                </div>
            </div>
        )
    }
}
