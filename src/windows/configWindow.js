// eslint-disable-next-line import/no-extraneous-dependencies
const { BrowserWindow } = require('electron');
const path = require('path');

module.exports = () => new BrowserWindow({
  fullscreen: true,
  frame: true,
  resizable: false,
  backgroundColor: '#242E38',
  
  icon: path.join(__dirname, '../public/resources/icono_scriptnet.png'),
  webPreferences: {
    devTools: true, //cambiar a false para evitar hackeos
    nodeIntegration: true,
  },
});
