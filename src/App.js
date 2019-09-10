import React, { Component } from 'react';
import './App.css';
import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animation'
import Navbar from './navbar'
import Button from '@material-ui/core/Button';
import { pink } from '@material-ui/core/colors';
import sideBar from './hamburger/sidebar'
import posed from 'react-pose';
import SplitText from 'react-pose-text';
import reactLogo from './logo.svg'
import GitHub from './github.png'
import Twitter from './twitter.png'
import Spotify from './spotify.png'
import Instagram from './instagramicon.png'
import LinkedIn from './linkedin-logo.png'
import image1 from './image1.JPG'
import image2 from './image2.JPG'
import image3 from './image3.JPG'
import image4 from './image4.JPG'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import {Spring, config} from 'react-spring/renderprops'
import NavBar from './navbar';
import Pdf from './naveencv_compressed.pdf'
import Chess from './chess.png'
import Gym from './dumbbell.png'
import Person from './employee.png'
import Rapper from './rapper.png'
import Anime from './studio-ghibli.png'




//import { TabsContainer } from '@zendeskgarden/react-tabs'
//import '@zendeskgarden/react-tabs/dist/styles.css';

//import { ThemeProvider } from '@zendeskgarden/react-theming';
//import { Tabs, TabPanel } from '@zendeskgarden/react-tabs';



const wordPoses = {
    draggable: true,
    dragEnd: {
        x: 0,
        y: 0,
        transition: { type: 'spring' }
      }
  };
  
  const charPoses = {
    draggable: 'x',
    dragBounds: { left: '-2%', right: '2%' },
    drag: {
      y: 0,
      transition: ({ charInWordIndex }) => ({
        type: 'spring',
        velocity: 100 * Math.sin(1 + charInWordIndex),
        damping: 0
      })
    },
    dragEnd: {
        x: 0,
        y: 0,
        transition: { type: 'spring' }
      }
  };

 const Box = posed.div({
draggable: 'x',
dragBounds: { left: '-2%', right: '2%' },
  
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 },
});

class App extends Component {
    // Initialize state
    state = { 
        loading: true,
        projects: [],
        seconds: 0,
        isVisible: true
     };

    // On load
    componentDidMount() {
        this.setState({ loading: false });
        this.getProjects();
        setInterval(() => {
            this.setState({ isVisible: !this.state.isVisible });
          }, 1000);
    }

    // Set state with our projects
    getProjects = () => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({projects}));
    }
    render() {
        const {  projects,loading } = this.state;
        const Bounce = styled.div`animation: 10s ${keyframes`${bounce}`} infinite`;
        const { isVisible } = this.state;
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return null; // render null when app is not ready
      }

        return (
            <div className="App">
               <div style={{height: '100%'}}></div>
                <sideBar/>


                
                <Parallax ref={ref => (this.parallax = ref)} pages={6}>              

        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#A1C3d1;' }} />

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#A1C3d1' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#b39bc8' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#F172A1' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#F172A1' }} />
        <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#E64398' }} />
        <ParallaxLayer offset={5} speed={1} style={{ backgroundColor: '#CEBC81' }} />




        <ParallaxLayer offset={0} speed={0} factor={6}>

        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>

        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          
        </ParallaxLayer>


        <ParallaxLayer offset={2.2} speed={-0.1} style={{ opacity: 0.2 }}>
        <div className="flaticon">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* <Navbar/> */}

<div className='intro'>
                <Bounce><p className='Hi'>Hi, my name is</p>
</Bounce>
<Spring 
  from={{ opacity: 0, delay: 10 }}
  to={{ opacity: 1 }} >
  {props => <div style={props}><h1 className='NaveenBandarage'> <SplitText wordPoses={wordPoses} charPoses={charPoses}>
Naveen Bandarage</SplitText>
                </h1>
                <h1>I like to code.</h1>
                <p className="VictoriaUni">Second-year Software Engineering student at the <b><a href="https://www.victoria.ac.nz/" target = "_blank">Victoria University of Wellington</a></b>.</p></div>}
</Spring>

<p className="VictoriaUni"><b><a> <SplitText wordPoses={wordPoses} charPoses={charPoses}>
Click </SplitText></a></b>or scroll to navigate.</p>
       
                </div>
                        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}>


<div id="AboutMeSection">
                <h1 id="aboutme">About me</h1>
 <p>Hello again, welcome to my website! I'm Naveen, a second-year Software Engineering student studying at the Victoria University of Wellington. I am highly motivated and finished my first year with flying colours. I am at this stage looking for a Summer internship to further develop and refine the skills I have. My long term aspiration is to eventually work in the Cybersecurity field.</p>  <p>Please note this website is a work in progress so there are some bugs that need to be worked out.</p>
 <p>Here are some of the languages I am working with</p> 
                <ul className="ColoredList">
                   <li>Java</li>
                   <li>C++</li>
                  <li>C</li>
                  <li>Sql</li>
                  </ul>
             <ul>
                 <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
                <h2>Education</h2>
                 <p>Victoria University of Wellington - Bachelor of Engineering with Honours</p>
                 <p>March 2017 - Present</p>
                 <p>Heretaunga College - Graduated as Proxime Accessite with NCEA Levels 1,2, and 3 excellence endorsed (99, 90, 72 credits respectively) </p>
                 <p>February 2013 - December 2017</p>
                 <h1>Want more information?</h1>
                 <p className="resumelink">I have attached my resume right <b><a href={Pdf} target = "_blank">here</a></b>.</p>
                </div>   
                </ParallaxLayer>
                <ParallaxLayer
          offset={2}
          speed={-0}
          onClick={() => this.parallax.scrollTo(3)}>
<div className="interests">
                    <h1>However I am more than just a coder</h1>
                    <p>I have a quite a few interests that I like to pursue in my free time.</p>
                   <div>
                     <div>
                    <h3><img className="Chess"src={Chess}width="40"height="40"></img>       
Chess</h3>
                    <p>I am a avid chess player. I used to play to play in quite a few tournaments when I was younger (not so much now). </p>
                    </div>
                    <div>
                    <h3><img className="Anime"src={Anime}width="40"height="40"></img>            
Anime</h3>
                    <p>I am a big fan of Shonen Anime and manga as well as Japanese culture as a whole. Some of my favourite series include One Piece, My Hero Academia, Full Metal Alchemist and more. </p>
                    </div>
                    <div>
                    <h3><img className="Rapper"src={Rapper}width="40"height="40"></img> 
Music</h3>
                    <p>I love listening to music particularly Rap music and RNB but I really like all types of music and my tastes vary. Last year I listened to over 55,000 minutes of music according to Spotify. 
</p>
</div><div>
                    <h3><img className="Gym"src={Gym}width="40"height="40"></img> 
Sports</h3>
                    <p>I am a big sports enthusiast. I love to debate and watch a wide variety of sports Football, Basketball, American Football you name it I’m probably into it. I’m quite active in my free time as well and I consider myself a bit of a gym nut. But I do enjoy a good run as well.</p>
                    </div>
                    </div>
                </div>
                        </ParallaxLayer>
                        <ParallaxLayer
          offset={3}
          speed={-0}
          onClick={() => this.parallax.scrollTo(4)}>
   <div id="projects">
                <h1>Projects</h1>
                <h2>These are some of the things I am working on coding and otherwise.</h2>
                <p>Javascript/React</p>
                <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />
                <p>Film Photography</p>
                <p className = "filmCamera">These aren't the best but I am working on my film photography skills. These were taken on an Olympus OM101 35mm Film Camera</p>
                 <div className="photosrow">
                     <div className="photoscol">
                     <a href="https://www.linkedin.com/in/naveenbandarage/" target = "_blank"><img className="linkedin"src={image1}width="400"height="300"></img></a>
              
                     </div>
                     <div className="photoscol">
                     <a href="https://www.linkedin.com/in/naveenbandarage/" target = "_blank"><img className="linkedin"src={image4} width="400"height="300" ></img></a>

                     </div>   
                     <div className="photoscol">
                     <a href="https://www.linkedin.com/in/naveenbandarage/" target = "_blank"><img className="linkedin"src={image2} width="400"height="300" ></img></a>

                     </div>  
                     
                     </div>   
            </div>
        </ParallaxLayer>
                <ParallaxLayer
          offset={4}
          speed={-0}
          onClick={() => this.parallax.scrollTo(5)}>
 <div className="WhereIworked">
                <h1>Where I have worked</h1>
                <p className="InspirationEducation">Currently I am employed with <b><a href="https://inspirationeducation.co.nz/" target = "_blank">Inspiration Education</a></b></p>

                <Tabs>
    <TabList>
      <Tab><SplitText wordPoses={wordPoses} charPoses={charPoses}>
      Inspiration Education</SplitText></Tab>
      <Tab><SplitText wordPoses={wordPoses} charPoses={charPoses}>
      New World Silverstream</SplitText></Tab>
    </TabList>
 
    <TabPanel>
    <h3>Education Consultant @ Inspiration Education</h3>
    <p>August 2019 - Present </p>
    <p>In this role I have the following things:</p>
    <li>Succesfuly being able to help high school students in a 1 on 1 setting. An
example was helping one student in a short period of time go from Not
Achieved to high Merit/Excellence in Calculus.</li>
    <li>Being able to communicate and explain to parents the performance of their child </li>

    </TabPanel>
    <TabPanel>
    <h3>Checkout Supervisor and Grocery Assistant @ <b><a href="https://www.newworld.co.nz/lower-north-island/wellington/silverstream" target = "_blank">New World Silverstream</a></b></h3>
      <p>October 2016 - August 2019</p>
    <p>In this role I had to do the following things:</p>
    <li>Supervising and managing staff effectively and efficiently.</li>
    <li>Using communication skills to resolve conflicts when they arise and overall working towards a happy and stable team environment.</li>
    <li>Being able to work under pressure and maintain a high level of attention to detail.</li>
    </TabPanel>
  </Tabs> 
            
                 </div>
                        </ParallaxLayer>
        
        <ParallaxLayer
          offset={5}
          speed={-0}
          onClick={() => this.parallax.scrollTo(0)}>
<div className="containerP">
                     <h1 className="h1Heading">Where can you find me?</h1>
                <p className="pText">Of course you can find me online but in the case that you can't you'll probably find me studying and just having fun at the university.</p>

                <iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.848494505926!2d174.76866149999998!3d-41.2904017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b02952575dbb%3A0xadf3ba89622116f0!2sVictoria%20University%20of%20Wellington!5e0!3m2!1sen!2snz!4v1567327128399!5m2!1sen!2snz;zoom=15"
    width="100%" height="300"></iframe>
            <div>
            <div className="contactme">
                <h1>Where can you contact me?</h1>
                <p>Here are my social media accounts</p>
            <div className="socialMedia">
            <div class="overlay-effect"></div>
                <ul id='overlay'>
                    <li className="linkedin"><a href="https://www.linkedin.com/in/naveenbandarage/" target = "_blank"><img className="linkedin"src={LinkedIn} width="32" height="32" ></img></a></li>
                    <li className="twitter"><a href="https://twitter.com/naveenbandarage" target = "_blank"><img className="twitter"src={Twitter} width="32" height="32" ></img></a></li>
                    <li className="github"><a href="https://github.com/thebanterage/" target = "_blank"><img className="github"src={GitHub} width="32" height="32" ></img></a></li>
                    <li className="instagram"><a href="https://www.instagram.com/naveenbandarage/" target = "_blank"><img className="instagram"src={Instagram} width="32" height="32" ></img></a></li>
                    <li className="spotify"><a href="https://open.spotify.com/user/naveen.bandarage?si=vg_7-oZxR52MbBvCdKdFRg" target = "_blank"><img className="github"src={Spotify} width="32" height="32" ></img></a></li>
                </ul>
                </div>
                <div class="overlay">  </div>
                <p>Otherwise feel free to flick me an email.</p>
                <p><b><a href="mailto:bandaragenaveen@gmail.com"> <SplitText wordPoses={wordPoses} charPoses={charPoses}>
bandaragenaveen@gmail.com</SplitText></a></b></p>
<div className="sitemaker">
            <p>This site was made with: <a href="https://reactjs.org/"> <SplitText wordPoses={wordPoses} charPoses={charPoses}>
React</SplitText></a> and <a href="https://popmotion.io/pose/"><SplitText wordPoses={wordPoses} charPoses={charPoses}>
Pose</SplitText></a></p>
<p>Icons made by Freepik from www.flaticon.com</p>
          
            </div>
            </div>    
            </div>   
            <footer className="FooterId">
                <div >
            
                    <p>Designed and Built by Naveen Bandarage</p>
                           
                     </div>
            </footer>
</div>    
            </ParallaxLayer>
        

      </Parallax>
    
                
                
                
                
             

           
          

            </div>
           
        );
    }
}
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  
  

export default App;