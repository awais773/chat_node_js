const uploadFile = require("../modal/uploadDocument");

async function getFile() {
  const document = await uploadFile.findAll({
    attributes: ["id", "url"],
  });
  return document;
}

module.exports = {
  getFile,
};
