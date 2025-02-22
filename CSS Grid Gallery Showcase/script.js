const thumbnailsContainer = document.getElementById("thumbnails");

const images = [
      "https://picsum.photos/600/300?1",
      "https://picsum.photos/600/300?2",
      "https://picsum.photos/600/300?3",
      "https://picsum.photos/600/300?4",
      "https://picsum.photos/600/300?5",
];

function updateMainImage(imageUrl) {
      featuredImage.src = imageUrl;
}

function createThumbnails() {
	images.forEach((imageUrl) => {
		const div = document.createElement("div");
		div.classList.add("item");

		const thumbnail = document.createElement("img");
		thumbnail.src = imageUrl;
		thumbnail.alt = "Thumbnail";

		thumbnail.addEventListener("click", () => {
			updateMainImage(imageUrl);
		});
		div.appendChild(thumbnail);
		thumbnailsContainer.appendChild(div);
	});
}
if (images.length > 0) {
	updateMainImage(images[0]);
}
createThumbnails();
console.log(thumbnailsContainer);