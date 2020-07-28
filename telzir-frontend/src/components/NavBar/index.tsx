import React, { useState } from 'react';
import { FaBars, FaPhone } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Nav } from './styles';

interface NavProps {
  open: boolean;
  background?: string;
}

const NavBar: React.FC<NavProps> = ({ open = false, background }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function handleToggleClick() {
    setMenuOpen(!menuOpen);
  }
  return (
    <Nav open={menuOpen} background={background}>
      <div className="brand-container">
        <a className="brand" href="/">
          <FaPhone />
          <h1> Telzir</h1>
        </a>
        <button
          type="button"
          id="navbar-toggle"
          onClick={() => handleToggleClick()}
        >
          <FaBars />
        </button>
      </div>
      <ul id="main-nav">
        <li>
          <Link
            activeClass="active"
            to="atelzir"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            A TELZIR
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="nossosplanos"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            NOSSOS PLANOS
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contato"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            CONTATO
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
