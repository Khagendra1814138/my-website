import './climateAction.css';
import '../publicStyles/publicStyles.css';

import React from "react";

import headerBackground from './caBackground.jpg';
import electricity from './CAimages/electricity.jpg';
import food from './CAimages/food.jpg';
import travel from './CAimages/travel.jpg';

import {Header} from "../header&footer/header";
import {NavigationBar} from "../navigation/navBar";
import {Footer} from "../header&footer/footer";

import {Actions} from "./actionsItems";

export const ClimateAction = () => {
  return (
    <div className="caMainFrame">
      
      <Header/>

      
      <div className = "headerImage" style={{ backgroundImage: `url(${headerBackground})` }}>
        <NavigationBar/>
      </div>

      <body className = "caMainBody">
        <h1 className = "mainHeading"> You are part of the solution. here's how. </h1>

        <p1 id = "PA-p1"> Your impact on climate change primarily comes from what you eat, how you power your home and mobile devices, 
          and how you travel from place to place. The average US citizen emits 20 tons of greenhouse gas emissions per year due primarily to these activities.
          (This is 10 times the emissions from the average person in India, for example.) Here are a few ideas for reducing your carbon footprint:
        </p1>

        <box className ="line"></box>

        <h2 id = "h2"> Start taking invididual actions. </h2>

        <box id = "solutionMainBox">
          <box id = "solutionFrame">
            <subhead id ="s1"> ELECTRICITY </subhead>
            <image id ="solutionImage" style={{ backgroundImage: `url(${electricity})` }}></image>
            <p2 id ="p2"> If you own your own house, consider getting solar panels or looking into community solar projects in your area. 
              Also, check if your utilities offer renewable energy options (most do) and make the switch. 
              As renewable energy prices drop, this change can have little to no effect on your bills.
            </p2>
          </box>

          <box id = "solutionFrame">
            <subhead id ="s1"> FOOD </subhead>
            <image id ="solutionImage" style={{ backgroundImage: `url(${food})` }}></image>
            <p2 id ="p2"> Take a hard look at household food waste in your home and commit to cutting it from its current level.
              Only buy what you need and eat what you buy.
            </p2>
          </box>

          <box id = "solutionFrame">
            <subhead id ="s1"> TRANSPORTATION </subhead>
            <image id ="solutionImage" style={{ backgroundImage: `url(${travel})` }}></image>
            <p2 id ="p2"> Reduce the fossil fuel impact of your daily commute to work or school by riding your bike, carpooling,
              or using public transportation one or more days per week. If you own a fuel powered car, perhaps recondiser buying a hybrid or electric car.
            </p2>
          </box>
        </box> 

        <box className ="line"></box>

        <h3 id = "PA-h3"> Start fighting climate change with this actions. </h3>
        
        <Actions/>
          

      </body>

      <Footer/>
      
    </div>

  );
}