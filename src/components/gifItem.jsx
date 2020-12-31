/** @format */

import React from 'react';
import PropsTypes from 'prop-types';

function GifItem({ title, image }) {
	return (
		<div className='card animate__animated animate__fadeInDown'>
			<p>{title}</p>
			<img alt={title} src={image} />
		</div>
	);
}

GifItem.PropsTypes = {
	title: PropsTypes.string.isRequired,
	image: PropsTypes.string.isRequired,
};

export default GifItem;
