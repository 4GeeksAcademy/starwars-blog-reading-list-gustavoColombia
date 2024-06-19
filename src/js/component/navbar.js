import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar dark border-bottom border-body" data-bs-theme="dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/add">
					<button className="btn btn-danger">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
