require('dotenv').config();
const {
    app,
    ipcMain,
    systemPreferences,
    Menu,
    dialog,
    shell,
    session,
    // eslint-disable-next-line import/no-extraneous-dependencies
  } = require('electron');
const path = require('path');
//   const Log = require('./src/utils/log');
//   const log = new Log('main.js');
const updater = require('./src/updater');
const updaterWindow = require('./src/windows/updaterWindow');
const switchWindows = require('./src/utils/switchWindows');
const configWindow = require('./src/windows/configWindow');


  const createWindow = async () => {
    // eslint-disable-next-line global-require
    // powerMonitor = require('./src/utils/events/powerMonitor');
    // systemInformation();
    // getClientPublicIp();
    // Crea la ventana de bienvenida.
    // console.log(process.env)
    win = updaterWindow();
    // win.webContents.openDevTools()
    win.webContents.session.clearCache();
    // log.info('Created updater window');
    // Time to show Sumadi Logo and Verify Updates
    setTimeout(() => updater(win), 1500);
    win.loadFile(path.join(__dirname, 'client/index.html'));
  
    // Emitted when the window is closed.
    win.on('closed', () => {
    //   log.info('updater window closed!');
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null;
    });
  
    win.on('close', () => {
    //   log.info('Closing updater window!');
    });
  
    // i18n.configure({
    //   directory: path.join(__dirname, './i18n/locales'),
    //   defaultLocale: global.appLanguage,
    // });
  
  
  };


  const switchToSettingsWindow = () => {
   
    win = switchWindows(win, configWindow());
    // setMenu({ window: win, showSettingOpt: false });
    console.log("ddddddddd");
    win.setFullScreen(true);
    win.webContents.openDevTools();
    win.loadFile(path.join(__dirname, 'client/institutionSelection.html'));
    // win.webContents.on('dom-ready', () => {
    //   win.show();
    // });
  };

ipcMain.on('ping-good', async () => {
console.log("bien hecho");
switchToSettingsWindow()
});

  app.on('ready', createWindow);