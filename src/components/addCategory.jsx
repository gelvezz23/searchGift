/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ setcategories, categories }) {
	const [inputValue, setinputValue] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length > 2) {
			setcategories([inputValue, ...categories]);
			setinputValue('');
		}
	};

	const handleValue = (event) => {
		setinputValue(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Escribe algo ...'
				value={inputValue}
				onChange={handleValue}
			/>
			<button type='submit'> Agregar nuevo</button>
		</form>
	);
}

AddCategory.propTypes = {
	setcategories: PropTypes.func.isRequired,
};

export default AddCategory;
