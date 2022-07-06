import React from 'react'
import { Nav } from 'react-bootstrap'

import './NavbarLinks.css'


function NavbarLinks({ Icon, title }) {
    return (
        <div className='navbarlinks'>
            <Nav.Link href="#action1" className='navbarlinks-link' key={title}>
                {Icon && <Icon className='navbarlinks-link__svg' />}
                <p>{title}</p>
            </Nav.Link>
        </div>
    )
}

export default NavbarLinks