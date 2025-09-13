document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formPendaftaran");
    const alertSuccess = document.getElementById("alertSuccess");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // cegah reload halaman

        // tampilkan pesan sukses
        alertSuccess.style.display = "block";

        // reset form
        form.reset();

        // sembunyikan pesan setelah 3 detik
        setTimeout(() => {
            alertSuccess.style.display = "none";
        }, 3000);
    });
});