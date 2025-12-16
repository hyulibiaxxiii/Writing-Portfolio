// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
toggle.onclick = function () {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Password Gate for Secret Page
function passwordGate() {
    const pass = prompt("Enter password:");
    if (pass === "hyulibiaxxiii<3") {
        window.location.href = "secret.html";
    } else {
        alert("Incorrect password. Try again!");
    }
}

// Modal
function openModal(title, text) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;
    document.getElementById("modal").style.display = "block";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal on background click
window.onclick = function(e){
    if (e.target == document.getElementById("modal")) {
        closeModal();
    }
}
