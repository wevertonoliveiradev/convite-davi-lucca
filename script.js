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







const audio = document.getElementById("background-music");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

// Função para reproduzir o áudio
function playAudio() {
    audio.play()
        .then(() => {
            playButton.style.display = "none";
            pauseButton.style.display = "inline";
        })
        .catch(error => {
            console.error("Erro ao reproduzir o áudio:", error);
        });
}

// Função para pausar o áudio
function pauseAudio() {
    audio.pause();
    pauseButton.style.display = "none";
    playButton.style.display = "inline";
}

// Adicionar eventos aos botões
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);

// Tentativa de reproduzir automaticamente ao carregar (pode ser bloqueada pelo navegador)
window.addEventListener("load", () => {
    audio.play().catch(() => {
        console.log("Reprodução automática bloqueada pelo navegador.");
    });
});