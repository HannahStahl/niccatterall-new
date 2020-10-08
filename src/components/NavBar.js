import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" fixed="top" className={window.location.pathname.includes('blog/') ? ' white-background' : ''}>
    <Navbar.Toggle aria-controls="responsive-navbar-nav">
      <i className="fas fa-bars" />
    </Navbar.Toggle>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" activeKey={window.location.pathname}>
        {[
          { href: '/', label: 'HOME' },
          { href: '/about', label: 'ABOUT' },
          { href: '/blog', label: 'BLOG' },
          { href: '/programs', label: 'PROGRAMS' },
          { href: '/podcast', label: 'PODCAST' },
          { href: '/clients', label: 'CLIENTS' },
        ].map(({ href, label }) => (
          <Nav.Link key={label} href={href}>{label}</Nav.Link>
        ))}
      </Nav>
      <Nav className="ml-auto">
        {[
          { icon: 'instagram', href: 'https://www.instagram.com/cattogolf/' },
          { icon: 'twitter', href: 'https://twitter.com/bowdo83' },
          { icon: 'facebook', href: 'https://www.facebook.com/nic.catterall.9' },
          { icon: 'linkedin', href: 'https://www.linkedin.com/in/nic-catterall-08914235' },
        ].map(({ icon, href }) => (
          <Nav.Link key={icon} href={href} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${icon}`} />
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
