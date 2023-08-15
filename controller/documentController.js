const fs = require('fs');

exports.Upload = async function (req, res) {
    try {
        const urls = req.files.map((file) => file.path);
        res.status(200).json({ success: true, message: "Files uploaded successfully", urls });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
exports.deleteFile = async function (req, res) {
    try {
        const { filename } = req.body;
        fs.unlinkSync(filename);
        
        return res.status(200).json({ success: true, message: "File deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}