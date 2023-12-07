const renderRandomGif = async () => {
	// TODO: Make a fetch request to the Giphy API to get a random GIF

	const response = await fetch(
		"https://api.giphy.com/v1/gifs/random?api_key=N9f2YkGKMgl5BhWrHnJeJZvKhvtvy91m&tag=&rating=g"
	);

	const { data } = await response.json();

	// TODO: Update the 'src' variable below to be a URL to a GIF from the Giphy API
	const src = data.images["fixed_width"].url;

	// Update the existing <img> tag with the new src
	const imgEl = document.querySelector("#random-gif");
	imgEl.setAttribute("src", src);
};

// Display a random GIF when the page loads
renderRandomGif();

// Display a random GIF when the button is clicked
const btn = document.querySelector("#fetch-random-gif-btn");
btn.addEventListener("click", renderRandomGif);
