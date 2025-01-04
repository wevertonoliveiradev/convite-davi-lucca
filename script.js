const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
    daysElement.innerHTML = String(days).padStart("2", 0);
    hoursElement.innerHTML = String(hours).padStart("2", 0);
    minutesElement.innerHTML = String(minutes).padStart("2", 0);
    secondsElement.innerHTML = String(seconds).padStart("2", 0);
};

const countdown = () => {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const targetDate = new Date(nextYear, -12, 74); // mês do ano e o quantos dias faltam

    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    console.log(days)
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    render(days, hours, minutes, seconds);
};

countdown()
setInterval(countdown, 1000);



const video = document.getElementById("background-video");
const muteButton = document.getElementById("mute-toggle");

// Detecção de dispositivos e navegadores
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
const isAndroid = /Android/i.test(navigator.userAgent);

window.onload = function () {
  // Tratamento para dispositivos iOS
  if (isIOS) {
    video.muted = true; // Começa com som desligado
    video.play().catch((err) => console.log("Erro ao reproduzir vídeo no iOS:", err));
  } else {
    // Tentativa de reprodução automática com som desligado para outros dispositivos
    video.play().catch((err) => console.log("Erro ao reproduzir vídeo:", err));
  }

// //   // Simula clique no botão de som ao carregar a página
  muteButton.click();

  // Evento para desbloquear som em dispositivos que exigem interação
  document.body.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch((err) => console.log("Erro ao reproduzir o vídeo:", err));
    }
  });
};

// Lógica do botão de mute/unmute
muteButton.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    muteButton.textContent = "🔊"; // Ícone de som ativado
  } else {
    video.muted = true;
    muteButton.textContent = "🔈"; // Ícone de som desativado
  }
});



