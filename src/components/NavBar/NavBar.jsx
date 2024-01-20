import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
        <header>
          <nav className='nav-bar'>
            <div className='toggle'>
              <a className='a-nav' href="/"> Home</a>
              <a className='a-nav' href="/about"> About</a>
              <a className='a-nav' href="/disclaimer">Disclaimer</a>
              </div>
          </nav>
          </header>
    </>
  )
} 
    
export default NavBar