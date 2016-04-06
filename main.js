var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;
app.on('window-all-closed', function() {
  app.quit();
});

var mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768 });
  mainWindow.maximize();
  mainWindow.openDevTools();
  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
