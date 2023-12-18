function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        email: email,
        password: password
    };
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            window.location.href = "./home.html";
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        alert("Invalid Credentials!!")
        console.error('Error:', error);
    });
}