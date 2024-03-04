const QuerieServices = require("../services/QuerieServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req;
    const Querie = await QuerieServices.create({...body, userId: userId});
    res.status(200).json({
      success: true,
      data: Querie
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
    const Querie = await QuerieServices.update(Id, updates);
    res.json({ success: true, data: Querie });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


async function find (req, res)  {
  const Id = req.params.Id; // Get the user ID from the route parameter
  try {
    const Querie = await QuerieServices.find(Id);
    res.json({ success: true, data: Querie });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
  });  }
}



async function get(req, res, next) {
  try {
    const { userId } = req;    
    const Querie = await QuerieServices.get(userId);
    res.status(200).json({
      success: true,
      data: Querie
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}


async function QuerieDelete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await QuerieServices.QuerieDelete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'delete Sucessfully'
      });
    } else {
      res.json({
        message: "Querie not found",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function filtersQuerie(req, res, next) {
  try {
    const { body } = req;
    const Querie = await QuerieServices.filtersQuerie(body);
    res.status(200).json({
      success: true,
      data: Querie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}


module.exports = {
   create,
    get,
    update,
    find,
    QuerieDelete,
    filtersQuerie,
}