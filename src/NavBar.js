import { NavLink} from "react-router-dom";

function NavBar()
{

    return(
        <div>
        <NavLink exact to = "/" className='navBarLink'>  HOME  </NavLink>
        <span></span>
        <NavLink to = "/HikingForm" className='navBarLink'>  HikingForm  </NavLink>
        <span></span>
        <NavLink to = "/HikingPage" className='navBarLink'>  HikingPage  </NavLink>
       
       
      
        </div>
    )

}

export default NavBar