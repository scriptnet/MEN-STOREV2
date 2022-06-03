const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev');
autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';
autoUpdater.autoDownload = false;
module.exports = (win) => {
  console.log(process.env.NODE_ENV);
  if (isDev) {
    // log.warn('Saltando actualización. Modo desarrollador detectado');
    win.webContents.send('ping-good');
    return;

    
    console.log("test");
    setTimeout(() => {
        win.webContents.send('ping-good');
      }, 10000); 
  }


  let availableUpdateVersion;
  autoUpdater.checkForUpdates()
  autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
    const dialogOpts = {
      type: 'info',
      buttons: ['Ok'],
      title: 'Application Update',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: 'A new version is being downloaded.'
    }
    dialog.showMessageBox(dialogOpts, (response) => {
  
    });
  })
  
  autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
    const dialogOpts = {
      type: 'info',
      buttons: ['Restart', 'Later'],
      title: 'Application Update',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: 'A new version has been downloaded. Restart the application to apply the updates.'
    };
    dialog.showMessageBox(dialogOpts).then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall()
    })
  });


  
  // autoUpdater.on('update-available', (updateInfo) => {
  //   const { version } = updateInfo;
  //   availableUpdateVersion = version;
  //   autoUpdater.downloadUpdate();
  //   win.webContents.send('downloadingUpdate', availableUpdateVersion);
  // });

  // autoUpdater.on('update-not-available', () => {
  //   win.webContents.send('updateNotAvailable');
  // });

  // autoUpdater.on('update-downloaded', () => {
  //   win.webContents.session.clearCache();
  //   win.webContents.session.clearStorageData();
  //   win.webContents.send('installingUpdate', availableUpdateVersion);
  //   setTimeout(() => {
  //     autoUpdater.quitAndInstall(false, true);
  //   }, 1000);
  // });

  // autoUpdater.on('error', () => {
  //   log.error('An error ocurred while attempting to update the S2B application.');
  //   win.webContents.send('updateNotAvailable');
  // });



};
