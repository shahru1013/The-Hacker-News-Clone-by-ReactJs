import React, { Component } from 'react'
import pass from '../../Images/pass.jpg'
import './popular.css'
export default class Popular extends Component {
    render() {
        const ab=(title,dname)=>{
            const ul = document.getElementById(title);
            const cur = document.getElementById(dname);
            ul.style.color="blue";
            ul.style.textDecoration="underline";
            cur.style.cursor="pointer";
        }
        return (
            <div className="popular">
                 <div className="right-div" id={this.props.pdname} onMouseOver={()=>{ab(this.props.ptitle,this.props.pdname)}} onMouseLeave={()=>{
                    const a = document.getElementById(this.props.ptitle);
                    a.style.color="black";
                    a.style.textDecoration="none";
                    
                }}>
                   <div className="post-right">
                      <div className="image-right">
                            <img src={pass} alt="background"/>
                       </div>
                        <div className="text-right" id={this.props.ptitle}>
                             <p>WhatsApp Will Disable Your Account If You Don't Agree Sharing Data With Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
