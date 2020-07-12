import React from 'react';

const Quote = (props) => {
    return(
        <div id="text" style={{color: props.color}}>            
            <p>
            <i className="fa fa-quote-left quote" aria-hidden="true"></i>
            {props.text} </p>
        </div>
    )
}
export default Quote;