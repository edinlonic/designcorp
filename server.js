var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();
var router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended:true});
app.use(bodyParser.json());
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'edinlonic94@gmail.com',
    pass: 'edin7524873'
  }
});
var mailOptions = {
  from: 'edinlonic94@gmail.com',
  to: 'edin.lonic@edu.fit.ba',
  subject: 'Sending Email using Node.js',
  text: 'test'
};

app.get('/api', function(req, res){
    res.send('working');
});

app.post('/api/sendmail', urlencodedParser, function (req, res) {
    var mailOptions = {};
    if (req.body != undefined) {
        mailOptions = {
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.content
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
});
var port = process.env.PORT || 8080;
app.listen(port);
console.log('API is running on port ' + port);


// { "from" :"edin.lonic@edu.fit.ba", "to" :"edin.lonic@edu.fit.ba, lonic__@hotmail.com, ognjen.medan@edu.fit.ba, naida.frlj@edu.fit.ba" , "subject" :"test from json", "content" :"Hello from the other sideee" }