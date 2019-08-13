import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img style={{ width: '25vw', height:'30vh', margin: 'auto' }}
              src="https://i.imgur.com/JJgT7bq.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Who am I?</h1>

              <hr />

              <p>Edy Aaron Garcia Acevedo is a decedent from Mexico, 
              I know my name is not quite typical. Turns out the nurse
               missed spelled my name(I know it makes me wonder too).
                I have been living in the states for the past 12 years. 
                I have a passion for food(seafood is my weakness), I love watching movies, current my favorite
                 movie would have to be Captain Marvel, recently I discovered the importance of mediation so
                 being in a state of Zen is quite important to me, lastly I love to travel especially to places that have themed parks.  </p>
              <p>I spend my days crafting websites and creating modern applications. I tend 
              to believe  that I am modern magician, except I transform complex technical ideas
               into user-friendly applications . I believe in telling relatable stories through graphics.
                My portfolio showcases a lineup of my most recent tricks, which . I’m constantly learning web 
                technologies and other design related topics, currently obsessed  with playing around  React, Python, 
                Vue, and continuously learning the typical JavaScript . I’m a skilled in many areas of IT, design and development. 
 </p>


              
            </div>
          </Cell>
        </Grid>
      </div>
    
    )
  }
}

export default About;
