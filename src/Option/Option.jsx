import React, { Component } from 'react';
import {Link,BrowserRouter} from '../../node_modules/react-router-dom'
import {faEnvelope} from '../../node_modules/@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '../../node_modules/@fortawesome/react-fontawesome'
import './option.css';
export default class Option extends Component {
    render() {
        return (
            <div className="overlay-div">
                <div className="overlay-body">
                    <div className="cross-btn">
                      <h1 onClick={this.props.onClick} va="cancel" style={{color:'white',fontFamily:'monospace',fontWeight: 'bold'}} className="cross">X</h1>
                    </div>
                    <div className="menu-item">
                        <div className="left-menu">
                                  <h4>Resources</h4>
                                  <BrowserRouter>
                                   <Link to={""} className="link">THN Store</Link>
                                   <Link to={""} className="link">Free eBooks</Link>
                                   <Link to={""} className="link">Freebies</Link>
                                   <Link to={""} className="link">RSS Feed</Link>
                                  </BrowserRouter>
                        </div>
                        <div className="right-menu">
                                  <h4>About Site</h4>
                                  <BrowserRouter>
                                   <Link to={""} className="link">About Us</Link>
                                   <Link to={""} className="link">Our Team</Link>
                                   <Link to={""} className="link">Jobs</Link>
                                   <Link to={""} className="link">Advertise With Us</Link>
                                  </BrowserRouter>
                        </div>
                    </div>
                    <div className="contact-div">
                        <h4>Contact/Tip Us</h4>
                        <div className="sub-contact">
                            <div className="mail-icon">
                               <FontAwesomeIcon icon={faEnvelope} id="icon"/>
                            </div>
                            <h3 className="txt" id="txt-id">Reach out to get featured—contact us to send your exclusive story idea, research, hacks, or ask us a question or leave a comment/feedback!</h3>
                        </div>
                    </div>
                    <div className="social-div">
                        
                    </div>
                </div>
            </div>
        )
    }
}
