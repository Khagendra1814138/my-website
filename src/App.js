import './App.css';

import React from "react";

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import { Home } from "./XhomePage/home";
import { Renewable } from './XrenewableResourcePage/renewable';
import { ClimateAction } from './XclimateActionPage/climateAction';
import { Quiz } from './XtakeQuizPage/takeQuiz';
import { ChooseTopic } from './XchooseTopicPage/chooseTopic';
import { CAquizQuestions } from './climateActionQ&A/CAquestions';
import { RRquizQuestions } from './renResourceQ&A/RRquestions';
import { CAanswers } from './climateActionQ&A/CAanswer';
import { RRanswers } from './renResourceQ&A/RRanswer';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home/>}/>
        <Route  path="/renewable" render={() => <Renewable/>}/>
        <Route  path="/climateAction" render={() => <ClimateAction/>}/>
        <Route  path="/takeQuiz" render={() => <Quiz/>}/>
        <Route  path="/chooseTopic" render={() => <ChooseTopic/>}/>
        <Route  path="/CAquestions" render={() => <CAquizQuestions/>}/>
        <Route  path="/RRquestions" render={() => <RRquizQuestions/>}/>
        <Route  path="/CAanswer" render={() => <CAanswers/>}/>
        <Route  path="/RRanswer" render={() => <RRanswers/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
