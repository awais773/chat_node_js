const therapistService = require("../services/therapistService");
const patientService = require("../services/patientService");
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');


async function listTherapists(req, res, next) {
  try {
    const therapists = await therapistService.listTherapists();
    res.status(200).json({
      success: true,
      therapists,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}
async function getAllTherapistsAndPatients(req, res, next) {
  try {
    const therapists = await therapistService.listTherapists();
    const patients = await patientService.listPatients();

    res.status(200).json({
      success: true,
      therapists,
      patients,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function createTherapist(req, res, next) {
  try {
    const therapist = await therapistService.createTherapist(req.body);

    res.status(200).json({
      success: true,
      therapist,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function deleteTherapist(req, res, next) {
  const { id } = req.params;

  try {
    const result = await therapistService.deleteTherapist(id);

    if (result) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.json({
        message: "Therapist not found",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function editTherapist(req, res, next) {
  const { id } = req.params;

  try {
    const therapist = await therapistService.editTherapist({
      ...req.body,
      id: id,
    });

    res.status(200).json({
      success: true,
      therapist,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function getTherapist(req, res, next) {
  try {

    const { id } = req.params;
    const therapist = await therapistService.getTherapist(id);

    res.status(200).json({
      success: true,
      therapist,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}
async function uploadFile(req, res, next) {
  try {
    var response = {
      url: req.file.path,
      message: "Upload successfuly"
    }

    res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}
async function deleteFile(req, res, next) {
  try {
    const filePath = req.body.path;
    if (!filePath) {
      throw new Error('File path is required.');
    }
    fs.unlinkSync(filePath); // delete the file using the file path

    res.status(200).json(await ResSuccess(response))
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}
async function createZip(req, res, next) {
  try {
    const files = req.body.files; // an array of file paths
    const archiveName = 'therapist/therapist-files.zip'; // name of the zip file
    const output = fs.createWriteStream(archiveName); // create a write stream for the zip file
    const archive = archiver('zip', { zlib: { level: 9 } }); // create a new zip object
    archive.pipe(output); // pipe the archive to the output stream

    // add each file to the zip archive
    files.forEach(file => {
      const fileStream = fs.createReadStream(file);
      archive.append(fileStream, { name: file });
    });

    await archive.finalize(); // finalize the zip archive

    const downloadLink = `${req.protocol}s://${req.get('host')}/${archiveName}`; // create the download link

    res.status(200).json({
      success: true,
      downloadingLink: downloadLink,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
async function loginTherapist(req, res, next) {
  try {
    const loginTherapist = await therapistService.loginTherapist(req.body);
    if (loginTherapist == null)

      res.status(200).json({
        success: false,
        message: "invalid credentials",
        loginTherapist,
      });

    else {
      res.status(200).json({
        success: true,
        loginTherapist,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = {
  listTherapists,
  createTherapist,
  deleteTherapist,
  editTherapist,
  getTherapist,
  loginTherapist,
  getAllTherapistsAndPatients,
  uploadFile,
  deleteFile,
  createZip
};
