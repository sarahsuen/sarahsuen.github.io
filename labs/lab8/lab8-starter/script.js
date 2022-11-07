function toggleTheme() {
    let body = document.querySelector("body")
    body.classList.toggle("dark-mode");
}

let button = document.getElementById("toggleButton")
button.onclick = toggleTheme;