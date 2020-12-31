/** @format */

import { getGift } from './../../helpers/getGift';

describe('Pruebas en  helpers - getGift', () => {
	test('Debe tener 10 elementos', async () => {
		const gift = await getGift('hunter x hunter');
		expect(gift.length).toBe(12);
	});

	test('Cuando no envio una categoria', async () => {
		const gift = await getGift('');
		expect(gift.length).toBe(0);
	});
});
