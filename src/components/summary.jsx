const Summary = props => {
    const {questions,questionIndex,usedQuestions}=props;
    return ( 
        (questionIndex).length==0?<div className="fs-3 sum bg-warning rounded"><p>You suck!</p></div>:<div>{usedQuestions.splice(0,usedQuestions.length-1).map((num,index)=><div className="fs-3 sum bg-warning rounded"><p>{index+1}. Question: {questions[num].text}</p><p>The right answer was: {questions[num].rightAnswer}</p><p>Your answer was: {questionIndex[index]=='true'?'Right':'Wrong'}</p></div>)}</div>

     );
}
 
export default Summary;