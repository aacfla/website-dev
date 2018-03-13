document.forms["rides"].addEventListener("submit", function(event) {
	// Don't actually submit, since we're making AJAX request
	event.preventDefault();

	let fields = document.forms["rides"].elements;
        const url = "https://uh0b9pulpe.execute-api.us-west-1.amazonaws.com/prod/rides";
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = () => {
          let response = JSON.parse(xhr.responseText);
          console.log(response);
        }

        xhr.send(JSON.stringify({ name: fields["name"].value, email: fields["email"].value, requestType: "EDIT_RIDE_REQUEST" }));
})
