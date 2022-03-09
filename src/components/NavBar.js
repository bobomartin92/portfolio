import { Link, NavLink } from "react-router-dom"
import { FaHome, FaUser, FaFolder } from 'react-icons/fa'
import { IconContext } from "react-icons";

const NavBar = () => {

    const active = (navData) => navData.isActive ? ' active-link' : '';

  return (
    <header >
        <div className="bg-red-600 hidden lg:block">
            <div className="flex justify-between mx-auto container">
                <h1 className="inline-flex items-center ml-20 py-4 px-3 cursive text-red-100 hover-nav-name text-4xl font-bold tracking-widest">
                <Link to='/' >Bodiseowei Tonweriyai</Link>
                </h1>
                <div>
                    <nav className="inline-flex items-center py-3 px-3 my-5">
                        <NavLink className={(navData) => navData.isActive ? 'mr-6 rounded text-red-200 active-link' : 'mr-6 rounded text-red-200 hover-nav'} to='/projects'>Projects</NavLink>
                        <NavLink className={(navData) => navData.isActive ? 'mr-6 rounded text-red-200 active-link' : 'mr-6 rounded text-red-200 hover-nav'} to='/about' >About</NavLink>
                    </nav>
                </div>
            </div>
        </div>
        <div className="block lg:hidden">
            <div className="mobile-nav">
                <div className="links">
                    <nav className="flex justify-evenly">
                        <IconContext.Provider value={{className: 'mobile-nav-link'}} >
                            <Link to='/'><FaHome /></Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'mobile-nav-link'}} >
                            <Link to='/projects'><FaFolder /></Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'mobile-nav-link'}} >
                            <Link to='/about'><FaUser /></Link>
                        </IconContext.Provider>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar