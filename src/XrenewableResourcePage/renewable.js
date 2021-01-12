import './renewable.css';
import '../publicStyles/publicStyles.css';

import React from "react";

import headerBackground from './rrBackground.jpg';
import solar from './REimages/solar.svg';
import wind from './REimages/wind.svg';
import hydro from './REimages/hydro.svg';
import tidal from './REimages/tidal.svg';
import geothermal from './REimages/geothermal.svg';
import biomass from './REimages/biomass.svg';

import energyStorage from './REimages/energyStorage.jpg';
import fuelCell from './REimages/fuelCell.jpg';
import energyEfficency from './REimages/energyEfficency.jpg';
import electrification from './REimages/electrification.jpg';

import biogas from './REimages/biogas.jpg';
import radientEnergy from './REimages/radient.jpg';
import fuelFromAir from './REimages/airFuel.jpg';

import {Header} from "../header&footer/header";
import {NavigationBar} from "../navigation/navBar";
import {Footer} from "../header&footer/footer";

export const Renewable = () => {
  return (
    <div className="rrMainFrame">

      <Header/>
      
      <div className = "headerImage" style={{ backgroundImage: `url(${headerBackground})`}}>
        <NavigationBar/>
      </div>

      <body className = "rrMainBody">
        <h1 className = "mainHeading">RENEWABLE RESOURCE'S ARE THE WAY TO GO</h1>

        <p1 id ="RE-p1"> 
          A renewable energy source means energy that is sustainable - something that can't run out, or is endless, like the sun.
          When you hear the term 'alternative energy' it's usually referring to renewable energy sources too.
          It means sources of energy that are alternative to the most commonly used non-sustainable sources - like coal.
        </p1>

        <h2 id = "RE-h2">Six most popular renewable energy sources:</h2>

        <box id = "REmainBoxFrame">
            <box id ="RErow">
                <box id ="energyFrame">
                  <image id ="reImage" style={{ backgroundImage: `url(${solar})`}}></image>
                  <box id ="REinfoMainBox">
                    <subhead id ="REsubheading"> SOLAR </subhead>
                    <p2 id ="REparagraph"> Sunlight is one of our planet’s most abundant and freely available energy resources. 
                      The amount of solar energy that reaches the earth’s surface in one hour is more than the planet’s total energy requirements for a whole year.  
                      In the UK, solar energy is an increasingly popular way to supplement your energy usage.
                    </p2>
                  </box>
                </box>

                <box id ="energyFrame">
                  <box id ="REinfoMainBox">
                    <subhead id ="REsubheading"> WIND </subhead>
                    <p2 id ="REparagraph">Wind is a plentiful source of clean energy.
                      To harness electricity from wind energy, turbines are used to drive generators which then feed electricity into the National Grid.
                      Wind farms are an increasingly familiar sight in the UK with wind power making an ever-increasing contribution to the National Grid.
                    </p2>
                  </box>
                  <image id ="reImage" style={{ backgroundImage: `url(${wind})`}}></image>
                </box>
            </box>

            <box className ="linee"></box>

            <box id ="RErow">
                <box id ="energyFrame">
                  <image id ="reImage"style={{ backgroundImage: `url(${hydro})`}}></image>
                  <box id ="REinfoMainBox">
                    <subhead id ="REsubheading"> HYDRO </subhead>
                    <p2 id ="REparagraph">By building a dam or barrier, a large reservoir can be used to create a controlled flow of water that will drive a turbine, generating electricity.
                      This energy source can often be more reliable than solar or wind power (especially if it's tidal rather than river) and also allows electricity to be stored for use when demand reaches a peak.
                    </p2>
                  </box>
                </box>

                <box id ="energyFrame">
                  <box id ="REinfoMainBox">
                    <subhead id ="REsubheading"> TIDAL </subhead>
                    <p2 id ="REparagraph"> This is another form of hydro energy that uses twice-daily tidal currents to drive turbine generators. 
                      Although tidal flow unlike some other hydro energy sources isn’t constant, it is highly predictable and can therefore compensate for the periods when the tide current is low.
                    </p2>
                  </box>
                  <image id ="reImage" style={{ backgroundImage: `url(${tidal})`}}></image>
                </box>
            </box>

            <box className ="linee"></box>

            <box id ="RErow">
                <box id ="energyFrame">
                  <image id ="reImage" style={{ backgroundImage: `url(${geothermal})`}}></image>
                  <box id ="REinfoMainBox">
                    <subhead id ="REsubheading"> GEOTHERMAL </subhead>
                    <p2 id ="REparagraph">By harnessing the natural heat below the earth’s surface, geothermal energy can be used to heat homes directly or to generate electricity.
                      Although it harnesses a power directly below our feet, geothermal energy is of negligible importance in the UK compared to countries such as Iceland, where geothermal heat is much more freely available.
                    </p2>
                  </box>
                </box>

                <box id ="energyFrame">
                  <box id ="REinfoMainBox">
                    <subhead id ="REsubheading"> BIOMASS </subhead>
                    <p2 id ="REparagraph">This is the conversion of solid fuel made from plant materials into electricity.
                      Biomass involves burning organic materials to produce electricity, and nowadays this is a much cleaner, more energy-efficient process.
                      By converting agricultural, industrial and domestic waste into solid, liquid and gas fuel, biomass generates power at a much lower economic and environmental cost.
                    </p2>
                  </box>
                  <image id ="reImage" style={{ backgroundImage: `url(${biomass})`}}></image>
                </box>
            </box>
        </box>

        <h1 id = "RE-h2">Emerging renewable energys and emissions reducers/boosters </h1>

        <p1 id ="RE-p1"> 
          Emerging renewable energy technologies as well as innovations that, by themselves, do not strictly generate energy. 
          Instead, they augment other renewable energy resources. 
          The "boosters," as we'll call them, are all about overcoming the intermittency of renewables like wind and solar and lower costs as well as emissions.
        </p1>

        <h2 id = "RE-h2">Renewable Energy Reducers and Boosters:</h2>

        <box id = "REboosterRow">
            <box id ="REboosterMainFrame">
              <subhead id ="REboosterHeading"> ENERGY STORAGE </subhead>
              <image id ="REboosterImage" style={{ backgroundImage: `url(${energyStorage})`}}></image>
              <p3 id="REboosterParagraph">
                By capturing energy produced at one time and storing it for use at another, energy storage is seen as a critical means to assure new energy sources are not wasted 
                (e.g., curtailment of wind and solar when there is too much energy on the grid) and are available when sources are not producing
                (e.g., at night when solar panels are not capturing energy from the sun). 
                Battery energy storage systems (BESS) are by far the fastest growing and most widely deployed energy storage,
                adding energy resiliency and significant cost savings when paired with solar and wind projects.
              </p3>
            </box>

            <box id ="REboosterMainFrame">
              <subhead id ="REboosterHeading"> FUEL CELL AND GREEN HYDROGEN </subhead>
              <image id ="REboosterImage" style={{ backgroundImage: `url(${fuelCell})`}}></image>
              <p3 id="REboosterParagraph">
                Fuel cells work like batteries, but they do not run down or need recharging. They produce electricity and heat as long as fuel is supplied.
                Today, that fuel is typically hydrogen made by the process of electrolysis of water using fossil fuels.
                To achieve no-emissions, a variant fuel source called "green hydrogen" is created by the same electrolysis process, but it is fueled by no-emissions wind and/or solar.
                Fuel cells are used to deliver on-site, baseload power.
              </p3>
            </box>
          </box>

          <box id = "REboosterRow">
            <box id ="REboosterMainFrame">
              <subhead id ="REboosterHeading"> ENERGY EFFICIENCY </subhead>
              <image id ="REboosterImage" style={{ backgroundImage: `url(${energyEfficency})`}}></image>
              <p3 id="REboosterParagraph">
                As buildings, vehicles, and devices all become more efficient, less energy is used or needed to be produced. 
                The less energy used, the less generation is needed. Assuring high levels of energy efficiency will lower the need for every energy generation source.
              </p3>
            </box>

            <box id ="REboosterMainFrame">
              <subhead id ="REboosterHeading"> ELECTRIFICATION </subhead>
              <image id ="REboosterImage" style={{ backgroundImage: `url(${electrification})`}}></image>
              <p3 id="REboosterParagraph">
                This is the conversion of a machine or system to electrical power. 
                From building heating and cooling to cars, buses, trucks, ships and aircraft, 
                electrification shifts energy needs to cleaner energy sources and helps to achieve net-zero emissions faster. 
                Many point to the future of energy being the decarbonization and electrification of vehicles. 
                That means everything from e-bikes to huge, 45-ton dump and mining trucks that are as big as a three-story office building.
              </p3>
            </box>
          </box>

        <h2 id = "RE-h2">Emerging renewable energy technologies:</h2>

        <box id = "emergingRErow">
            <box id ="REboosterMainFrame">
              <subhead id ="emergingREheading"> BIOGAS </subhead>
              <image id ="emergingREimage" style={{ backgroundImage: `url(${biogas})`}}></image>
              <p3 id="emergingREparagraph">
                Biogas is produced by anaerobic bacterial degradation of animal and plant wastes. 
                This differs from biomass/biofuels, which some call renewable because fuels like wood or sugar cane regenerate but were omitted from this list as they currently are considered "high emitting" fuel sources. 
                Bacteria are not picky eaters. These microorganisms devour agricultural waste, manure, municipal, sewage, green waste, or food waste. The resulting biogas is methane, also called natural gas, which is then combusted or burned to generate electricity.
              </p3>
            </box>

            <box id ="REboosterMainFrame">
              <subhead id ="emergingREheading"> RADIANT ENERGY </subhead>
              <image id ="emergingREimage" style={{ backgroundImage: `url(${radientEnergy})`}}></image>
              <p3 id="emergingREparagraph">
                As energy transmitted in wave motion, especially electromagnetic wave motion (e.g., magnets plus motion), 
                this natural energy form can be gathered directly from the environment or extracted from ordinary electricity by the method called fractionation. 
                One of the earliest wireless telephones to be based on radiant energy was invented by Nikola Tesla back in 1916. Today, 99% of the cost of normal electricity can be saved by the use of radiant energy. 
                There are a number of pilots of self-running devices that tap radiant energy. No power plant required. The ultimate renewable energy is that which happens in the device itself.
              </p3>
            </box>
        </box>

        <box id = "emergingRErow">
            <box id ="REboosterMainFrame">
              <subhead id ="emergingREheading"> FUEL MADE FROM SUNLIGHT AND AIR </subhead>
              <image id ="emergingREimage" style={{ backgroundImage: `url(${fuelFromAir})`}}></image>
              <p3 id="emergingREparagraph">
                Researchers at ETH Zurich have developed a technology capable of producing carbon-neutral liquid hydrocarbon fuels from just sunlight and air. 
                At their solar mini-refinery, the team has become the first in the world to demonstrate the process under real conditions.
                <a href="https://ethz.ch/en/news-and-events/eth-news/news/2019/06/pr-solar-mini-refinery.html" id="fuelFromAirlink"> Click here to learn more...
                </a>
              </p3>
            </box>
        </box>

      </body>

      <Footer/>
      
    </div>

  );
}