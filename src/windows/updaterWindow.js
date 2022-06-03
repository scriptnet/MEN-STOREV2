// eslint-disable-next-line import/no-extraneous-dependencies
const { BrowserWindow } = require('electron');
const path = require('path');

module.exports = () => new BrowserWindow({
  fullscreen: false,
  frame: false,
  width: 400,
  height: 182,
  resizable: false,
  // backgroundColor: '#bf0606', //002d87 bcp
  icon: path.join(__dirname, '../public/resources/logoBdoio.png'),
  webPreferences: {
    devTools: true,
    nodeIntegration: true,
    preload: path.join(__dirname, 'scripts/indexRenderer.js')
    // nodeIntegration: true,
    
    // nodeIntegrationInWorker: true,
    // nodeIntegrationInSubFrames: true,
    // enableRemoteModule: true,
    // contextIsolation: false //required flag
  }
});
