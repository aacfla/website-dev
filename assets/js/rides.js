document.forms["rides"].addEventListener("submit", function(event) {
	// Don't actually submit, since we're making AJAX request
	event.preventDefault();

	let fields = document.forms["rides"].elements;
	console.log(fields["email"].value);
	console.log(fields["year"].value);
	// XMLHttpRequest, etc
})
