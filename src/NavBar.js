import { NavLink} from "react-router-dom";

function NavBar()
{

    return(
        <div>
        <NavLink to = "/HikingForm">  HikingForm  </NavLink>
        <NavLink to = "/">  HOME  </NavLink>
      
        </div>
    )

}

export default NavBar