import React from "react";
import "../styles/header.css";

const Header = ({ title, subtitle }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			{subtitle && <h2>{subtitle}</h2>}
		</header>
	);
};

export default Header;
