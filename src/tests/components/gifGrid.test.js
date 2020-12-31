/** @format */

import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import useFetchGift from '../../hooks/useFetchGift';
import GifGrid from './../../components/gifGrid';

// simular una llamada a un archivo
jest.mock('../../hooks/useFetchGift');

describe('Pruebas en componente <gifGrid/>', () => {
	const category = 'hunter x hunter';
	let wrapper;

	test('El componente de visualiza correctamente', () => {
		useFetchGift.mockReturnValue({
			data: [],
			loading: true,
		});
		wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar items cuando se le cargan imagenes con el customHook', () => {
		const gifs = [
			{
				id: 'ABC',
				image: 'https://localhost/algo.jpg',
				title: 'algo que no se',
			},
		];
		useFetchGift.mockReturnValue({
			data: gifs,
			loading: false,
		});
		wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		// cuantos componentes de imagenes hay renderizandoce
		expect(wrapper.find('GifItem').length).toBe(gifs.length);
	});
});
