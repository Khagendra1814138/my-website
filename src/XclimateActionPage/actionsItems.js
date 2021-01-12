import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./items"
import "./stuff.css";

import reforestation from './CAimages/reforestation.jpg';
import pledge from './CAimages/pledge.jpg';
import encourage from './CAimages/encourage.jpg';
import congress from './CAimages/congress.jpg';

const breakPoints = [
  {itemsToShow: 1},
];

export const Actions = () => {
    return (
      <div>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <box id ="image1" style={{ backgroundImage: `url(${pledge})`}}></box>
            <h1 id = "h1"> Pledge to Do More individual actions. </h1>
            <p1 id = "p1"> Your impact on climate change primarily comes from: what you eat, how you power your homes and mobile devices, and how you travel from place to place. The average UK citizen emits 8.34 tons of greenhouse gas emissions per year due primarily to these activities.
             (This is ten times the emissions from the average person in India, for example.) Can you commit to cutting your carbon footprint as we do the same?
             You can commit to reducing your carbon footprint by taking a hard look at the electricity you use, how you get from place to place, and the footprint of your food.
            </p1>
          </Item>

          <Item>
            <box id ="image1" style={{ backgroundImage: `url(${encourage})`}}></box>
            <h1 id = "h1"> Encourage Businesses to Join the Movement. </h1>
            <p1 id = "p1"> Companies are the world's largest energy users. With that comes enormous opportunity—and responsibility. Energy for electricity production and industrial uses is the cause of nearly half of the world's global greenhouse gas emissions. And well over two-thirds of that delivered electricity is for commercial and industrial users. So, shifting the behavior of companies is fundamental to the clean energy transition and to reducing emissions on the scale needed to fight global climate change.
              Companies who are serious about climate change should:
              Set science-based target for their full carbon footprint;
              Commit to powering their operations with renewable energy; 
              and Tackle emissions from their supply chains by working with their suppliers.
            </p1>
          </Item>

          <Item>
            <box id ="image1" style={{ backgroundImage: `url(${congress})`}}></box>
            <h1 id = "h1"> Tell Congress: We Need a 100% Clean Energy Economy. </h1>
            <p1 id = "p1">
              Our climate is changing around us faster than predicted, but it's not too late to change course. 
              To limit warming to 1.5° C, we must take swift action—including building a more comprehensive climate policy.
              A newly introduced bill in Congress would set the United States' economy on a path to 100 percent clean energy by 2050. 
              Ask your Member of Congress to cosponsor the 100% Clean Economy Act of 2019.
            </p1>
          </Item>
          
          <Item>
            <box id ="image1" style={{ backgroundImage: `url(${reforestation})`}}> </box>
            <h1 id = "h1"> Join and support reforestation organisations. </h1>
            <p1 id = "p1">
              Forests are one of our most powerful tools to combat climate change and provide food and habitat for the species of the world. But our forests are under threat.
              Our planet is currently losing forests at a staggering rate: We’re losing more than 18 million acres of forests every year — that’s about 27 soccer fields of forest lost every minute.
              Planting trees benefit local communities, increase habitat for species, and combat climate change.

              Trees filter the air and stave off the effects of climate change. Trees also reverse the impacts of land degradation and provide food, energy and income to communities.
            </p1>
          </Item>
        </Carousel>
      </div>
 
    );
  }