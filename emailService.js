const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "af381597da135d",
        pass: "f885ebac5b8147"
      },
});

exports.sendApprovalEmail = async (email, companyName) => {
    const mailOptions = {
      from: "bar@example.com",    
      to: email, // List of receivers
      subject: 'Your Company Has Been Approved!', // Subject line
      text: `Dear ${companyName},
  
  Congratulations! We are pleased to inform you that your company has been successfully approved to join our platform.
  
  You can now start exploring our services, manage your account, and take full advantage of all the features we offer to help grow your business.
  
  If you have any questions or need assistance, feel free to reach out to our support team.
  
  Thank you for choosing our platform. We look forward to supporting your business journey.
  
  Best regards,
  The Your Business Team`, // Plain text body
      html: `
      <p>Dear ${companyName},</p>
      <p>Congratulations! We are pleased to inform you that your company has been successfully approved to join our platform.</p>
      <p>You can now start exploring our services, manage your account, and take full advantage of all the features we offer to help grow your business.</p>
      <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
      <br>
      <p>Thank you for choosing our platform. We look forward to supporting your business journey.</p>
      <br>
      <p>Best regards,</p>
      <p>The Your Business Team</p>
    `, // HTML body
    };
  
    return transporter.sendMail(mailOptions);
  };
  
