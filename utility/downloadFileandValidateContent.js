const pdfjsLib = require('pdfjs-dist/build/pdf');
const fs = require('fs');
const os = require('os');

/**
 * Command to load a PDF file, extract text, and perform verification.
 * @param {string} fileName - The path to the PDF file.
 * @param {string} verificationData - The data used for verification.
 * @param {boolean} flag - A flag indicating whether to perform additional verification.
 */
module.exports = class downloadFileandValidateContent {
  async command(fileName, verificationData, flag) {
    let maxRetries = 5;
    let retryInterval = 2000;
    let retries = 0;
    console.log('pdf home dir :' + os.homedir() + 'pdf home __dirname :' + __dirname);
    console.log('pdf home __filename :' + __filename + 'buildDirectory :' + process.env.AGENT_BUILDDirectory);

    while (retries < maxRetries) {
      const fileExists = fs.existsSync(fileName);
      if (fileExists) {
        const stats = fs.statSync(fileName);
        const fileSizeInBytes = stats.size;
        if (fileSizeInBytes > 0) {
          console.log('File exists and meets criteria');
          break; // Exit the loop if the file is found and meets criteria
        }
      }else{
        await browser.pause(retryInterval);
        retries++;
      }

      if (retries === maxRetries) {
        console.error('File not found or does not meet criteria after maximum retries');
        break;
      }

    }
    let fileExists = Boolean(fs.existsSync(fileName));
    await browser.assert.equal(fileExists, true, 'Downloaded file exist');
    const loadingTask = pdfjsLib.getDocument(fileName);
    try {
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
      let text = '';
      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const itemscount = content.items;
        content.items.forEach(item => {
          text += item.str;
        });
      }
      console.log('pdf content :' + text);
      console.log('verification content :' + text);
      if(flag == true)
      {
        if (verificationData.includes(',')) {
          const values = verificationData.split(',');

          values.forEach(value => {
            console.log(text.includes(value.trim())); 
          });
        }
      }
    } catch (error) {
      console.error('Error loading PDF:', error);
    }
  }
};
