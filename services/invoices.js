const Invoice = require("../modal/Invoice");
const Patient = require("../modal/Patient");
const Therapist = require("../modal/Therapist");
const Booking = require("../modal/booking");

exports.createInvoice = async (body) => {

  const data = await Invoice.create({ ...body });

  return data;
};
exports.update = async (body) => {
  try {
    const { id, ...updatedData } = body;

    // Check if the invoice with the provided ID exists
    const existingInvoice = await Invoice.findByPk(id);
    if (!existingInvoice) {
      throw new Error('Invoice not found');
    }

    // Update the invoice with the new data
    const updatedInvoice = await existingInvoice.update(updatedData);

    return updatedInvoice;
  } catch (error) {
    // Handle any potential errors
    console.error('Error updating invoice:', error);
    throw error;
  }
};
exports.getInvoices = async () => {

  const data = await Invoice.findAll({
    include: [
      {
        model: Booking,
        include: [Patient, Therapist],
      }
    ],

  });

  return data;
};

exports.getInvoice = async (invoiceId) => {
  try {
    const invoice = await Invoice.findByPk(invoiceId, {
      include: [
        {
          model: Booking,
          include: [Patient, Therapist],
        },
      ],
    });

    if (!invoice) {
      throw new Error('Invoice not found');
    }

    return invoice;
  } catch (error) {
    console.error('Error getting invoice by ID:', error);
    throw error;
  }
};
exports.getInvoicesByBookingId = async (bookingId) => {
  try {
    const invoices = await Invoice.findAll({
      include: [
        {
          model: Booking,
          include: [Patient, Therapist],
          where: { id: bookingId },
        },
      ],
    });

    return invoices;
  } catch (error) {
    console.error('Error getting invoices by booking ID:', error);
    throw error;
  }
};
exports.filterInvoices = async (body) => {
  const { status, agency, therapistId, patientId } = body;
  let where = {}
  if (therapistId) {
    where.therapistId = therapistId
  }
  if (patientId) {
    where.patientId = patientId
  }
  const data = await Invoice.findAll({
    include: [
      {
        model: Booking,
        where: where,
        include: [
          {
            model: Patient,
            where: agency &&{
              agency: agency
            }
          },
          {
            model: Therapist
          }
        ]
      }
    ],
    where: status && {
      status: status
    },
    order: [['createdAt', 'DESC']],
  });

  return data;
};

exports.filterEmailInvoices = async (body) => {
  const { status, agency, therapistId, patientId } = body;
  let where = {}
  if (therapistId) {
    where.therapistId = therapistId
  }
  if (patientId) {
    where.patientId = patientId
  }
  const data = await Invoice.findAll({
    include: [
      {
        model: Booking,
        where: where,
        include: [
          {
            model: Patient,
            where: agency &&{
              agency: agency
            }
          },
          {
            model: Therapist
          }
        ]
      }
    ],
    where: status && {
      status: status
    },
    order: [['createdAt', 'DESC']],
  });

  return data;
};

