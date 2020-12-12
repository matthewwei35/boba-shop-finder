import React from 'react';
import picture from '../../boba.jpg';
import './About.css';

function About() {
  return (
    <div className="About">
      <h1>About Boba Shop Finder</h1>
      <div className="About-Subtitle">Boba Shops in the Sunset</div>
      <div className="About-Paragraph">
        <img src={picture}
          width="300"
          height="300"
          alt="Bubble tea (Boba) in a glass"
        />
        <p>
          Bubble tea (aka Boba) is a tea-based drink. Originating in Taichung, Taiwan in the early 1980s, it includes chewy tapioca balls or a wide range of other toppings. 
          Ice-blended versions are frozen and put into a blender, resulting in a slushy consistency. There are many varieties of the drink with a wide range of flavors 
          (<a href="https://en.wikipedia.org/wiki/Bubble_tea">Wikipedia</a>). Boba is often drunk when you hangout with friends and you need a quick refreshment. It also 
          goes well with snacks like popcorn chicken or fries, a staple of most Boba shops in the Bay Area and around the world. Boba Shop Finder is specialized for Boba Shops 
          located in the Sunset District in San Francisco.
        </p>
      </div>

      <hr className="Divider"></hr>

      <div className="WIP">
        <h2>WORK IN PROGRESS</h2>
        <p>
          This site doesn't currently have all the Boba shops in the Sunset District but I'll be working towards that in later iterations.
        </p>
      </div>
    </div>
  )
}

export default About;
