import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './../styles.css';


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const handleClickIndex = () => {
    navigate('/');
  };
  const handleClickSearch = () => {
    navigate('/searchReserva');
  };
  return (
    <div>
      <Navbar color="dark" dark expand="md" className='fixed-top'>
        <NavbarBrand href="/" className='mr-auto'>Portal Restaurante React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="itemNavigation" onClick={handleClickIndex}>Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="itemNavigation" href="/reservas">Reservas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="itemNavigation" onClick={handleClickSearch}>Gestionar Reservas</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
