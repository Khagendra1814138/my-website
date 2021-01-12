import './RRquestions.css';

import React from "react";

import {Header} from "../header&footer/header";
import {NavLink} from 'react-router-dom';

export const RRquizQuestions = () => {
    return (

      <div className="RRQmainFrame">
  
        <Header/>
  
        <body className = "RRQbody">
          <h1 id = "rrQandAheading"> Renewable Resources Question: /10</h1>

          <box id ="rrQuestionsBoxMainFrame"> All the question will be within this box

          </box>

          <NavLink exact to="/chooseTopic" className="back">
            <button className ="backBtn">GO BACK</button>
          </NavLink>
  
        </body>
      </div>
    );
  }