var input = document.querySelectorAll('input')
var form = document.querySelector('form')

function empty() {
	form.addEventListener('submit', function (event) {
		for (var i = 0; i < input.length; i++) {
			if (input[0].value.length == 0) {
				event.preventDefault()
				alert('Nog niet alle velden zijn ingevuld')
			}
		}
	})
}

empty()

// const forEachFallback = () => {
//     if (forEach){

//     }
// }
