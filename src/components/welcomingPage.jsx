import React from "react";
import { Link } from "react-router-dom";
const WelcomingPage = props => {
    const {randomQuestion}=props;
    return ( 
       
        <div className="bg-warning start">

            <h1 className="play">LET'S PLAY</h1>

            <div className="trivia">
                 <h1 className="triviaHeader">TRIVIA</h1>    
                 <button className="triviaButton bg-warning" onClick={()=>randomQuestion()}><Link className="text-decoration-none" to={"/game"}>START</Link></button>
            </div>
        </div>
       
     );
}
 
export default WelcomingPage;