/** @format */

import React, { useState } from 'react';
import AddCategory from './components/addCategory';
import GifGrid from './components/gifGrid';
function GifExpertApp() {
	// const categories = ['one punch', 'samurai x', 'dragon ball z'];
	const [categories, setcategories] = useState(['one punch']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory categories={categories} setcategories={setcategories} />
			<hr />

			{categories.map((category, index) => {
				return <GifGrid key={index} category={category} />;
			})}
		</>
	);
}

export default GifExpertApp;
