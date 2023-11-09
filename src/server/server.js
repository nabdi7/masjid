const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, phone, email, message } = req.body;

  const msg = {
    to: "info@qualitydesigns.site", 
    from: email,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
  };

  sgMail.send(msg)
    .then(() => {
      res.json({ success: true, message: "Email sent successfully" });
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "Email sending failed" });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
