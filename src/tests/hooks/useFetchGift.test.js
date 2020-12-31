/** @format */

import { renderHook } from '@testing-library/react-hooks';
import useFetchGift from '../../hooks/useFetchGift';

describe('pruebas a mi customHook - useFetchGift', () => {
	test('debe retornar mi estado inicial', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGift('hunter x hunter')
		);
		const { data, loading } = result.current;

		await waitForNextUpdate();
		expect(data).toEqual([]);
		expect(loading).toBe(true);
		// const { data, loading } = useFetchGift('hunter x hunter');
	});

	test('debe retornar 10 imagenes en data y el loading en false', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGift('hunter x hunter')
		);
		await waitForNextUpdate();
		const { data, loading } = result.current;
		expect(data.length).toBe(12);
		expect(loading).toBe(false);
	});
});
