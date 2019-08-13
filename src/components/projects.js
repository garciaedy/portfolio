import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/rN2vu3X.png) center / cover'}} >Connect 4</CardTitle>
            <CardText>
              
            </CardText>
            <CardActions border>
              <a href="https://git.generalassemb.ly/garciaedy/Project1" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>

              <a href="https://nervous-payne-4086df.netlify.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>


            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(https://i.imgur.com/bfvTFxE.png'}} >Game Collector</CardTitle>
            <CardText>
             
            </CardText>
            <CardActions border>
              <a href="https://git.generalassemb.ly/garciaedy/ProjectTwo" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>

              <a href="https://evening-caverns-35147.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://evening-caverns-35147.herokuapp.com/ center / cover center / cover'}} >Library Builder</CardTitle>
            <CardText>
              
            </CardText>
            <CardActions border>
       
              <a href="https://git.generalassemb.ly/garciaedy/project3" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>

              <a href="https://sheltered-sierra-26653.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>


            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '180px', background: 'url(https://i.imgur.com/8J3OkR8.jpg' }} >Resume Builder</CardTitle>
            <CardText>
              
            </CardText>
            <CardActions border>
              <a href="https://git.generalassemb.ly/garciaedy/FinalP" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>

              <a href="https://fast-cove-30490.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>

            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



        </div>


      )
    } 
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
      
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
