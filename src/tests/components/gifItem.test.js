/** @format */
import React from 'react';
import { shallow } from 'enzyme';
import GifItem from '../../components/gifItem';

describe('Pruebas de el componente <gifItem/>', () => {
	const title = 'un titulo';
	const image = 'https://localhost/algo.jpg';
	const wrapper = shallow(<GifItem title={title} image={image} />);

	test('Debe de mostrar el componente correctamente enviando le props', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar el componente correctamente', () => {
		const wrapperDos = shallow(<GifItem />);
		expect(wrapperDos).toMatchSnapshot();
	});

	test('El componente debe tener un titulo', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('Debe tener una imagen como la que recibe en los props', () => {
		const img = wrapper.find('img');
		expect(img.prop('src')).toBe(image);
		expect(img.prop('alt')).toBe(title);
		// console.log(img.html());
		// forma 1
		// console.log(img.props().src);
		// forma 2
		// console.log(img.prop('src'));
	});

	test('Debe tener una class animate__fadeInDown', () => {
		const div = wrapper.find('div');
		const className = div.prop('className');
		expect(className.includes('animate__fadeInDown')).toBe(true);
	});
});
