const fs = require('fs');

exports.Upload = async function (req, res) {
    try {
        // Check if any file uploaded exceeds the maximum size
        const maxSize = 10 * 1024 * 1024; // 3 MB
        const files = req.files;
        const oversizedFiles = files.filter(file => file.size > maxSize);

        // If any file exceeds the maximum size, return an error
        if (oversizedFiles.length > 0) {
            return res.status(400).json({ success: false, message: "File size exceeds the limit of 4MB" });
        }

        // Proceed with processing files if all files are within the size limit
        const urls = files.map((file) => file.path);
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