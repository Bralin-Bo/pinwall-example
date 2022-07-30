"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
	}


	function formAddError(input) {
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.classList.remove('_error');
	}



	function emailTest(email) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
	}

	// BurgerButton\
	function changeBurgerbox(x) {
		nav.classList.toggle("active")
		burgerbox.classList.toggle("change");
	}
	const burgerbox = document.querySelector(".menu__burgerbox")
	const nav = document.querySelector(".menu__nav")
	burgerbox.addEventListener("click", changeBurgerbox)

});