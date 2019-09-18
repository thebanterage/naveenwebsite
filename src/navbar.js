import React from 'react'
import Pdf from './naveencv_compressed.pdf'
import SplitText from 'react-pose-text';
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


const NavBar = () =>{

    return(
        <header className='navbar'>
        <nav className='navbarnav'>
         
            <div className='navbarlogo'><a href="">Naveen Bandarage</a></div>
            <div className='spacing'></div>
            <div className="navitems">
                <ul>
                    <li><a href="#AboutMeSection"> <SplitText wordPoses={wordPoses} charPoses={charPoses}>
About</SplitText></a></li>
                    <li><a href="/"> <SplitText wordPoses={wordPoses} charPoses={charPoses}>
Projects</SplitText></a></li>
                    <li><a href="/"><SplitText wordPoses={wordPoses} charPoses={charPoses}>
                    Contact</SplitText></a></li>
                    <li><a href = {Pdf} target = "_blank"><SplitText wordPoses={wordPoses} charPoses={charPoses}>
                    Resume</SplitText></a></li>

                </ul>
            </div>
        </nav>
        </header>
    );
}
export default NavBar