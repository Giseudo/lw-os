/*let characters = [
	'A', 'B', 'C', 'D', 'E', 'F', 'J', 'K', 'M', 'N', 'O', 'P', 'Q',
	'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '$', '@', '%', '?',
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]*/

let characters = [
	0, 1
]

let shuffle = function(array) {
	return array[Math.floor(Math.random() * array.length)] 
}

let replace = function(string, index, replace) {
	return string.substr(0, index) + replace + string.substr(index + 1)
}

export default {
	bind: function (el, binding, vnode) {
		let text = el.innerHTML.trim(),
			length = text.length,
			speed = binding.value || 60

		// Randomize all the characters
		for (let index in text) {
			let letter = text[index]

			el.innerHTML = replace(el.innerHTML, index, shuffle(characters))
		}

		// Wait for the delay
		let loop = function(index) {
			let letter = text[index]

			setTimeout(() => {
				// Randomize characters
				for (let k = index; k < text.length; k++) {
					el.innerHTML = replace(el.innerHTML, k, shuffle(characters))
				}

				// Reveal letter
				el.innerHTML = replace(el.innerHTML, index, letter)

				// Iterate again until the end of string
				if (index != text.length - 1)
					loop(index + 1)
			}, speed)
		}

		loop(0)
	},

	unbind: function (el, binding, vnode) {
		//
	}
}
