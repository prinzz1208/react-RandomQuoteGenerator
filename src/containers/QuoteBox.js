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
        color: "",
    }
    componentDidMount(){
        console.log("QuoteBox: Mounted");
        // console.log("QuoteBox: color:",this.state.color);
        axios.get("https://type.fit/api/quotes")
            .then((res) => {
                var randomItem = res.data[Math.floor(Math.random()*res.data.length)];
                this.setState({quotes: res.data,quote: randomItem.text,author: randomItem.author});
            }
        )
    }
    
    static getDerivedStateFromProps(props,state) {
        if(state.quotes.length !== 0){
            const randomItem = state.quotes[Math.floor(Math.random()*state.quotes.length)];
            const quote2 = randomItem.text;
            const author2 =  randomItem.author;
            return ({quote: quote2,author: author2,color: props.color});

        }
        return ({color: props.color});

    }
    
    render() {
        return(
            <div id="quote-box" style={{color: this.state.color}}>
                <Quote 
                    color={this.state.color} 
                    text={this.state.quote}
                />
                <Author author={this.state.author}/>
                <Buttons bgColor={this.state.color} handler={(e) => this.props.handler(e)}/>
            </div>
        )
    }
}
export default QuoteBox;