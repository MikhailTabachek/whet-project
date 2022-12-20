import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = ({ user, profile, handleLogout, handleClick }) => {
  return (
    <>

        <header>
          <nav className='nav-bar'>
            <img className='logo' src="https://i.imgur.com/IG3iy2t.png" alt="" />
            <div className="slogan">
              <h1>Pre Trade: </h1>
              <h4 className='nav-h4'>Tilt the odds in your favor the way pros do</h4>
            </div>
            {/* <ul> */}
              {/* <li className='nav-links'><Link to="/login">Log In</Link></li>
              <li className='nav-links'><Link to="/signup">Sign Up</Link></li> */}
            <div className='toggle'>
              <a className='a-about' href="/"> Home page</a>
              <a className='a-download' href="/download"> Historical Data</a>
              {/* <a className='stock-button' href="/Stock"> Open Stock</a> */}
            {/* </ul> */}
                <p className='light-p'> Light</p>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" unchecked />
                <label class="form-check-label" for="flexSwitchCheckChecked"> Pro</label>
            </div>
              </div>
          </nav>
          </header>
    </>
  )
} 
    
export default NavBar