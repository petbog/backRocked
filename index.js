import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

//импорт express
const app = express()
app.use(express.json());
app.use(cors());
config()
app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
//обращение к серверу


app.get("/",(req,res)=>{
    res.send('работает')
})

app.post('/send-email', (req, res) => {
    console.log(req)
    const { name, email, message } = req.body;
  
    // Создание объекта для отправки почты
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'testrocked@gmail.com',
        pass: 'Qwer_1234'
      }
    });
  
    // Настройка содержимого письма
    const mailOptions = {
      from: 'testrocked@gmail.com',
      to: 'bogdan_emdetei_petrov@mail.ru',
      subject: 'New Message from React App',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Отправка письма
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send('Error');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Success');
      }
    });
  });
  




//запуск сервера
const PORT = 4444;
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log("Server ok")
})