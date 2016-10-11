/**
 * Created by Nick on 10/9/2016.
 */
var mysql = require('mysql');

module.exports = {
    checkForExistingEmail : function(data, failure, success){
        failure();
    },
    createUser: function(data){
        var conn = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'P@$$(0d3',
            database : 'color_blinder'
        });
        conn.connect(function(err){
            if(err){                                c
                console.log(4);
            }else{
                conn.query('INSERT INTO user (email,password) VALUES (?,?)',[data.email,data.password],function(err){
                    if(err){
                        console.log(err);
                        console.log(3);
                    }else{
                        conn.end(function(err){
                            if(err){
                                console.log(2);
                            }else{
                                console.log(1);
                            }
                        });
                    }
                });
            }
        });
    }
};