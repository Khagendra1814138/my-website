import './home.css';
import '../publicStyles/publicStyles.css';

import React from "react";

import headerBackground from './homeBackground.jpg';
import coral from './Himages/coralBleach.jpg';
import renewable from './Himages/renewableEnergy.jpg';
import planetA from './Himages/planetAction.jpg';
import flooding from './Himages/flooding.jpg';
import seaLevelRise from './Himages/seaRise.jpg';
import iceFree from './Himages/iceFree.jpg';
import heat from './Himages/heatWave.jpg';
import wildlifeHabitat from './Himages/wildlife.jpg';

import {Header} from "../header&footer/header";
import {NavigationBar} from "../navigation/navBar";
import {Footer} from "../header&footer/footer";


export const Home = () => {
  return (
    <div className="homeMainFrame">

      <Header/>

      <div className = "headerImage" style={{ backgroundImage: `url(${headerBackground})`}}>
        <NavigationBar/>
      </div>

      <body className = "homeMainBody">
        <h1 className = "mainHeading"> OUR PLANET IS WARMING! </h1>

        <box id ="threatRow">
          <box className = "imgMainBox"> 
            <box className = "imgBox1" style={{ backgroundImage: `url(${seaLevelRise})`}}></box>
            <box className = "threatTitle"> SEA LEVEL RISE </box>
            <box className = "threatBrief"> 
              Sea level and temperature will rise by 2100 from 1.5°C and 1.5 feet to 2°C and 1.8 feet. 
              Rising sea levels could impact 1 billion people by the year 2050 
            </box>
          </box>

          <box className = "imgMainBox"> 
            <box className = "imgBox1" style={{ backgroundImage: `url(${coral})`}}></box>
            <box className = "threatTitle"> CORAL BLEACHING </box>
            <box className = "threatBrief"> 
              Changes in water temperature causes algae to leave coral reefs, 
              turning them white and making them vulnerable to disease and death, a phenomenon known as coral bleaching. 
            </box>
          </box>

          <box className = "imgMainBox"> 
            <box className = "imgBox1" style={{ backgroundImage: `url(${iceFree})`}}></box>
            <box className = "threatTitle"> ICE-FREE ARCTIC </box>
            <box className = "threatBrief"> 
              Arctic sea ice recedes every summer, but still covers millions of square miles of ocean today. 
              But the Arctic is warming faster than anywhere else on Earth and ice-free summers could become a reality. 
            </box>
          </box>
        </box>

        <box id ="threatRow">
          <box className = "imgMainBox"> 
            <box className = "imgBox1" style={{ backgroundImage: `url(${heat})`}}></box>
            <box className = "threatTitle"> HEAT WAVES </box>
            <box className = "threatBrief"> 
              Heat waves will become more frequent and severe around the world, 
              affecting hundreds of millions—or even billions—of people if we don’t act. 
            </box>
          </box>

          <box className = "imgMainBox"> 
            <box className = "imgBox1" style={{ backgroundImage: `url(${flooding})`}}> </box>
            <box className = "threatTitle"> FLOODING </box>
            <box className = "threatBrief"> 
              Global warming increases the risk of more frequent—and heavier—rainfall, 
              snowfall, and other precipitation. And as that risk increases, so too does the risk of flooding. 
            </box>
          </box>

          <box className = "imgMainBox"> 
            <box className = "imgBox1" style={{ backgroundImage: `url(${wildlifeHabitat})`}}></box>
            <box className = "threatTitle"> WILDLIFE HABITAT </box>
            <box className = "threatBrief"> 
              As the earth continues to warm, crucial habitats may no longer be hospitable for certain animals or plants. 
              This puts a variety of species at risk, depending on whether they can adapt or move. 
            </box>
          </box>
        </box>
 
 
        <h1 className = "heading2"> TWO MAIN SOLUTIONS! </h1>
        
        <box id ="solutionRow">
          <box className = "imageBox2" style={{ backgroundImage: `url(${renewable})` }}></box>
          <box className = "p1Box">
            <h2 className = "h2"> RENEWABLE RESOURCE'S </h2>
            <p1 className ="paragraph1">
              A renewable resource is a natural resource which will replenish to replace the portion depleted by usage and consumption, 
              either through natural reproduction or other recurring processes in a finite amount of time in a human time scale.
              Renewable resources are a part of Earth's natural environment and the largest components of its ecosphere. 
              A positive life cycle assessment is a key indicator of a resource's sustainability.
            </p1>
          </box>
        </box>

        <box id ="solutionRow">
          <box className = "p1Box">
            <h2 className = "h2"> CLIMATE ACTION'S </h2>
            <p1 className ="paragraph1">
              Climate action means stepped-up efforts to reduce greenhouse gas emissions and strengthen resilience and adaptive capacity to climate-induced impacts, 
              including: climate-related hazards in all countries; integrating climate change measures into national policies, strategies and planning; and improving education...
            </p1>
          </box>
          <box className = "imageBox2" style={{ backgroundImage: `url(${planetA})`}}></box>
        </box>
      </body>
      <Footer/>
    </div>
  );
}

