import React from 'react';

const Button = ({ children, onClick }) => {
	return (
		<button type="button" className="btn btn-outline-secondary btn-sm action-btn" onClick={onClick}>
			<span>{children}</span>
		</button>
	);
};

export default Button;
