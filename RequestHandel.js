const url = require("url");
const fs = require("fs");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const { Console } = require("console");

module.exports = {
  handleRequest: function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.setHeader("Acces-Control-Allow-Origin", "*");
    var path = url.parse(req.url).pathname;
    switch (path) {
      case "/api/proveedores":
        res.writeHead(200);
        res.write(rp.ToString());
        res.end();
        break;

      case "/api/clientes":
        res.writeHead(200);
        res.write("cliente");
        res.end();
        break;
      default:
        res.writeHead(404);
        res.write("Route not defined");
        res.end();
    }
  },
};

rp = new Promise((resolve, reject) => {
  ls = new XMLHttpRequest();
  ls.open(
    "GET",
    "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json",
    true
  );

  ls.onload = () => {
    if (ls.status == 200) {
      var respuesta = ls.response;
      console.log("asdsad");
      resolve("respuesta");
    } else {
      reject();
      console.log("asdsad");
    }
  };
  ls.send();
});

rp.then(function () {
  console.log("Si");
  return "sadas";
}).catch(function () {
  console.log("no");
});
rc = new Promise((resolve, reject) => {
  ls = new XMLHttpRequest();
  ls.open(
    "GET",
    "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json",
    true
  );

  ls.onload = () => {
    if (ls.status == 200) {
      var respuesta = ls.response;
      console.log("asdsad");
      resolve("respuesta");
    } else {
      reject();
      console.log("asdsad");
    }
  };
  ls.send();
});

rc.then(function () {
  console.log("Si");
  return "sadas";
}).catch(function () {
  console.log("no");
});
