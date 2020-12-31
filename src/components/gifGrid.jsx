/** @format */

import React from 'react';
import GifItem from './gifItem';
import PropTypes from 'prop-types';

import useFetchGift from '../hooks/useFetchGift';
function GifGrid({ category }) {
	const { data, loading } = useFetchGift(category);

	return (
		<>
			<h3 className='animate__animated animate__fadeInDown'>{category}</h3>

			{loading && <p>Loading ...</p>}

			<div className='card-grid animate__animated animate__fadeInDown'>
				{data.map((img) => {
					return <GifItem key={img.id} {...img} />;
				})}
			</div>
		</>
	);
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;
