const invoiceServices = require("../services/invoices")

exports.createInvoioce = async (req, res) => {
    try {

        const booking = await invoiceServices.createInvoice(req.body)


        res.status(200).json({
            success: true,
            data: booking
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
exports.getInvoioces = async (req, res) => {
    try {

        const data = await invoiceServices.getInvoices()


        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
exports.getInvoioce = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await invoiceServices.getInvoice(id)


        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
exports.update = async (req, res) => {
    try {

        const booking = await invoiceServices.update(req.body)


        res.status(200).json({
            success: true,
            data: booking
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
exports.filter = async (req, res) => {
    try {
        const { body } = req
        const invoices = await invoiceServices.filterInvoices(body)


        res.status(200).json({
            success: true,
            data: invoices
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
exports.email = async (req, res) => {
    try {
        var response = {
            url: req.file.path,
            message: "Upload successfuly"
        }
        const body = {
            agency:"agency",
            patientId: 430,
            status : "Verified"
        }
        
        const invoices = await invoiceServices.filterEmailInvoices(body)
        debugger

       
        res.status(200).json({
            success: true,
            response,
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};