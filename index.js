// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';

// const app = express();

// // Настройки CORS
// app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://rocked.vercel.app');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send('работает');
// });
// app.post('/send-email', (req, res) => {
//   console.log(req.body);

//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'testrocked@gmail.com',
//       pass: 'Qwer_1234'
//     }
//   });

//   const mailOptions = {
//     from: 'testrocked@gmail.com',
//     to: 'bogdan_emdetei_petrov@mail.ru',
//     subject: 'New Message from React App',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Success');
//     }
//   });
// });

// const PORT = 4444;
// app.listen(PORT, (err) => {
//   if (err) {
//     return console.log(err)
//   }

//   console.log("Server ok")
// });
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://rocked.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());

app.get("/", (req, res) => { res.send('работает'); });

app.post('/send-email', (req, res) => {
  console.log(req.body);
  
  const { name, email, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: false,
    auth: {
      user: 'testreckord@mail.ru',
      pass: 'etrovtriper'
    }
  });
  
  const mailOptions = {
    from: 'testreckord@mail.ru',
    to: 'bogdan_emdetei_petrov@mail.ru',
    subject: 'New Message from React App',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success');
    }
  });
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://rocked.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const PORT = 4444; app.listen(PORT, (err) => {
  if (err) { return console.log(err) }

  console.log("Server ok")
});
// testreckord
// etrovtriper