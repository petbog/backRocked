import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://rocked.vercel.app/*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get("/", (req, res) => { res.send('работает'); });

app.post('/send-email', (req, res) => {

  const { name, email, phone } = req.body;

  console.log(name, email, phone)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.KEY
    },
  });

  const mailOptions = {
    from: 'testrendermail@gmail.com',
    to: 'rbru-metrika@yandex.ru',
    subject: 'письмо отправленнное через node.js',
    text: ` ваше имя ${name}, ваш email ${email}, ваш номер телефона ${phone}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(400).json({
        message: 'Ошибка при отправке письма'
      });
    } else {
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Сообщение отправлено на почту' });
    }
  });
});

const PORT = 4444;
app.listen(PORT, (err) => {
  if (err) { return console.log(err) }

  console.log("Server ok")
});
