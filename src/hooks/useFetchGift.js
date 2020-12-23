/** @format */

import { useEffect, useState } from 'react';
import { getGift } from './../helpers/getGift';

export const useFetchGift = (category) => {
	const [state, setstate] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGift(category).then((imags) =>
			setstate({
				data: imags,
				loading: false,
			})
		);
	}, [category]);
	return state;
};

export default useFetchGift;
