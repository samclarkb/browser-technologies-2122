var input = document.querySelectorAll('input')
var form = document.querySelector('form')

function empty() {
	form.addEventListener('submit', function (event) {
		input.forEach(function (input) {
			if (input.value.length == 0) {
				event.preventDefault()
				alert('Nog niet alle velden zijn ingevuld')
			}
		})
	})
}

empty()

// const forEachFallback = () => {
//     if (forEach){

//     }
// }
