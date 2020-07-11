import React from 'react';

// Stylesheet
import './CustomButton.scss';

function CustomButton({ children }) {
	return (
		<div className="btn-container">
			<button type="submit">{children}</button>
		</div>
	);
}

export default CustomButton;
