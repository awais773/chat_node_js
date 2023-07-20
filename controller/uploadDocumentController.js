const uploadFile = require("../modal/uploadDocument");
const uploadFileController = require("../services/uploadDocumentService");
const archiver = require("archiver");
const path = require('path');
const { createReadStream, createWriteStream } = require('fs');
const { createGzip } = require('zlib');
const { v4 } = require('uuid');
const { join } = require("path");

const uploadDocument = async (req, res) => {
  try {
    const urls = req.files.map((file) => file.path);

    // Create a unique name for the zip file
    const zipName = `${v4()}.zip`;

    // Create a write stream for the zip file
    const zipStream = createWriteStream(join(__dirname, '../downloads', zipName));

    // Create a zip archive
    const archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level
    });

    // Pipe the zip archive to the write stream
    archive.pipe(zipStream);

    // Add each file to the zip archive
    urls.forEach((url) => {
      const fileName = url.split('/').pop();
      archive.append(createReadStream(url), { name: fileName });
    });

    // Finalize the zip archive
    await archive.finalize();

    // Send the zip file as a download attachment
    res.status(200).json({
      success: true,
      message: 'Files uploaded successfully. Download link generated.',
      downloadLink: `${req.protocol}://${req.get('host')}/downloads/${zipName}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


async function getFile(req, res, next) {
  try {
    const file = await uploadFileController.getFile();
    res.status(200).json({
      success: true,
      file,
    });
  } catch (error) {
    res.send(error);
  }
}
module.exports = {
  uploadDocument,
  getFile,
};


