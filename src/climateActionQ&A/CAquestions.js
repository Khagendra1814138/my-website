import './CAquestions.css';
import '../publicStyles/publicStyles.css';

import Carousel from "react-elastic-carousel";
import Items from "../publicStyles/CA-RRitemsStyle";

import React from "react";

import {Header} from "../header&footer/header";
import {NavLink} from 'react-router-dom';

const breakPoints = [
  {itemsToShow: 1},
];

export const CAquizQuestions = () => {
    return (

      <div className="caQuestionsMainFrame">
        <Header/>
        <body className = "caQuestionsMainBody">

          <h1 id = "caQandAheading"> Lets test your Climate Action's knowledge</h1>

          <box id ="caQuestionsBoxMainFrame">
            <Carousel breakPoints={breakPoints}>
              <Items>
                <box id = "CAquestionCount"> 1 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>

              <Items>
                <box id = "CAquestionCount"> 2 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>

              <Items>
                <box id = "CAquestionCount"> 3 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>

              <Items>
                <box id = "CAquestionCount"> 4 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>

              <Items>
                <box id = "CAquestionCount"> 5 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "CAquestionCount"> 6 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "CAquestionCount"> 7 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "CAquestionCount"> 8 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "CAquestionCount"> 9 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>
     
              <Items>
                <box id = "CAquestionCount"> 10 / 10 </box>
                <box id = "CAquestionBox"> Q.) Who is who? </box>
                <box id = "CAanswer">A.)</box>
                <box id = "CAanswer">B.)</box>
                <box id = "CAanswer">C.)</box>
                <box id = "CAanswer">D.)</box>
              </Items>
            </Carousel>
          </box>

          <box className = "btnsMainBox">
            <NavLink exact to="/chooseTopic" className="btn">
              <button id ="greenButton"> GO BACK</button>
            </NavLink>

            <NavLink exact to="/CAanswer" className="btn">
              <button id ="greyButton"> CHECK ANSWER</button>
            </NavLink>
          </box>
  
        </body>
      </div>
    );
  }