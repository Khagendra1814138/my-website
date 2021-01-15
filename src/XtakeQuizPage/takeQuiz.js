import './takeQuiz.css';

import {NavLink} from 'react-router-dom';

import React from "react";

import headerBackground from './quizBackground.jpg';

import {Header} from "../header&footer/header";
import {NavigationBar} from "../navigation/navBar";

export const Quiz = () => {
  return (

    <div className="takeQuizMainFrame">
      <Header/>

      <div className = "headerImage" style={{ backgroundImage: `url(${headerBackground})` }}>
        <NavigationBar/>
      </div>

      <body className = "takeQuizMainBody">
        <p1 className ="instructionBox"> 
          <ul>
            <li>Please enter your name in the textbox below.</li>
            <li>Choose your topic.</li>
            <li>Start the quiz.</li>
            <li>Click view result to check your score and answer.</li>
          </ul>
        </p1>

        <box className ="line1"></box>

        <box className ="enterNameBox"> </box>

        <box className ="line2"></box>

  
        <NavLink exact to="/chooseTopic" className="topic">
          <button className ="topicBtn">CHOOSE TOPIC</button>
        </NavLink>
      </body>
    </div>
  );
}
