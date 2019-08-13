import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.imgur.com/9QnJXww.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Edy Garcia</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Creative Full-Stack Software Developer, who enjoys a collaborative work environment.
             I have hands-on experience in back-end and front-end technologies for making responsive 
             web applications and expertise in IT Support, with extensive customer service skills. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Contact</h5>
            <p>(404) 510-2909</p>
            <h5>Edygarcia97@gmail.com</h5>
         
            <h5>Github</h5>
            <p>https://github.com/garciaedy</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2019}
              schoolName="General Assembly"
              schoolDescription="General Assembly Web Development Immerse (WDI) 
              is a 12-week long training program dedicated to give students a deep 
              dive into the world of web development."
               />

               <Education
                 startYear={2017}
                 endYear={"Present"}
                 schoolName="Georgia State University"
                 schoolDescription="Currently enrolled as a part-time student with a major in Software Engineering"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="General Assembly"
              jobDescription="	Design and Developed Web Applications 
              using Technologies that included: JavaScript, CSS, Node, 
              Express, MongoDB, React and Python. "
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Kaiser Permanente"
              jobDescription="Installed and tested desktop software applications, along with Handling daily technical 
              support activities on desktop support to ensure proper functioning of computer systems, data network and server management. 
            "
              />

              <Experience
                startYear={2013}
                endYear={2018}
                jobName="Early Career"
                jobDescription="Hospitality Industry; received multi-year recognition for outstanding customer service.
                Construction Industry: directed and coordinated activities for over 30 personnel, engaged in buying, 
                distributing materials, equipment, machinery, and supplies."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={85}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={85}
                  />
                  <Skills
                    skill="Python"
                    progress={70}
                    />
                    <Skills
                      skill="Django"
                      progress={80}
                      />
            <Skills
            skill="SQL"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={90}
            />
            <Skills
              skill="React"
              progress={85}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
