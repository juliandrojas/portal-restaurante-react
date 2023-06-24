import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className='mr-auto'>Portal Restaurante React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Sobre nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Nuestro menú</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Reservas</NavLink>
            </NavItem> 
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
