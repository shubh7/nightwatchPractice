const fs = require('fs');
const path = require('path');

/**
 * Command to delete a downloaded file.
 * @param {string} fileName - The name of the file to be deleted.
 */
module.exports = class deleteDownloadedFile {
  async command(filePath) {

   try {
    // Check if the file exists before attempting to delete
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log('File was deleted:', filePath);
    } else {
      console.log('File does not exist:', filePath);
    }
  } catch (error) {
    console.error('Error deleting file:', error);
  }
  }
};
