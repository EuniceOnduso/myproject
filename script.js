const name = document.getElementsById('name')
const reg.no = document.getElementsById('reg.no')
const phone.no = document.getElementsById('phone.no')
const description = document.getElementsById('description')
const form = document.getElementsById('form')
const error = document.getElementsById('error')

form.addEventListener('submit'), (e) => {
	let messages = []
	if (name.value === '' || name.value == null) {
		messages.push('Name is required')
	}
	if (reg.no.value === '' || reg.no.value == null) {
		messages.push('reg.no is required')
	}
	if (phone.no.value === '' || phone.no.value == null) {
		messages.push('phone.no is required')
	}
	if (description.value === '' || description.vale == null) {
		messages.push('description is required')
	}


}