import { Link } from "react-router-dom";
const Win = () => {
    return (
        <div className="winBody bg-success"> 

            <h1 className="youWin">YOU</h1>

            <div className="d-flex">

                <h1 className="wonWin">Won</h1>
                <button className="btn buttonWin fw-bold"><Link className="text-decoration-none" to={"/summary"}>Summary</Link></button>
                
            </div>
        </div>
     );
}
 
export default Win;