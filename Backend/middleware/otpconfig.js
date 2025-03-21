import nodemailer from 'nodemailer';

// Create transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred email service
  auth: {
    user: "namanadlakha9311@gmail.com", // your email
    pass: "bzya ksxf ansn zorx",  // your app-specific password
  }
});

// Email template function
const createOTPEmailTemplate = (otp) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Email Verification</h2>
      <p>Your OTP for signup is:</p>
      <h1 style="color: #4A90E2; font-size: 32px; letter-spacing: 2px;">${otp}</h1>
      <p>This OTP will expire in 10 minutes.</p>
      <p>If you didn't request this verification, please ignore this email.</p>
    </div>
  `;
};

// Send email function
export const sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: "namanadlakha9311@gmail.com",
    to: email,
    subject: 'Verify Your Email - OTP',
    html: createOTPEmailTemplate(otp)
  };

  return transporter.sendMail(mailOptions);
};

