/** @format */

import React from 'react';

function GifItem({ id, title, image }) {
	console.log({ id, title, image });
	return (
		<div className='card animate__animated animate__fadeInDown'>
			<h5>{title}</h5>
			<img alt={title} src={image} />
		</div>
	);
}

export default GifItem;
