/** @format */

import React from 'react';

import { shallow } from 'enzyme';
import GifExpertApp from './../gifExpertApp';

describe('Pruebas en mi componente <gifExpertApp/>', () => {
	const wrapper = shallow(<GifExpertApp />);

	test('debe de visualizarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe mostrat una lista de categorias ', () => {
		const categories = ['hunter x hunter', 'dragon ball'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});
