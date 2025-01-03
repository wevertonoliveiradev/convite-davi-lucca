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



window.onload = function () {
    const video = document.getElementById('background-video');
    
    // Primeira tentativa de reprodução (sem áudio, com muted)
    video.play().catch((error) => {
        console.log("Erro ao tentar reproduzir o vídeo:", error);
    });

    // Adicionando um evento de clique na página para ativar o áudio
    document.body.addEventListener('click', function () {
        video.muted = false; // Remover o muted para ativar o áudio
        video.play().catch((error) => {
            console.log("Erro ao tentar reproduzir o vídeo com áudio:", error);
        });
    });
};




