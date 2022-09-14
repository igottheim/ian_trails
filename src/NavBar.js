import { NavLink} from "react-router-dom";

function NavBar()
{

    return(
        <div className="navBarLink">
        <NavLink exact to = "/About" className='navBarLink'> About  </NavLink>
         <span></span>
        <NavLink to = "/HikingForm" className='navBarLink'>  HikingForm  </NavLink>
        <span></span>
        <NavLink to = "/HikingPage" className='navBarLink'>  HikingPage  </NavLink>
        <span></span>
        
       
       
       
      
        </div>
    )

}

export default NavBar