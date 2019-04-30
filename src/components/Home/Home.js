import React, { Component } from 'react';
import {Button, Col} from 'reactstrap'; 
import './Home.css';
import CircularProgressbar from 'react-circular-progressbar';

function Label(props) 
{
  return<div style={{marginTop:25, marginBottom: 5}}>{props.children}</div>;
}
class Home extends Component {

    constructor(props){
        super(props);
    
    this.x = <Button>Another BUtton</Button>; 
    this.ProgressBar = <CircularProgressbar 
    
                          percentage = {50} 
                          text={`${50}%`} 
                          background = {true}
                          initialAnimation = {true} 
                          styles={{
                                width: '50vw',
                                maxWidth: '50vw',
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                  // Path color
                                  stroke: `#D32F2F`,
                                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                  strokeLinecap: 'round',
                                  // Customize transition animation
                                  transition: 'stroke-dashoffset 5.0s ease 0s',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                  // Trail color
                                  stroke: '#D9D9D9',
                                },
                                // Customize the text
                                text: {
                                  // Text color
                                  fill: '#D32F2F',
                                  // Text size
                                  fontSize: '15px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                  fill: '#212121',

                                },
                              }}/>;
        

        this.state={
            change : true
        }

        // use if there's 'this' keyword in function
        this.setTitle = this.setTitle.bind(this);
    }

    setTitle(){
        this.x = 0;
        this.setState({
            change : true
        });
    }
//<Button  onClick={this.setTitle}>Click</Button>
//{this.x}
   render() {
       console.log("test");
       return (
           <div className="counter">
              {/* <header className="Counter1"></header> */}
                <Label>Calorie Counter</Label>
                <Col style={{width:"50vw"}}>
                {this.ProgressBar}
                </Col>
           </div>
       );
   }
}

export default Home;