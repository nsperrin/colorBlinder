/**
 * Created by Nick on 10/9/2016.
 */
var mysql = require('mysql');

db = {};

db.query = function(queryString, params, failure, success){
    var conn = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'P@$$(0d3',
        database : 'color_blinder'
    });

    conn.connect(function(err){
        if(err) failure("There was an error on our end. We're working on it.");
        else conn.query(queryString, params, function (err, rows){
            if(err) failure("There was an error on our end. We're working on it.");
            else conn.end(function (err){
                if(err) failure("There was an error on our end. We're working on it.");
                else{
                    success(rows);
                }
            });
        });
    });
};

db.getExistingUsersWithThisEmail = function(data, failure, success){
    this.query('SELECT * FROM user WHERE email like ?',[data.email],failure,success);
};

db.createUser = function(data,failure,success){
    this.query('INSERT INTO user (email,password) VALUES (?,?)',[data.email,data.password],failure,success);
};

db.authenticate = function(data,failure,success){
    this.query('SELECT * FROM USER WHERE email like ?',[data.email],failure,success);
};

module.exports = db;