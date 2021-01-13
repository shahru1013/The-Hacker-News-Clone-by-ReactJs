import React from 'react'
import './nextpage.css'
function Nextpage(props) {
    return (
        <div className="nextdiv">
            <div className="next">
               <button onClick={props.onClick} stat="next">Next</button>
            </div>
            <div className="previous">
               {props.blink>1 && <button onClick={props.onClick} stat="previous">Previous</button>}
            </div>
        </div>
    )
}
export default Nextpage;