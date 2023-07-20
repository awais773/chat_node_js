const patientService = require("../services/patientService");
const Patient = require("../modal/Patient");

async function listPatients(req, res, next) {
  try {
    const patients = await patientService.listPatients();
    res.status(200).json({
      success: true,
      patients,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function createPatient(req, res, next) {
  try {
    const patient = await Patient.create(req.body);
    res.status(200).json({
      success: true,
      patient,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function deletePatient(req, res, next) {
  const { id } = req.params;
  try {
    const result = await patientService.deletePatient(id);
    if (result) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.json({
        message: "Patient not found",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function editPatient(req, res, next) {
  const { id } = req.params;
  const {
    firstName,
    middleName,
    lastName,
    name,
    address,
    addressType,
    type,
    latitude,
    longitude,
    uploadstatus,
    expirytime,
    scheduletime,
    careDate,
    certificationPeriod,
    serviceType,
    gender,
    zip,
    city,
    state,
    phoneNo,
    phoneP_Two,
    address_Two,
    addressType_Two,
    country_Two,
    state_Two,
    city_Two,
    zip_Two,
    applicationId,
    DOB,
    phone_One,
    phone_Two,
    phone_Three,
    country,
    relation,
    document,
    latitude_Two,
    longitude_Two,
    insurance,
    agency,
    coordinator,
    OT,
    PT,
    ST
  } = req.body;

  try {
    const patient = await patientService.editPatient(
      id,
      name,
      firstName,
      middleName,
      lastName,
      address,
      addressType,
      type,
      latitude,
      longitude,
      uploadstatus,
      expirytime,
      scheduletime,
      careDate,
      certificationPeriod,
      serviceType,
      gender,
      zip,
      city,
      state,
      phoneNo,
      phoneP_Two,
      address_Two,
      addressType_Two,
      country_Two,
      state_Two,
      city_Two,
      zip_Two,
      applicationId,
      DOB,
      phone_One,
      phone_Two,
      phone_Three,
      country,
      relation,
      document,
      latitude_Two,
      longitude_Two,
      insurance,
      agency,
      coordinator,
      OT,
      PT,
      ST
    );
    res.status(200).json({
      success: true,
      patient,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function getPatient(req, res, next) {
  try {
    const { id } = req.params;
    const patient = await patientService.getPatient(id);
    res.status(200).json({
      success: true,
      patient,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = {
  listPatients,
  createPatient,
  deletePatient,
  editPatient,
  getPatient,
};
