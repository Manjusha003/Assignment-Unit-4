document.querySelector("form").addEventListener("submit", signUpFun);

        var usersData;
        if (localStorage.getItem("UsersData") === null) {
            usersData = [];
        } else {
            usersData = JSON.parse(localStorage.getItem("UsersData"));
        }
        function signUpFun() {
            event.preventDefault();
            var userObj = {
                userName: document.querySelector("#name").value,
                mobile: document.querySelector("#mobile").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#pass").value,
            };
            usersData.push(userObj);
            localStorage.setItem("UsersData", JSON.stringify(usersData));
            alert("Sign up Sucessfully!!");
            window.location.href="../Movie_App I/login.html"
        }