import React, { Component } from 'react'
import './OnlineCourses.css'
import lock from '../../Images/lock.jpg'
export default class OnlineCourses extends Component {
    render() {
        return (
            <div className="online-div">
                <div className="course-pic">
                   <img src={lock} alt="Course Pic"></img>
                </div>
                <div className="course-title">
                   <p>Ethical Hacking - Practical Training</p>
                </div>
                <div className="course-bottom">
                    <p>10 courses + 1,236 lessons on latest techniques, forensics, malware analysis, network security and programming.</p>
                </div>
            </div>
        )
    }
}
