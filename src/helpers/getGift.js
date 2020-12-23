/** @format */

export const getGift = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=12&api_key=OGQ06BtQ53R6QGAxD15WKM9ognm9izX2`;
	const resp = await fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});
	const { data } = await resp.json();

	const gift = data.map((img) => {
		return {
			id: img.id,
			image: img.images?.downsized_medium.url,
			title: img.title,
		};
	});

	return gift;
};
