exports.sendMail = (req, res) => {
const path = require('path');

  const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nudisod@gmail.com",
      pass: "matic1111",
    },
  });

  message = {
    from: "nudisod@gmail.com",
    to: "crglo1106@gmail.com",
    subject: req.body.subject || "",
    text: req.body.message,
  };

  if (req.body.message !== "") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
    res.redirect("/");
  }
};
