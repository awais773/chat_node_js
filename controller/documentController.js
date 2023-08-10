exports.Upload = async function (req, res) {
    try {
        const urls = req.files.map((file) => file.path);
        debugger
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}