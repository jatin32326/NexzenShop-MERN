
const VerificationEmail = (username, otp) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>OTP Verification</title>
    </head>
  
    <body style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
  
      <div style="
        max-width:500px;
        margin:auto;
        background:white;
        padding:30px;
        border-radius:10px;
      ">
  
        <h2 style="color:#333;">Verify Your Account</h2>
  
        <p>Hello <b>${username}</b>,</p>
  
        <p>Your OTP verification code is:</p>
  
        <div style="
          font-size:32px;
          font-weight:bold;
          letter-spacing:5px;
          background:#f1f1f1;
          padding:15px;
          text-align:center;
          border-radius:8px;
          margin:20px 0;
        ">
          ${otp}
        </div>
  
        <p>This OTP will expire in <b>5 minutes</b>.</p>
  
        <p>Please do not share this code with anyone.</p>
  
        <br />
  
        <p>Thanks,<br />Team NexZenshop</p>
  
        <!-- Footer -->
        <hr style="
          border:none;
          border-top:1px solid #e5e5e5;
          margin:30px 0 15px;
        ">
  
        <p style="
          text-align:center;
          color:#888;
          font-size:13px;
          margin:0;
        ">
          &copy; 2026 Nexzenshop. All Rights Reserved.
        </p>
  
      </div>
  
    </body>
    </html>
    `;
};
  
  export default VerificationEmail;
  