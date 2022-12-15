const NavButtons = props => {
    const {id,questionIndex}=props;
    return ( 
       (id)==questionIndex.length?<div className="bg-warning text-center nav fw-bold" id={id}>{id+1}</div>:<div className="bg-dark text-center nav" id={id}>{id+1}</div> 
     );
}
 
export default NavButtons;