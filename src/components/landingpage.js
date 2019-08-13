import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.imgur.com/9QnJXww.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Software Engineer</h1>

            <hr/>

              <p>HTML/CSS | JavaScript | Python | React | Bootstrap | NodeJS | Express | Django | MongoDB | SQL | </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/edy-garcia-74619b142/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/garciaedy" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

         

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
