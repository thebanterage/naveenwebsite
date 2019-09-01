import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar'
import Button from '@material-ui/core/Button';
import { pink } from '@material-ui/core/colors';


class App extends Component {
    // Initialize state
    state = { 
        loading: true,
        projects: []
     };

    // On load
    componentDidMount() {
        demoAsyncCall().then(() => this.setState({ loading: false }));
        this.getProjects();
    }

    // Set state with our projects
    getProjects = () => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({projects}));
    }

    render() {
        const {  projects,loading } = this.state;
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return null; // render null when app is not ready
      }
        return (
            <div className="App">
                <Navbar/>

                <div className='intro'>
                <p>Hi, my name is</p>
                <h1>Naveen Bandarage</h1>
                <h3>I'm a developer</h3>
                <p>I am a second-year software engineering student who is studying at the <b><a href="https://www.victoria.ac.nz/" style = {{color: 'black',}} onMouseOver= {{color:pink}}
   onMouseOut="this.style.color='black'" target = "_blank">Victoria University of Wellington</a></b>.</p>
                <h4>Here are a few of my projects</h4>
                </div>
                {
                    projects.length ? (
                        projects.map((project, index) => (
                          
                            <div key={project.name}>
                                <p><b><Button 
    variant="contained"
    href={project.html_url}>
    {project.name}
  </Button></b></p>
                                <p>{project.description}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            I don't have any projects
                        </div>
                    )
                }
                //for some reason class name works but id doesnt 
                <div className="AboutMeSection">
                <h1>About me</h1>
                <p>Hello! I'm Naveen, a second-year software engineering student studying at the Victoria University of Wellington. </p>
                <p>Here are some of the languages I am working with</p>
                <ul className="ColoredList">
                <li>Java</li>
                <li>C++</li>
                <li>C</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript (Fiddling with React at the moment)</li>

                </ul>

                </div>
                 <div>
                     <h1 className="h1Heading">Where can you find me?</h1>
                <p className="pText">Of course you can find me online but it's probably easier to find me studying and just having fun at the university. </p>
                <iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.848494505926!2d174.76866149999998!3d-41.2904017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b02952575dbb%3A0xadf3ba89622116f0!2sVictoria%20University%20of%20Wellington!5e0!3m2!1sen!2snz!4v1567327128399!5m2!1sen!2snz;zoom=15"
    width="100%" height="450"></iframe>
            </div> 
            <footer className="FooterId">
                <div >
                    Copyright @ Naveen Bandarage </div>
            </footer>

            </div>
           
        );
    }
}
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  
  

export default App;