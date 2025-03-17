function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error");

    // Reset pesan error
    errorMsg.textContent = "";

    fetch("https://script.google.com/macros/s/AKfycbxxxxx/exec", { // Ganti dengan URL API Anda
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Simpan data user ke localStorage
            localStorage.setItem("user", JSON.stringify(data));
            
            // Arahkan ke halaman main.html
            window.location.href = "main.html";
        } else {
            errorMsg.textContent = "Login gagal: " + data.error;
        }
    })
    .catch(error => {
        errorMsg.textContent = "Terjadi kesalahan, coba lagi.";
    });
}
