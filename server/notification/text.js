'use strict';

var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

// Load the twilio module
//var twilio = require('twilio');

// Twilio Credentials 
//test
//var accountSid = 'ACec71f5c2850205c572dcd37423158911'; 
//var authToken = '9ca065352b3d80dc63f33cef142eb8ba'; 
/*real
var accountSid = 'AC1bc70c045ed60b51c0c761c2c9eb1107'; 
var authToken = '2d75ffda9813b3f7b25f513f32bb3880'; */
 
//require the Twilio module and create a REST client 
//var client = require('twilio')(accountSid, authToken); 
var exports = module.exports;
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// sendText: Send text message to employees when visitorList is checked in.
exports.sendText = function(firstname,lastname) {
var accountSid = 'AC1bc70c045ed60b51c0c761c2c9eb1107'; 
var authToken = '2d75ffda9813b3f7b25f513f32bb3880'; 
  var client = require('twilio')(accountSid, authToken); 
  console.log("first name is" + firstname +" last name is" +lastname);
    return client.messages.create({ 
    to: "+17142277550", 
          //test number
   // from: "+15005550006", 
          from: "+19495580039",    
    body: 'Your visitor ' + firstname + ' ' + lastname + ' is ready.'  
}).then(function(data) { 
    console.log("text sent"); 
}).catch(function(err){
  console.error('could not send text');
  console.error(err);
});
  /*if(employees === null || (employees.length <= 0)) {
    if(done) return done();
  }

  var len = employees.length;
  var callback = function(i) {
    return function(error, message) { 
      if(error) {
        console.log(error);
        console.log("Error occurred sending text");
        //res.json({message : "Error occurred sending text"});
      } else {
        //res.json({message: "Text was sent."});
        console.log("Text was sent.");
      }
      if(done && len-1 == i) done();
    };
  };*/

  // iterate through all employees 
 /* for (var index = 0; index < employees.length; index++) {
    // create text message object that will be sent
    client.messages.create({  
      //to: employees[index].phone_number,
      to: "+17142277550",
      //from: "+19495580039",    
      //test number
      from: "+15005550006",
      body:'Your visitorList ' + patientName + ' is ready.'
    }, callback(index));
  }*/
};
