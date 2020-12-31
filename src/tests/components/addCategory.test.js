/** @format */
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/addCategory';

describe('Pruebas en  <addCategory/>', () => {
	//const setCategory = () => {};
	const setCategory = jest.fn(); // otra forma de declarar una funcion con jest
	const categories = [];
	let wrapper = shallow(
		<AddCategory setcategories={setCategory} categories={categories} />
	);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(
			<AddCategory setcategories={setCategory} categories={categories} />
		);
	});

	test('Debe de mostrar se correctamente', async () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de cambiar la caja de texto', () => {
		const input = wrapper.find('input');

		const value = 'Hola mundo';
		input.simulate('change', { target: { value } });
		const parrafo = wrapper.find('p');
		expect(parrafo.text().trim()).toBe(value);
	});

	test('No debe de postear la informacion con submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategory).not.toHaveBeenCalled();
	});

	test('Debe llamar el setCategories y limpiar la caja de texto', () => {
		const input = wrapper.find('input');
		const value = 'Hola mundo';
		const parrafo = wrapper.find('p');
		// simular el onChange de mi input
		input.simulate('change', { target: { value } });
		// simular el submit de mi formulario
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		//Preugntar si el setCateogies se llamo
		expect(setCategory).toHaveBeenCalled();
		//Preguntar si setcategory se ejecuro una sola vez
		expect(setCategory).toHaveBeenCalledTimes(1);
		//Preugntar si setcateogory es llamado con una funcion
		expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
		// preguntar si el value esta vacio
		expect(input.prop('value')).toBe('');
	});
});
