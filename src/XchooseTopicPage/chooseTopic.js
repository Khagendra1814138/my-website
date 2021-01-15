import React from "react";
import './chooseTopic.css';
import '../publicStyles/publicStyles.css';

import {NavLink} from 'react-router-dom';

import RRbtnImg from './RRbtn.jpg';
import CAbtnImg from './CAbtn.jpg';


export const ChooseTopic = () => {
    return (
        <div className="chooseTopicMainFrame">
            <body className = "chooseTopicBody">

                <h1 id="headingOne"> CHOOSE YOUR TOPIC</h1>
                <box id ="btnMainBox">
                    <NavLink exact to="/RRquestions">
                        <button className ="btn1" style={{ backgroundImage: `url(${RRbtnImg})` }}> 
                            <label id="t1">R E N E W A B L E</label>
                            <label id="t2">resource's</label>
                        </button>
                    </NavLink>

                    <NavLink exact to="/CAquestions">
                        <button className ="btn2" style={{ backgroundImage: `url(${CAbtnImg})` }}>
                            <label id="t1">C L I M A T E</label>
                            <label id="t2">action's</label>
                        </button>
                    </NavLink>
                </box>
                
                <box className = "btnsMainBox">
                    <NavLink exact to="/takeQuiz" className="grnBtn">
                        <button id ="greenButton">GO BACK</button>
                    </NavLink>
                </box>
            </body>
        </div>
    );
}