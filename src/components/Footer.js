import React from "react";
import "../styles/footer.css";

const Footer = ({ text }) => {
	return (
		<footer className="footer">
			<p>{text}</p>
		</footer>
	);
};

export default Footer;
