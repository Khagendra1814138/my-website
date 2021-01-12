import './CAquestions.css';

import React from "react";

import {Header} from "../header&footer/header";
import {NavLink} from 'react-router-dom';

// constructor(props) {
//   super(props)
//   this.state = {
//     count: 0
//   }
// }

// increment = () =>{
//   this.setState({count: this.state.count + 1})
// }

export const CAquizQuestions = () => {
    return (

      <div className="caQuestionsMainFrame">
        <Header/>
        <body className = "caQuestionsMainBody">

          <h1 id = "caQandAheading"> Climate Action's Question: /10</h1>

          <box id ="caQuestionsBoxMainFrame"> All the question will be within this box

          </box>

          <NavLink exact to="/chooseTopic" className="back">
            <button className ="backBtn"> GO BACK</button>
          </NavLink>
  
        </body>
      </div>
    );
  }