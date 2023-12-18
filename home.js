function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

function submitData() {
    const input1Value = document.getElementById("input1").value;
    setCookie("data", input1Value);
}

function searchData() {
    const input2Value = document.getElementById("input2").value;
    const storedData = getCookie("data");

    if (storedData && storedData.includes(input2Value)) {
        document.getElementById("searchedResult").value = input2Value;
    } else {
        document.getElementById("searchedResult").value = "No matching data found.";
    }
}


function clearCookie() {
    document.cookie = "data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function logout() {
    window.location.href = "index.html";
}