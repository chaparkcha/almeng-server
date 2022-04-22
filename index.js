// 웹 서버 라이브러리
import express from "express";

var app = express()

//환경변수에서 port를 가져온다. 환경변수가 없을시 3000포트를 지정한다.
var port = app.listen(process.env.PORT || 3000);

// API 정의 API는 REST Full 규격을 따라가도록 개발하자
app.get('/', function(req, res) {
    res.send("<h1>Express server Start</h1>")
})

// express 서버 실행
app.listen(port, function() {
    console.log('start! express server');
})