import React from 'react';
import {Navbar, Nav, NavItem, NavLink} from "reactstrap";
import {useLocation} from "react-router-dom";

const Header = () => {
  const location = useLocation()

  const items = [
    {
      title: 'List',
      path: '/'
    },
    {
      title: 'Favorites',
      path: '/favorites'
    }
  ]

  return (
    <Navbar className='container sticky-top bg-white'>
      <Nav className="me-auto">
        {items.map((item, idx) => (
          <NavItem key={idx}>
            <NavLink className={location.pathname === item.path ? 'text-dark fw-semibold' : 'text-secondary'}
                     href={item.path}>{item.title}</NavLink>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
}

export default Header;