const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config()
const cors = require('cors')
var mongoose = require("mongoose");



//----------------- Connection mongodb
// mongoose.connect(
//     "mongodb+srv://trungnguyen010102hl:nguyenvip12@cluster0.siy1luu.mongodb.net/Crud",
//     { useNewUrlParser: true },
//     function check(err) {
//         if (err) console.log(err);
//         else console.log("Connection");
//     }
// );
//---------------  cho phép đọc yc http post put và định dạng dữ liệu đó  thành đối tượng js
app.use(express.json());
//---------------- Cho phép chia sẽ tài nguyên
app.use(cors())
//---------------- router
// const routerUser = require('./routers/userRouter');
// app.use('/api/user', routerUser)

app.get("/", function (req, res) {
    res.send("Trung Nguyên");

});

app.listen(process.env.PORT, function check(err) {
    if (err) console.log("error server");
    console.log("Start server");

});
