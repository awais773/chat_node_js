const Patient = require("../modal/Patient");

async function listPatients() {
  const patients = await Patient.findAll({
    attributes: [
      "id",
      "name",
      "firstName",
      "middleName",
      "lastName",
      "address",
      "addressType",
      "type",
      "latitude",
      "longitude",
      "uploadstatus",
      "expirytime",
      "scheduletime",
      "careDate",
      "certificationPeriod",
      "serviceType",
      "gender",
      "zip",
      "city",
      "state",
      "phoneNo",
      "phoneP_Two",
      "address_Two",
      "addressType_Two",
      "country_Two",
      "state_Two",
      "city_Two",
      "zip_Two",
      "applicationId",
      "DOB",
      "phone_One",
      "phone_Two",
      "phone_Three",
      "country",
      "relation",
      "longitude_Two",
      "latitude_Two",
      "coordinator",
      "agency",
      "insurance",
      "OT",
      "PT",
      "ST",
    ],
  });
  return patients;
}

async function deletePatient(id) {
  const result = await Patient.destroy({
    where: {
      id,
    },
  });
  return result;
}

async function editPatient(
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
  ST,
) {
  const patient = await Patient.findOne({ where: { id } });

  if (!patient) {
    throw new Error("Patient not found");
  }

  patient.name = name;
  patient.firstName = firstName;
  patient.middleName = middleName;
  patient.lastName = lastName;
  patient.address = address;
  patient.type = type;
  patient.latitude = latitude;
  patient.longitude = longitude;
  patient.uploadstatus = uploadstatus;
  patient.expirytime = expirytime;
  patient.scheduletime = scheduletime;
  patient.addressType = addressType;
  patient.careDate = careDate;
  patient.certificationPeriod = certificationPeriod;
  patient.serviceType = serviceType;
  patient.gender = gender;
  patient.zip = zip;
  patient.city = city;
  patient.state = state;
  patient.phoneNo = phoneNo;
  patient.phoneP_Two = phoneP_Two;
  patient.address_Two = address_Two;
  patient.addressType_Two = addressType_Two;
  patient.country_Two = country_Two;
  patient.state_Two = state_Two;
  patient.city_Two = city_Two;
  patient.zip_Two = zip_Two;
  patient.applicationId = applicationId;
  patient.DOB = DOB;
  patient.phone_One = phone_One;
  patient.phone_Two = phone_Two;
  patient.phone_Three = phone_Three;
  patient.country = country;
  patient.relation = relation;
  patient.latitude_Two = latitude_Two;
  patient.longitude_Two = longitude_Two;
  patient.insurance = insurance;
  patient.agency = agency;
  patient.coordinator = coordinator;
  patient.document = document;
  patient.OT = OT;
  patient.PT = PT;
  patient.ST = ST;
  await patient.save();

  return patient;
}

async function getPatient(id) {
  const patient = await Patient.findOne({ where: { id } });
  return patient;
}

module.exports = { listPatients, deletePatient, editPatient, getPatient };
