const CompanyProfileServices = require("../services/CompanyProfileServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const CompanyProfile = await CompanyProfileServices.create({ ...body });
    res.status(200).json({
      success: true,
      data: CompanyProfile
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}



async function update (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  const updates = req.body; // The updates will be sent in the request body as JSON
  try {
    const CompanyProfile = await CompanyProfileServices.update(Id, updates);
    res.json({ success: true, data: CompanyProfile });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const CompanyProfile = await CompanyProfileServices.find(Id);
    res.json({ success: true, data: CompanyProfile });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const CompanyProfile = await CompanyProfileServices.get();
    res.status(200).json({
      success: true,
      data: CompanyProfile
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}


async function CompanyProfileDelete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await CompanyProfileServices.CompanyProfileDelete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "CompanyProfile not found",
      });
    }
  } catch (error) {
    next(error);
  }
}


module.exports = {
   create,
    get,
    update,
    find,
    CompanyProfileDelete,
}