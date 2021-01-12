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
        <div box className ="instructionBox"> instructions here</div>

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
