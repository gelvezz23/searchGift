/** @format */

import React from 'react';
import GifItem from './gifItem';

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

export default GifGrid;
