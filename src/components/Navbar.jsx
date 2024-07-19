import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faInfoCircle,
	faEnvelope,
	faPieChart,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import da_logo from "../assets/DA_Logo.png";
import bp_logo from "../assets/Bagong Pilipinas Logo.png";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const isActive = (path) => {
		return location.pathname === path ? "active" : "";
	};

	return (
		<nav className="navbar">
			<div className="navbar-logos">
				<img src={da_logo} alt="D.A. Logo" className="navbar-logo da-logo" />
				<img
					src={bp_logo}
					alt="Bagong Pilipinas Logo"
					className="navbar-logo bp-logo"
				/>
			</div>
			<div className="navbar-title"></div>
			<div className="hamburger" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
				<Link to="/" className={`nav-link ${isActive("/")}`}>
					<FontAwesomeIcon icon={faHome} className="nav-icon" />
					Home
				</Link>
				<Link
					to="/dadospowerbiportal"
					className={`nav-link ${isActive("/dadospowerbiportal")}`}
				>
					<FontAwesomeIcon icon={faPieChart} className="nav-icon" />
					Analytics
				</Link>
				<Link to="/about" className={`nav-link ${isActive("/about")}`}>
					<FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
					About
				</Link>
				<Link to="/contact" className={`nav-link ${isActive("/contactus")}`}>
					<FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
					Contact Us
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;