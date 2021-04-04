const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const url = "http://localhost:3000";

let window;

function createWindow () {
  let options = {
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 520,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  }

  if (process.platform === 'darwin') {
    options.titleBarStyle = 'hidden';
  } else {
    options.frame = false;
  }

  window = new BrowserWindow(options);

  window.loadURL(url);
  //window.loadFile('build/index.html') // prod

  window.on('maximize', () => {
    window.webContents.send('maximized');
  });

  window.on('unmaximize', () => {
    window.webContents.send('unmaximized');
  });

  window.on('closed', () => window = null);
}

ipcMain.handle('minimize-event', () => {
  window.minimize();
});

ipcMain.handle('maximize-event', () => {
  window.maximize();
});

ipcMain.handle('unmaximize-event', () => {
  window.unmaximize();
});

ipcMain.handle('quit-event', () => {
  app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
