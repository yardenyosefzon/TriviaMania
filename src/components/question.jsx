const Qustion = props => {
    const {questions,questionNum}=props;
    
    return ( 
        <h1>{questions[questionNum].text}</h1>
     );
}
 
export default Qustion;