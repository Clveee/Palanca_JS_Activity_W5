const form = document.getElementById("passwordForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword === confirmPassword) {
        message.textContent = "Password changed successfully!";
        message.className = "success";
    } else {
        message.textContent = "Passwords do not match. Please try again.";
        message.className = "error";
    }
});
