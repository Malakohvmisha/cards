const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({
        frame: false,
        width: 1100,
        height: 800,
        minWidth: 800,
        minHeight: 800
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'app/html', 'main.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
       app.quit();
   }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});