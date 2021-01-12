import './header.css';

//import {Link} from 'react-router-dom';
//<NavLink exact to="/"></NavLink>

import Logos from './logo.png';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <logo className="logo">
          <img src={Logos} alt="logo"/>
        </logo>
      </header>
    </div>

  );
}