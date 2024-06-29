import nodeMailer from "nodemailer";
import { smtpHost, smtpMail, smtpPassword, smtpPort, smtpService } from "../config/config.js";

 const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    service: smtpService,
    auth: {
      user: smtpMail,
      pass: smtpPassword,
    },
  });

  const mailOptions = {
    from: smtpMail,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;