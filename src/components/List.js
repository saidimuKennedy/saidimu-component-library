import React from "react";
import "../styles/list.css";

const List = ({ items }) => {
	return (
		<ul className="list">
			{items.map((item, index) => (
				<li key={index} className="list-item">
					{item}
				</li>
			))}
		</ul>
	);
};

export default List;
