document.getElementById("MyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let email = document.getElementById("email");
    let password = document.getElementById("password") = document.getElementById("confirm");
    let successMsg = document.getElementById("success");

    let valid = true;


    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    successMsg.textContent = "";

    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required";
        valid = false;
    }
    if (number.value.trim() === "") {
        number.nextElementSibling.textContent = "Number is required";
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        email.nextElementSibling.textContent = "Email is required";
        valid = false;
    } else if (!email.value.match(emailPattern)) {
        email.nextElementSibling.textContent = "Invalid email format";
        valid = false;
    }

    if (password.value.trim() === "") {
        password.nextElementSibling.textContent = "Password is required";
        valid = false;
    }

    if (confirm.value.trim() === "") {
        confirm.nextElementSibling.textContent = "Confirm Password";
        valid = false;
    } else if (password.value !== confirm.value) {
        confirm.nextElementSibling.textContent = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        successMsg.textContent = "Form submitted successfully!";
    }
});
