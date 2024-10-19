window.onscroll = () => {
	changeMenu()
}

let menu = document.querySelector(".menu-container")
let detectSticky = menu.offsetTop

let changeMenu = () => {
	if(window.pageYOffset > detectSticky) 
		menu.classList.add("sticky-menu")
	else menu.classList.remove("sticky-menu")
}
