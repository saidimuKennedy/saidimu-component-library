import React from "react";
import "../styles/input.css";

const Input = ({ type = "text", placeholder, onChange }) => {
	return (
		<input
			className="input"
			type={type}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};

export default Input;
