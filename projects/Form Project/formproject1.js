document.getElementById("myForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('firstNameInput').value;
    const email = document.getElementById('emailInput').value;
    const birthdate = document.getElementById('dateInput').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const agree = document.querySelector('input[name="agree"]').checked;
    const state = document.getElementById('state').value;
    const comment = document.getElementById('comment').value;

    if (!fullname || !email || !password) {
        alert("Name, Email, and Password are required.");
        return;
    }

    if (isNaN(age) || age < 18) {
        alert("You need to be 18 or older.");
        return;
    }

    if (!agree) {
        alert("You must agree to the terms.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        birthdate: birthdate,
        age: age,
        password: password,
        gender: gender,
        agree: agree,
        state: state,
        comment: comment
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            alert("Form submitted successfully!");
            console.log(response);

            document.getElementById('myForm').reset();
            document.getElementById('responseMessage').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send();
});