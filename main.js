const { app, BrowserWindow, Menu } = require('electron')

process.env.NODE_ENV = 'release';

function createWindow () {
  let win = new BrowserWindow({
    width: 960,
    height: 640,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);

  win.loadFile('index.html');
}

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        role: 'reload'
      },
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];

if (process.env.NODE_ENV !== 'release') {
  mainMenuTemplate.push({
    label: 'Developer tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}

app.on('ready', createWindow)
app.on('browser-window-created',function(e,window) {});
