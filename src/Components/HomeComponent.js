import React from 'react';
import Jumbotron from 'reactstrap/lib/Jumbotron';

function Home(props) {

    return (
        <div id="home">
            <h1 >Hello</h1>
            <p >
                I am  a computer science graduate interested in Web-Development. 
                I am currently exploring Reactjs (This web site is built using react).

                <Jumbotron style={{color: 'black', marginTop: "10%", textAlign: "left"}}>
                    <p>
                        Often we face with situations where we have to deliver features in near deadlines. But do we compromise in the code quality?
                    </p> <br/>
                    Well, I believe we mustn't. Any feature is bound to expand in the near future. Had the code quality been compromised, 
                    expanding from that point might become impossible. <br />
                    At the very least, we must arrive at a sweet spot in such scenarios, thinking about the future while developing the current functionality.
                </Jumbotron>
            </p>
        </div>
    );
}

export default Home;