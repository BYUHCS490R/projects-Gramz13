document.getElementById("myForm").addEventListener('submit',function(event) {
    event.preventDefault();
    //alert("Form Submitted");

    const fullname = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const message = document.getElementById('message').value;

    if (!fullname || !email || !message) {
        alert("You need to fill out all fields");
        return;
    }
    if (isNaN(age) || age < 18) {
        alert("You need to be 18 or older.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        age: age,
        message: message
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);
    // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // not needed for GET
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form Submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('myForm').reset();
            document.getElementById('responseMessage').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send();
});