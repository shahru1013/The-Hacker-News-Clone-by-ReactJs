import React, { Component } from 'react'
import {faSearch,faBars,faEnvelope,faHome,faShoppingBasket} from '../../node_modules/@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '../../node_modules/@fortawesome/react-fontawesome'
import './navbar.css'
export default class Navbar extends Component {
    render() {
        return (
         <div className="nav-boss">
            <div className="navbar-main">
                <div className="left-navbar">
                   <button className="nav-btn" onClick={this.props.onClick} val="Home">Home</button>
                   <button className="nav-btn" onClick={this.props.onClick} val="DataBreaches">Data Breaches</button>
                   <button className="nav-btn" onClick={this.props.onClick} val="CyberAttack">Cyber Attack</button>
                   <button className="nav-btn" onClick={this.props.onClick} val="Vulnerabilities">Vulnerabilities</button>
                   <button className="nav-btn" onClick={this.props.onClick} val="Malaware">Malaware</button>
                   <button className="nav-btn" onClick={this.props.onClick} val="Offers">Offers</button>
                   <button className="nav-btn" onClick={this.props.onClick} val="Contact">Contact</button>
                </div>
                <div className="right-navbar">
                       <FontAwesomeIcon icon={faSearch} className="nav-icon" onClick={this.props.onClick} val="SearchBox"/>
                       <FontAwesomeIcon icon={faBars} className="nav-icon" onClick={this.props.onClick} val="MenuBar"/>
                </div>
            </div>
            <div className="nav-open-720">
                 <button className="nav-o-btn" onClick={this.props.onClick} val="Home"><FontAwesomeIcon icon={faHome} className="nav-icon-720"/>Home</button>
                 <button className="nav-o-btn" onClick={this.props.onClick} val="Newsletter"><FontAwesomeIcon icon={faEnvelope} className="nav-icon-720"/>Newsletter</button>
                 <button className="nav-o-btn" onClick={this.props.onClick} val="Offer"><FontAwesomeIcon icon={faShoppingBasket} className="nav-icon-720"/>Offer</button>
            </div>
        </div>
        )
    }
}
