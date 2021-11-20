var http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write( "hello world ! : " +  req.url);
  res.end();
}).listen(8080);

/*
var url = require('url');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);*/
/*
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  /*
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

 

  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
 */

/*
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
*/

/*
var http = require("http");
var url = require("url");
var fs = require("fs");

var users = [
  {
    username: "mohamed",
    age: 19,
  },
  {
    username: "asma",
    age: 25,
  },
  {
    username: "abdelhak",
    age: 39,
  },
];

var products = [
  {
    name: "DELL LATITUDE",
    price: 170000,
  },
  {
    name: "MACBOOK PRO",
    price: 250000,
  },
  {
    name: "HP LITEBOOK",
    price: 145000,
  },
];

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    
    console.log("LOG: " + req.url);

    if (q.pathname === "/api/users") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(users));
      return res.end();
    }

    if (q.pathname === "/api/products") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(products));
      return res.end();
    }

    if(q.pathname === "/api/add_user"){
      console.log("q.username : "  + q.query.username);
      users.push({
        username: q.query.username,
        age: q.query.age
      });
    }

    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);*/
