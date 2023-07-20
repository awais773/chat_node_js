const Therapist = require("../modal/Therapist");
const { Op } = require('sequelize');

async function listTherapists() {
  const therapists = await Therapist.findAll({
    attributes: [
      "id",
      "fullName",
      "firstName",
      "middleName",
      "lastName",
      "serviceType",
      "gender",
      "DOB",
      "ssnNo",
      "hireDate",
      "status",
      "address",
      "street",
      "zip",
      "city",
      "state",
      "country",
      "homePhoneNo",
      "emgName",
      "emgEmail",
      "relationship",
      "phoneNo",
      "phone_One",
      "phone_Two",
      "accountEmail",
      "password",
      "ProfessionalLicenseNo",
      "LicenseDate",
      "ExpDate",
      "proExpDate",
      "annualExpDate",
      "annualSelfExpDate",
      "annualFieldExpDate",
      "annualtrainExpDate",
      "assignPaitents",
      "document",
    ],
    where: {
      isAdmin: {
        [Op.not]: true
      }
    },
    order: [['createdAt', 'DESC']] // Sort by createdAt field in descending order
  });
  return therapists;
}


async function createTherapist(body) {
  const therapist = await Therapist.create({ ...body });
  return therapist;
}

async function deleteTherapist(id) {
  const result = await Therapist.destroy({
    where: {
      id,
    },
  });
  return result;
}

async function editTherapist(obj) {
  const { id } = obj;
  let therapist = await Therapist.findOne({ where: { id } });

  if (!therapist) {
    throw new Error("Therapist not found");
  }
  therapist.firstName = obj.firstName;
  therapist.middleName = obj.middleName;
  therapist.lastName = obj.lastName;
  therapist.serviceType = obj.serviceType;
  therapist.fullName = obj.fullName;
  therapist.serviceType = obj.serviceType;
  therapist.gender = obj.gender;
  therapist.DOB = obj.DOB;
  therapist.ssnNo = obj.ssnNo;
  therapist.hireDate = obj.hireDate;
  therapist.status = obj.status;
  therapist.address = obj.address;
  therapist.street = obj.street;
  therapist.zip = obj.zip;
  therapist.city = obj.city;
  therapist.state = obj.state;
  therapist.country = obj.country;
  therapist.homePhoneNo = obj.homePhoneNo;
  therapist.emgName = obj.emgName;
  therapist.emgEmail = obj.emgEmail;
  therapist.relationship = obj.relationship;
  therapist.phoneNo = obj.phoneNo;
  therapist.phone_One = obj.phone_One;
  therapist.phone_Two = obj.phone_Two;
  therapist.accountEmail = obj.accountEmail;
  therapist.password = obj.password;
  therapist.ProfessionalLicenseNo = obj.ProfessionalLicenseNo;
  therapist.LicenseDate = obj.LicenseDate;
  therapist.ExpDate = obj.ExpDate;
  therapist.proExpDate = obj.proExpDate;
  therapist.annualExpDate = obj.annualExpDate;
  therapist.annualSelfExpDate = obj.annualSelfExpDate;
  therapist.annualFieldExpDate = obj.annualFieldExpDate;
  therapist.annualtrainExpDate = obj.annualtrainExpDate;
  therapist.assignPaitents = obj.assignPaitents;

  therapist.password = obj.password;
  therapist.document = obj.document;
  therapist.careGiverRate = obj?.careGiverRate;


  await therapist.save();

  return therapist;
}

async function getTherapist(id) {
  const therapist = await Therapist.findOne({ where: { id } });
  return therapist;
}


async function loginTherapist(body) {
  const therapist = await Therapist.findOne({
    where: {
      accountEmail: body?.accountEmail.toLowerCase(),
      password: body.password,
    },
  });
  return therapist;
}
module.exports = {
  listTherapists,
  createTherapist,
  deleteTherapist,
  editTherapist,
  getTherapist,
  loginTherapist,
};
