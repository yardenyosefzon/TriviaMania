import { Link } from "react-router-dom";
const Lose = () => {
    return (
        <div className="loseBody bg-danger"> 

            <h1 className="youLose">YOU</h1>

            <div className="d-flex">

                <h1 className="lostLose">LOST</h1>
                <button className="btn buttonLost fw-bold"><Link className="text-decoration-none" to={"/summary"}>Summary</Link></button>
                
            </div>
        </div>
     );
}
 
export default Lose;