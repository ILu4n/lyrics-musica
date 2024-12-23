const progressBar = document.getElementById('progress-bar');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const botao = document.getElementById('botao');
const audio = document.getElementById('audio'); // Seleciona o elemento de áudio
let tocando = false; // Flag para verificar se a música está tocando

// Formata o tempo em minutos e segundos
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Configura a duração inicial
audio.addEventListener('loadedmetadata', () => {
    const duration = audio.duration; // Obtém a duração da música
    durationElement.textContent = formatTime(duration); // Define a duração no HTML
});

// Atualiza a barra de progresso e o tempo atual quando a música está tocando
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime; // Tempo atual da música
    const duration = audio.duration; // Duração total da música
    progressBar.value = (currentTime / duration) * 100; // Atualiza a barra de progresso
    currentTimeElement.textContent = formatTime(currentTime); // Atualiza o tempo exibido
});

// Controla o botão de play/pause
botao.addEventListener('click', function () {
    botao.classList.toggle('botaoPausar');
    if (tocando) {
        // Pausar a música
        audio.pause();
        botao.classList.remove('botaoPausar'); // Altera o ícone do botão (CSS)
        tocando = false;
    } else {
        // Reproduzir a música
        audio.play();
        botao.classList.add('botaoPausar'); // Altera o ícone do botão (CSS)
        tocando = true;
    }
});