/// --- FOOTER.jsx --- ///

import React from "react";
import "./Footer.scss";
import GitHubLogo from "../../assets/icons/GitHub-Mark-Light-32px.png";

const Footer = () => {
	return (
		<footer className="footer">
			<p className="footer__copy">A project by Elke Dick 2022 </p>

			<ul className="footer__list">
				<li className="footer__list-item">
					<a
						href="https://github.com/elke-codes/on-the-road"
						target="_blank"
						title="Check this and other projects out on GitHub"
						className="footer__link">
						<img src={GitHubLogo} alt="GitHub Logo" />
					</a>
				</li>
				<li className="footer__list-item">
					<a
						href="mailto:elke.codes@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						title="Get in touch!"
						className="footer__link-email">
						📨
					</a>
				</li>
			</ul>
			{/* <p className="footer__copy--bstn">With Thanks to Brainstation </p> */}
		</footer>
	);
};

export default Footer;
