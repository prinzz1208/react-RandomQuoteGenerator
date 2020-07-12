import React, {useState, Component} from 'react';
import QuoteBox from './containers/QuoteBox';
class App extends Component {
  
  state = {
    color: ""
  }
  random_color = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var color2 = "rgb(" + x + "," + y + "," + z + ")";
    this.setState({color:color2});  
  }
  componentDidMount(){
    this.random_color();
  }
  clickHandler = (e) => {
    this.random_color();
  }
  render(){
    return (
      <div className="App" style={{backgroundColor:this.state.color, color: this.state.color}}>
        <QuoteBox color={this.state.color} handler={this.clickHandler} />
      </div>
    );
  }
}
export default App;
