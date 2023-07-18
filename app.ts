const { ipcRenderer } = require("electron");

const audio = new Audio();
audio.src = 'lol.mp3'

const startFirst = () => {
    document.body.style.backgroundColor = 'red';
    const randomX = Math.floor(Math.random() * 3000);
    ipcRenderer.send("radnomX", randomX);
    ipcRenderer.send("mini");
};

const startSecond = () => {
    document.body.style.backgroundColor = 'black';
    const randomY = Math.floor(Math.random() * 1000);
    ipcRenderer.send("radnomY", randomY);
    ipcRenderer.send("maxi");
};

function* generate () {
    while (true) {
        yield startFirst();
        yield startSecond();
    }
}

const runGenerate = generate();

audio.play()
setInterval(() => {
    runGenerate.next();
}, 50)