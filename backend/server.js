const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'divyaneela75@gmail.com', // Replace
        pass: 'iazv kyqh usrb rqie'     // Use App Password, NOT real password
      }
    });

    let mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: 'divyaneela75@gmail.com', // Replace with owner's email
      subject: 'New Inquiry from Elkar Website',
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Email failed to send' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
