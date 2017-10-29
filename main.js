const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1100,
        height: 800,
        minWidth: 800,
        minHeight: 800,
        // frame: false,
        // toolbar: false,
        resizable: true,
        show: false
    });

    win.once('ready-to-show', () => {
        win.focus();
        win.show();
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist', 'index.html'),
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