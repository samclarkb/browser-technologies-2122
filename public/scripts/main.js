const input = document.querySelectorAll('input')
const form = document.querySelector('form')

const empty = () => {
	input.forEach(input => {
		if (input.value.length == 0) {
			form.addEventListener('submit', () => {
				alert('Je hebt nog niet alles ingevuld')
			})
		}
	})
}

// const forEachFallback = () => {
//     if (forEach){

//     }
// }

empty()
