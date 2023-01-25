import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">Product App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <UncontrolledDropdown style={{ paddingLeft: "35em", color: "black",textDecoration:"none",  }} nav inNavbar>
                  <DropdownToggle  nav caret>
                  Forms
                  </DropdownToggle>
                  <DropdownMenu>
                    
                    <DropdownItem>
                      <Link style={{textDecoration:"none"}} to="form2" href="/form2">Contact</Link>
                    </DropdownItem> 
                  </DropdownMenu>
                </UncontrolledDropdown>

              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:"black"}}>GitHub</NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}