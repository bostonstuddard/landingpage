const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const menuBackdrop = document.getElementById("menuBackdrop");

function setMenu(open) {
	sideMenu.classList.toggle("open", open);
	menuBackdrop.classList.toggle("open", open);
	menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => {
	setMenu(!sideMenu.classList.contains("open"));
});

menuBackdrop.addEventListener("click", () => {
	setMenu(false);
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		setMenu(false);
	}
});
