import React from 'react';
import PropTypes from 'prop-types';
import { MdMic, MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './App.css';

const Navbar = (props) => {
  const { Title } = props;

  return (
    <div
      className="d-flex justify-content-between align-items-center navbar"
      data-testid="navbarTest"
    >
      <NavLink to="/" exact style={{ textDecoration: 'none' }}>
        <h1>{Title}</h1>
      </NavLink>
      <div className="fs-4">
        <MdMic className="me-3" />
        <MdSettings />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  Title: PropTypes.string.isRequired,
};
export default Navbar;
