import React from 'react'
class timer extends React.Component{
// const timer = props =>(
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
      }
    
      tick() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
// );
    }
export default timer 