const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../config/db');
var SQL = require('./messageSql');
// 使用db.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );

var responseJSON = function (res, result) {
    if(typeof result === 'undefined') { 
      res.end(JSON.stringify({code:'-200', msg: '留言失败'})); 
    }else {
      res.end(JSON.stringify(result));
    }
};

/* GET api listing. */
router.post('/leaveMsg', (req, res) => {
    pool.getConnection((err, connection) => {
      let param = req.body;
      connection.query(SQL.insert, [param.name, param.msg], (err, result)=>{
        if(result) {
          result = {
            code: 200,
            msg: '留言成功！'
          };
        }else {
          result = {
            code: -200,
            msg: err.sqlMessage
          };
        }
        responseJSON(res, result);
        connection.release();
      });
    });
});
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;