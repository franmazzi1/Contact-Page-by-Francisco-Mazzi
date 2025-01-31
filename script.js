document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        
        const inputs = form.querySelectorAll("input, select, textarea");

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid #FFFFFF"; 
            }
        });

        
        const emailInput = form.querySelector("input[type='email']");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            emailInput.style.border = "2px solid red";
        } else {
            emailInput.style.border = "2px solid #FFFFFF";
        }

        if (isValid) {
            alert("✅ Formulario enviado correctamente");
            form.reset();
        } else {
            alert("❌ Por favor, completa todos los campos correctamente.");
        }
    });
});