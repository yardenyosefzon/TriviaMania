import { Link } from 'react-router-dom';
const Answer = props => {
    const {answer,submitAnswer,lives,questionNum,questionIndex}=props
    return ( 
        answer.map(answer=>answer.id==questionNum?(questionIndex.length==19?<div className="col-6 fw-bold"><button className="btn btn-warning btn-lg"><Link className="text-decoration-none text-nowrap link fw-bold" onClick={()=>submitAnswer('true')} to={"/win"}>{answer.rightAnswer}</Link></button></div>:<div className="col-6"><button className="btn btn-warning btn-lg fw-bold" onClick={()=>submitAnswer('true')} disabled=''>{answer.rightAnswer}</button></div>):(lives.length==1?<div className="col-6"><button className="btn btn-warning btn-lg" ><Link className="text-decoration-none text-nowrap link fw-bold" onClick={()=>submitAnswer('fasle')} to={"/lose"}>{answer.rightAnswer}</Link></button></div>:<div className="col-6"><button className="btn btn-warning btn-lg fw-bold" onClick={()=>submitAnswer('fasle')}>{answer.rightAnswer}</button></div>))
     );
}
 
export default Answer;