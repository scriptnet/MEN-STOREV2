// eslint-disable-next-line import/no-extraneous-dependencies
const { ipcRenderer } = require('electron');

// const changeUpdateMessage = (message) => {
//   const messageElement = document.querySelector('#message');
//   messageElement.innerHTML = message;
// };

// ipcRenderer.send('ping-good');
// ipcRenderer.on('appVersion', (event, appVersion) => {
//   changeUpdateMessage(`v${appVersion}`);
// });
// ipcRenderer.on('downloadingUpdate', (event, appVersion) => {
//   changeUpdateMessage(`Downloading ${appVersion} ...`);
// });
// ipcRenderer.on('installingUpdate', (event, appVersion) => {
//   changeUpdateMessage(`Installing ${appVersion} ...`);
// });
console.log("aaa");
ipcRenderer.on('ping-good', () => {
    console.log("teetetet");
  ipcRenderer.send('ping-good');
});
// ipcRenderer.on('updateError', () => {
//   changeUpdateMessage('An error ocurred while attempting to update the app.');
//   setTimeout(() => {
//     ipcRenderer.send('exit-app');
//   }, 2000);
// });
