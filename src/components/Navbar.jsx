import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <header className='navbar'>
        <section>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle"> <img src="/img/person.jpg" alt="" /> <img src="/img/moreinfo.svg" alt="" /> </label>
                    <nav className="submenu">
                        <ul>
                            <li>
                                <Link to="">Store</Link>
                            </li>
                            <li>
                                <Link to="">Apettizers</Link>
                            </li>
                            <li>
                                <Link to="">Desserts</Link>
                            </li>
                            <li>
                                <Link to="">Coffee</Link>
                            </li>
                            <li>
                                <Link to="">Membership</Link>
                            </li>
                        </ul>

                    </nav>
        </section>

        <section>
            <h1>Candies Center</h1>
            <span>Alacant - Barcelona - Madrid</span>
        </section>

        <section>
            <span>2</span>
            <img src="/img/bagWhite.svg" alt="" />
        </section>

      </header>  
          </>
  )
}

export default Navbar