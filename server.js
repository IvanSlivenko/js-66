// console.log('Привіт з Node.js 111');
// const a = 5;
// console.log(a);

const joi = require('joi');
const shortid = require('shortid');
console.log("Згенеровано випадковий пароль :",shortid.generate());

const express = require('express');
const app = express();

app.use('*', (req, res) => {
    console.log('Був запрос від браузера');
    // res.send(`<h1> Це тобі HTML у відповідь </h1> `);
    res.send(`<h2> Це текст з Web -serwer </h2> `);
});
const listener = app.listen(4444, () => {
    console.log(`Веб сервер запущено на порту ${listener.address().port}`);
});


// const passwordSchema = joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate('555$'));