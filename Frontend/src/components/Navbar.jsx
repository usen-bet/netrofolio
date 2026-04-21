import "./Navbar/Navbar.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Topvert } from "./Animation/Topvert"
import Logo from "../assets/Desktop/LOGOHEAD.png"
import{ RevealRed } from "../components/Animation/RevealRed"
import { HashLink } from "react-router-hash-link"

function Navbar() {
  const [unclick, setUnclick] = useState(true)
  const toggle = () => {
    console.log("trap")
    setUnclick(!unclick)
  }
  return (
    <div className='bar'>
     <div className='logo'>
       <img src={Logo} />  
    </div> 
    <div onClick={toggle} className={unclick ? 'hamburger' : 'active'}>
       <div className={unclick ? 'hamburger-line ham-top' : "one hamburger-line"}></div>
       <div className={unclick ? 'hamburger-line ham-mid' : "two hamburger-line"}></div>
       <div className={unclick ? 'hamburger-line ham-bottom' : "three hamburger-line"}></div>
    </div>
     <span className="navigation">
      <Link to="/"><p className='link'><Topvert>Home</Topvert></p></Link>
      <Link to="/Qual"><p className='link'><Topvert>About</Topvert></p></Link>
      <Link to="/Services"><p className='link'><Topvert>Services</Topvert></p></Link>
      <Link to="/Contact"><p className='link'><Topvert>Netropedia</Topvert></p></Link>
      </span>
    <div className='navigation'>
      <div className="c-link"><a className='ink' href="https://linktr.ee/netrovert"><Topvert>Work with me</Topvert></a></div>
    </div>  
    {
      unclick ? (null) : (
        <div className="links-bg">
       <div className="linkers"> 
       <ul className="Link-list">
        <li>
        <RevealRed>
          <Link to="/" className="link" onClick={toggle}> 
          Home
         </Link>
         </RevealRed>
        </li>
        <li>
          <HashLink to="/#about" className="link" onClick={toggle}>
          <RevealRed>About</RevealRed>
          </HashLink>
        </li>
        <li>
        <RevealRed>
        <HashLink to="/#service" className="link" onClick={toggle}>
          Services
        </HashLink>
        </RevealRed>
        </li>
        <li>
        <RevealRed>
        <HashLink to="/#contact" className="link" onClick={toggle}>    
          Contact Me
        </HashLink>
        </RevealRed>
        </li>
        <li>
        <RevealRed>
        <a href="https://linktr.ee/netrovert" className="link" onClick={toggle}>    
          Linktree
        </a>
        </RevealRed>
        </li>
       </ul>
       </div>
      </div>
      )
    }
    </div>
  )
}

export default Navbar