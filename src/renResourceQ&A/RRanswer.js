import React from "react";
import './RRanswer.css';
import '../publicStyles/publicStyles.css';

import {NavLink} from 'react-router-dom';

export const RRanswers = () => {
    return (
        <div className="RRanswerMainFrame">
            <body className = "RRanswerBody">

                <h1 id="RRanswerHeading">YOUR SCORE: /10</h1>
                
                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer"></box>
                        <box id="RRanswer"></box>
                    </box>

                    <box id="RRanswerRow">
                        <box id="RRanswer"></box>
                        <box id="RRanswer"></box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question</box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>

                <box id ="linee"></box>

                <box id="RRanswerMainFrame">
                    <box id="question"> Q1.) hello this is the question </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">A.) </box>
                        <box id="RRanswer">B.)</box>
                    </box>
                    <box id="RRanswerRow">
                        <box id="RRanswer">C.)</box>
                        <box id="RRanswer">D.)</box>
                    </box>
                </box>
                

                <box className = "btnsMainBox">
                    <NavLink exact to="/RRquestions" id="nav">
                        <button id ="greenButton">GO BACK</button>
                    </NavLink>
                </box>
            </body>
        </div>
    );
}