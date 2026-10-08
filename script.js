const TOKEN = "8526992522:AAGVTTYRGdbXQH8zDeMTuynP69cYMfE0HCA";

const formulario = document.getElementById("telegramForm");
const chatIdInput = document.getElementById("chatId");
const mensajeInput = document.getElementById("mensaje");
const estado = document.getElementById("estado");
const boton = document.getElementById("btnEnviar");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const chatId = chatIdInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    if (chatId === "") {
        estado.textContent = "❌ Escribe un Chat ID.";
        estado.style.color = "#c62828";
        return;
    }

    if (mensaje === "") {
        estado.textContent = "❌ Escribe un mensaje.";
        estado.style.color = "#c62828";
        return;
    }

    estado.textContent = "📤 Enviando...";
    estado.style.color = "#168acb";

    boton.disabled = true;
    boton.textContent = "Enviando...";

    const url =
        `https://api.telegram.org/bot${TOKEN}/sendMessage` +
        `?chat_id=${encodeURIComponent(chatId)}` +
        `&text=${encodeURIComponent(mensaje)}`;

    const ventana = window.open(url, "_blank");

    if (ventana) {
        estado.textContent = "✅ Mensaje enviado correctamente.";
        estado.style.color = "#168a45";
        mensajeInput.value = "";
    } else {
        estado.textContent =
            "❌ El navegador bloqueó la ventana de Telegram.";
        estado.style.color = "#c62828";
    }

    boton.disabled = false;
    boton.textContent = "Enviar mensaje";
});