import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorites.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar dark border-bottom border-body" data-bs-theme="dark">
			<Link to="/">
				<span className="display-5 btn btn-outline-primary navbar-brand mb-0 h2 text-light">StarWars</span>
			</Link>
		<div className="dropdown m-3 btn btn-outline-primary">
				<div className="btn-group ">
					<button type="button" className="nav_button btn dropdown-toggle btn-lg text-light" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside" aria-expanded="false">
						Favorites...
					</button>
					<ul className="drop_favorites dropdown-menu dropdown-menu-start ">
						<Favorites />
					</ul>
				</div>
			</div>
		</nav>
	);
};
