module.exports = (originalWindow, newWindow) => {
    originalWindow.hide();
    const newWin = newWindow;
    newWin.webContents.session.clearCache();
    originalWindow.close();
    return newWin;
  };
  