const {app, BrowserWindow, ipcMain} = require("electron");

app.on("ready", () => {
    const win = new BrowserWindow({
        show: false,
        height: 700,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        frame: false,
        icon: "icon.png",
        title: 'Counter-Strike: Global Offensive',
        resizable: false
    });

    const loadingImage = new BrowserWindow({
        height: 300,
        width: 300,
        frame: false,
        resizable: false
    });
    
    loadingImage.loadFile("loading.html");

    ipcMain.on("radnomX", (event, arg) => {
        win.setPosition(arg, arg);
        win.minimize();
    });
    
    ipcMain.on("radnomY", (event, arg) => {
        win.setPosition(arg, arg);
        win.maximize();
    });

    setTimeout(() => {
        win.loadFile("index.html");
        loadingImage.destroy();
        win.show();
    }, 3000)
});