
toggleMenu();
imageSize();

function imageSize() {
	const mainImg = document.querySelector(".main-content img")

	document.addEventListener("DOMContentLoaded", () => {
		
		if (visualViewport.width > 799) {
			mainImg.src = "./assets/images/image-web-3-desktop.jpg"
		} else {
			mainImg.src = "./assets/images/image-web-3-mobile.jpg"
		}
	})

	visualViewport.addEventListener("resize", () => {
		
		if (visualViewport.width > 799) {
			mainImg.src = "./assets/images/image-web-3-desktop.jpg"
		} else {
			mainImg.src = "./assets/images/image-web-3-mobile.jpg"
		}
	})
}

function toggleMenu() {
	const hamburgerOpen = document.querySelector(".hamburger-open");
	const hamburgerClose = document.querySelector(".hamburger-close");

	hamburgerOpen.addEventListener("click", () => {
		const menuDiv = document.querySelector(".background-wrapper");
		document.body.classList.toggle("no-scroll");

		menuDiv.style.display = "flex";
	})

	hamburgerClose.addEventListener("click", () => {
		const menuDiv = document.querySelector(".background-wrapper");
		document.body.classList.toggle("no-scroll");
		
		menuDiv.style.display = "none";
	})
}