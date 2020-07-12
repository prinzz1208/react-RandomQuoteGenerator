import React,{ Component } from 'react';
import axios from 'axios';
import Quote from "../components/Quote";
import Buttons from "../components/Buttons";
import Author from "../components/Author";
class QuoteBox extends Component {
    state = {
        quotes:[],
        quote: "",
        author: "FALNA",
    }
    componentDidMount(){
        console.log("QuoteBox: Mounted");
        console.log("QuoteBox: color:",this.state.color);
        axios.get("https://type.fit/api/quotes")
            .then((res) => {
                var randomItem = res.data[Math.floor(Math.random()*res.data.length)];
                this.setState({quotes: res.data,quote: randomItem.text,author: randomItem.author});
            }
        )
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.color !== this.state.color;        
    // }

    
    nextQuoteHandler = (e) => {
        var randomItem = this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)];
        this.setState({quote: randomItem.text,author: randomItem.author});
        this.props.handler(e);
    }
    render() {
        return(
            <div id="quote-box" style={{color: this.props.color}}>
                <Quote 
                    color={this.state.color} 
                    text={this.state.quote}
                />
                <Author author={this.state.author}/>
                <Buttons bgColor={this.props.color} handler={(e) => this.nextQuoteHandler(e)}/>
            </div>
        )
    }
}
export default QuoteBox;