const { dialog } = require('electron');
const { autoUpdater } = require('electron-updater');

// Configure log debugging
autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';

// Disable auto-downloading of updates
autoUpdater.autoDownload = false;
// Single export to check for and apply any available updates
module.exports = () => {
  // Check for update (GH Releases)
  autoUpdater.checkForUpdates();

  // Listen for update found
  autoUpdater.on('update-available', () => {
    // Prompt user to start download
    // dialog
    //   .showMessageBox({
    //     type: 'info',
    //     title: 'Mise à jour disponible',
    //     message:
    //       "Une nouvelle version de l'application est disponible. Souhaitez-vous mettre à jour Agroecoloscore ?",
    //     buttons: ['Mettre à jour', 'Non'],
    //   })
    //   .then((result) => {
    //     let buttonIndex = result.response;
    //     if (buttonIndex === 0) autoUpdater.downloadUpdate();
    //   });

    autoUpdater.downloadUpdate();
  });

  // Listen for update downloaded
  autoUpdater.on('update-downloaded', () => {
    // Prompt the user to install the update
    dialog
      .showMessageBox({
        type: 'info',
        title:
          "Une nouvelle version de l'application est disponible. Souhaitez-vous mettre à jour Agroecoloscore ?",
        message: "Souhaitez-vous l'installer et redémarrer Agroecoloscore ?",
        buttons: ['Oui', 'Plus tard'],
      })
      .then((result) => {
        let buttonIndex = result.response;
        if (buttonIndex === 0) autoUpdater.quitAndInstall(false, true);
      });
  });
};
