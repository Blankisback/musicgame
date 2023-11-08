document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Fetch the entered username and password
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform authentication (add your own authentication logic)
        if (isValidUser(username, password)) {
            // Redirect to the main site (index.html) and apply the green flash animation
            document.body.classList.add("flash-green");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);
        } else {
            // Apply the red flash animation for incorrect credentials
            document.body.classList.add("flash-red");
            // Display an error message if credentials are invalid
            alert("Invalid username or password. Please try again.");
        }
    });

    function isValidUser(username, password) {
        // Replace this with your authentication logic
        const validUsers = [
            { username: "tom", password: "pass" },
            { username: "admin", password: "pass" },
            { username: "joe", password: "TOMTOMISEXY" },
            // Add more valid users as needed
        ];

        return validUsers.some(user => user.username === username && user.password === password);
    }
});
