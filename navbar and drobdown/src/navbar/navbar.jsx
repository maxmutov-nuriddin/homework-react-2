import { useState } from "react";

import './navbar.css'

export const navbar = () => {
  const [navbar, setColor] = useState(false);




  const changeColor = () => {
    return setColor(!navbar)
  }

  return (
    <>
      <div className='nav'>
        <a>img</a>
        <nav className={` ${navbar ? '' : "navbar "} `}>
          <ul className={`list ${navbar ? 'navs' : ""} `}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </nav>
        <button onClick={changeColor} className='btn'>btn</button>
      </div>
    </>
  )
}

export default navbar;
