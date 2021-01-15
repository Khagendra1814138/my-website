import './RRquestions.css';
import '../publicStyles/publicStyles.css';

import Carousel from "react-elastic-carousel";
import Items from "../publicStyles/CA-RRitemsStyle";

import React from "react";

import {Header} from "../header&footer/header";
import {NavLink} from 'react-router-dom';

const breakPoints = [
  {itemsToShow: 1},
];

export const RRquizQuestions = () => {
    return (

      <div className="RRQmainFrame">
  
        <Header/>
  
        <body className = "RRQbody">
          <h1 id = "rrQandAheading"> Lets test your Renewable Resource's knowledge</h1>

          <box id ="rrQuestionsBoxMainFrame">
          <Carousel breakPoints={breakPoints}>
              <Items>
                <box id = "RRquestionCount"> 1 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>

              <Items>
                <box id = "RRquestionCount"> 2 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>

              <Items>
                <box id = "RRquestionCount"> 3 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>

              <Items>
                <box id = "RRquestionCount"> 4 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>

              <Items>
                <box id = "RRquestionCount"> 5 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "RRquestionCount"> 6 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "RRquestionCount"> 7 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "RRquestionCount"> 8 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "RRquestionCount"> 9 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "RRquestionCount"> 10 / 10 </box>
                <box id = "RRquestionBox"> Q.) Who is who? </box>
                <box id = "RRanswer">A.)</box>
                <box id = "RRanswer">B.)</box>
                <box id = "RRanswer">C.)</box>
                <box id = "RRanswer">D.)</box>
              </Items>
            </Carousel>
          </box>

          <box className = "btnsMainBox">
            <NavLink exact to="/chooseTopic" className="btn">
              <button id ="greenButton"> GO BACK</button>
            </NavLink>

            <NavLink exact to="/RRanswer" className="btn">
              <button id ="greyButton"> CHECK ANSWER</button>
            </NavLink>
          </box>
  
        </body>
      </div>
    );
  }