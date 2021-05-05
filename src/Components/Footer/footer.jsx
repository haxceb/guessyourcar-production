import React from 'react';

function Footer(props) {
	return (
		<div className="child">
			<p className="heading">{props.heading}</p>
			{props.text}
		</div>
	);
}

export default Footer;
