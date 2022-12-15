import Question from "./question";
import NavButtons from './navButtons';
import Answer from './answer';
import trivia from '../images/trivia-background.jpg';
import { Link } from "react-router-dom";


const QuestionGrid = props => {
    const {submitAnswer,help,questions,a,answerA,answerB,questionNum,lives,questionIndex,Adisplay,Bdisplay,helpUsed}=props;

    return (
    <div className="body" style={{backgroundImage:`url(${trivia})`}}>   

        <nav class="navbar navbar-expand-lg bg-dark">
        {a.map(button=><NavButtons questionIndex={questionIndex} id={button.id}/>)}
        </nav>

        <div className="position-absolute top-10 start-0 d-flex">

            <div className="livesContaner">

            {lives.map(lives=><div className="fs-1">{lives.heart}</div>)}

            </div>

            <div className="giveup">

                <button className="btn bg-danger fw-bold fs-4 giveupbutton" ><Link className="text-decoration-none" to="/lose">Give up</Link></button>           

            </div>    

            {helpUsed=='true'?<div></div>:<div><button onClick={()=>help()} className="btn fs-4 m-2 fw-bold bg-danger help">Get help</button></div>}

        </div>

    
        <div className="rounded border border-2 bg-light s">

            <div className="row 1">

                <div className="col c1 m-5" style={{height:"10em"}}>
                
                    <Question questionNum={questionNum} questions={questions} /> 

                </div>

            </div>

            <div className="answers" style={{height:"10em"}}>

            <div className="row r2">

            {Adisplay=='true'?<Answer lives={lives} questionIndex={questionIndex} questionNum={questionNum} submitAnswer={(string)=>submitAnswer(string)} answer={answerA}/>:<div></div>}

            </div>

            <div className="row r3">

            {Bdisplay=='true'?<Answer lives={lives} questionIndex={questionIndex} questionNum={questionNum} submitAnswer={(string)=>submitAnswer(string)} answer={answerB}/>:<div></div>}

            </div>
            </div>
        </div>

    </div>    
      );
}
 
export default QuestionGrid;