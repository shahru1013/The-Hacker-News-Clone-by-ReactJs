import React from 'react'
import './nextpage.css'
import {faAngleRight,faAngleLeft} from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '../../../node_modules/@fortawesome/react-fontawesome'
function Nextpage(props) {
    return (
        <div className="nextdiv">
            <div className="next">
               <button onClick={props.onClick} stat="next">Next Page {<FontAwesomeIcon icon={faAngleRight}/>} </button>
            </div>
            <div className="previous">
               {props.blink>1 && <button onClick={props.onClick} stat="previous"> {<FontAwesomeIcon icon={faAngleLeft}/>} Previous Page</button>}
            </div>
        </div>
    )
}
export default Nextpage;