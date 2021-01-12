import './navBar.css';

import {NavLink} from 'react-router-dom';

export const NavigationBar = () => {
    return (
      <div>
        <navbar className="navBarr">
            <NavLink exact to="/" className="home" activeClassName="home-active"> HOME</NavLink>
            <NavLink exact to="/renewable" className="renewable" activeClassName="renewable-active"> RENEWABLE RESOURCES</NavLink>
            <NavLink exact to="/climateAction" className="climateAction" activeClassName="climateAction-active"> CLIMATE ACTION</NavLink>
            <NavLink exact to="/takeQuiz" className="quiz" activeClassName="quiz-active"> TAKE QUIZ</NavLink>
        </navbar>
      </div>
  
    );
  }