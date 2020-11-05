const electron = require("electron")
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const mongoose = require('mongoose');
require('electron-reload')(__dirname);

let window;
function createWindow(){
    window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            
        }
    })
    window.loadFile('./views/index.html');

    // winOne.webContents.openDevTools();
    window.on('closed', () => {
        window = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=> {
    if(process.platform !== 'darwin'){
        app.quit()
    }    
});

