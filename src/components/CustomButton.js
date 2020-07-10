import React from 'react';
import './CustomButton.css';

function CustomButton({ children }) {
	return (
		<div className="btn-container">
			<button type="submit">{children}</button>
		</div>
	);
}

export default CustomButton;
