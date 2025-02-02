window.onscroll = () => {
	changeMenu()
}

let checkLength = (element, index) => {
	if (element.value != '' && !labels[index].classList.contains('not-empty')) {
		labels[index].classList.add('not-empty')
	}

	if (element.value == '')
		labels[index].classList.remove('not-empty');
}

let changeMenu = () => {
	let menu = document.querySelector(".menu-container")
	let detectSticky = menu.offsetTop
	if (window.scrollY > detectSticky)
		menu.classList.add("sticky-menu")
	else menu.classList.remove("sticky-menu")
}

let inputs = document.querySelectorAll('.contact-form input[type="text"], .contact-form input[type="email"]')
let textareas = document.querySelectorAll('.contact-form textarea')
let fields = [];
for (let i = 0; i < inputs.length; i++) {
	fields.push(inputs[i])
}
for (let i = 0; i < textareas.length; i++) {
	fields.push(textareas[i])
}
let labels = document.querySelectorAll('.contact-form .input-label')

for (let i = 0; i < fields.length; i++) {
	fields[i].addEventListener('input', () => {
		checkLength(fields[i], i)
	})
}
