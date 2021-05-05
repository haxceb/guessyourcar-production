import React from 'react';
import './review.css';

const Review = (props) => {
	return (
		<div className="col-lg-3 col-md-3 col-sm-3 text-center ml-5 mr-5 mt-1 mb-5 pt-1">
			<div className="content text-center p-4">
				<p className=".lead">| |</p>
				<p>{props.text}</p>
				<span>
					<i>{props.name}</i>
				</span>
			</div>
		</div>
	);
};

export default Review;
