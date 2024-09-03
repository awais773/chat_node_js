const LedgerServices = require("../services/LedgerServices");

async function create(req, res, next) {
  try {
    const { body } = req;
    const { userId } = req.body;
    const { ledgerUserId } = req.body;
    const ledgerResponse = await LedgerServices.create({
      ...body,
      ledger_user_id: ledgerUserId,
      userId: userId,
    });
    res.status(200).json({
      success: true,
      data: ledgerResponse,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

async function update(req, res) {
  const Id = req.params.Id;
  const updates = req.body;
  try {
    const ledgerResponse = await LedgerServices.update(Id, updates);
    res.json({ success: true, data: ledgerResponse });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function find(req, res) {
  const Id = req.params.Id;
  try {
    const ledgerResponse = await LedgerServices.find(Id);
    res.json({ success: true, data: ledgerResponse });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function get(req, res, next) {
  try {
    const { userId } = req;
    const { page, limit } = req.pagination; // Get pagination parameters from req.pagination
    const ledgerResponse = await LedgerServices.get(userId, page, limit);
    res.status(200).json({
      success: true,
      data: ledgerResponse,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function Delete(req, res, next) {
  const { id } = req.params;
  try {
    const result = await LedgerServices.Delete(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: "delete Sucessfully",
      });
    } else {
      res.json({
        message: "DefineItem not found",
      });
    }
  } catch (error) {
    next(error);
  }
}
async function getByUserId(req, res, next) {
  try {
    const { userId } = req.body;
    const { ledgerUserId } = req.body;
    if (!userId) {
      return res.status(400).json({
        success: false,
        error: 'userId is required in the request body.',
      });
    }

    const ledgerResponse = await LedgerServices.getByUserId(userId,ledgerUserId);
    res.status(200).json({
      success: true,
      data: ledgerResponse,
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
  Delete,
  getByUserId
};
