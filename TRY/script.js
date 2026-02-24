document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("trainingForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const level = document.getElementById("level").value;
            const goals = document.getElementById("goals").value.trim();

            if (name === "" || email === "" || level === "" || goals === "") {
                alert("Please complete all fields.");
                return;
            }

            // Simulated AJAX request
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    level: level,
                    goals: goals
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("confirmation").innerText =
                    "Thank you, " + name + "! Your registration has been received.";

                form.reset();
                form.style.display = "none";
            })
            .catch(error => {
                alert("There was an error submitting the form.");
            });
        });
    }

});