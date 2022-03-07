import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    const active = (navData) => navData.isActive ? ' active-link' : '';

  return (
    <header className="bg-red-600">
        <div className="flex justify-between mx-auto container">
            <h1 className="inline-flex items-center ml-20 py-4 px-3 cursive text-red-100 hover-nav-name text-4xl font-bold tracking-widest">
            <Link to='/' >Bodiseowei Tonweriyai</Link>
            </h1>
            <div>
                <nav className="inline-flex items-center py-3 px-3 my-5">
                    <NavLink className={(navData) => navData.isActive ? 'mr-6 rounded text-red-200 active-link' : 'mr-6 rounded text-red-200 hover-nav'} to='/projects'>Projects</NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'mr-6 rounded text-red-200 active-link' : 'mr-6 rounded text-red-200 hover-nav'} to='about' >About</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default NavBar