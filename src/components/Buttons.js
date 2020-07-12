import React from 'react';
const Buttons = (props) => {
    return(
        <div id="buttons">
            <a id="tweet-quote" href="www.twitter.com/intent/tweet" style={{backgroundColor: props.bgColor}}  target="_blank"><i className="fa fa-twitter icon" aria-hidden="true"></i></a>
            <a id="tumbler-quote" href="www.tumbler.com" style={{backgroundColor: props.bgColor}}  target="_blank"><i className="fa fa-tumblr icon" aria-hidden="true"></i></a>
            <button onClick={props.handler} id="new-quote" style={{backgroundColor: props.bgColor}}>New quote</button>
        </div>
    );
}

export default Buttons;