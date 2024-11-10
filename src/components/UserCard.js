import React from "react";
import "../styles/card.css";
const UserCard = ({ user: { firstName, lastName, image } }) => {
	return (
		<div className="card">
			<h2 className="card-title">
				{firstName}
				{lastName}
			</h2>
			<div className="card-body">
				<img src={image} alt={firstName} />
			</div>
		</div>
	);
};

export default UserCard;
