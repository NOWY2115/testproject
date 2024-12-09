window.onscroll = () => {
	changeMenu()
}




let changeMenu = () => {
	let menu = document.querySelector(".menu-container")
	let detectSticky = menu.offsetTop
	if (window.scrollY > detectSticky)
		menu.classList.add("sticky-menu")
	else menu.classList.remove("sticky-menu")
}
