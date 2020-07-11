import React from 'react';
import image from '../../assets/Scarecrow.png';
import CustomButton from '../CustomButton/CustomButton';

// Style Sheets
import './ErrorPage.scss';

function ErrorPage() {
	return (
		<div className="u-container">
			<nav className="navbar">
				<p className="upper-tag">404 Not Found</p>
			</nav>

			<header className="header">
				<div className="header__images">
					<img src={image} alt="Scrawcrow" />
				</div>
				<div className="header__content">
					<h1 className="main-heading">I have bad news for you</h1>
					<p className="tagline">
						The page you are looking for might be removed or is temporarily
						unavailable
					</p>
					<CustomButton>Back to Homepage</CustomButton>
				</div>
			</header>

			<footer className="footer">
				<a
					href="https://github.com/abhu-A-J/Dev-Challenges/tree/master/404NotFound"
					target="_blank"
					rel="noreferrer"
				>
					Abhushan@DevChallenges.io
				</a>
			</footer>
		</div>
	);
}

export default ErrorPage;
