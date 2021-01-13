import React, { Component } from 'react'
import './post.css'
import bankhacking from '../../Images/bank-hacking.jpg'
import {faCalendarAlt,faUserAlt} from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '../../../node_modules/@fortawesome/react-fontawesome'
export default class Post extends Component {
 
    render() {
        const ab=(title,dname)=>{
            const ul = document.getElementById(title);
            console.log(ul);
            const cur = document.getElementById(dname);
            ul.style.textDecoration="underline";
            cur.style.cursor="pointer";
            //alert(title+dname)
        }
        return (
            <div className="main-div">
                <div className="left-div" id={this.props.dname} onMouseOver={()=>{ ab(this.props.title,this.props.dname); }} onMouseLeave={()=>{
                    const a = document.getElementById(this.props.title);
                    a.style.textDecoration="none"; }}>
                     <div className="post-left">
                         <div className="image-left">
                            <img src={bankhacking} alt="news" />
                         </div>
                         <div className="text-left">
                             <p onClick={this.props.onClick} number={this.props.dname}  id={this.props.title} className="title">Russian Hacker Gets 12-Years Prison for Massive JP Morgan Chase Hack</p>
                             <div className="n-d">
                                <p id="date"><FontAwesomeIcon icon={faCalendarAlt} style={{fontSize:'14px',marginRight:'5px',marginBottom:'1px'}}/>{this.props.time}</p>
                                <p id="name"><FontAwesomeIcon icon={faUserAlt} style={{fontSize:'10px',marginRight:'5px',marginBottom:'2px',color:'black'}}/>Shahru Islam</p>
                             </div>
                             <p className="btm-text">A U.S. court on Thursday sentenced a 37-year-old Russian to 12 years in prison for perpetrating an international hacking campaign</p>
                         </div>
                     </div>
                </div>
            </div>
        )
        
    }
}
