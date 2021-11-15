const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const mongoClient = require("mongodb").MongoClient;
const UserModel = require("../models/user");
const ProductModel = require("../models/newproduct");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
 
  app.get("/", function(req, res, next) {
    req.session.isManager = false;

    ProductModel.find()
      .then(products => {
        var dataiPhone = products.filter(i => i.category == "Hoa Kho");
        var dataMacbook = products.filter(i => i.category == "Hoa Tuoi");
        var dataAppleWatch = products.filter(i => i.category == "Hoa Ngoai");
        var dataAirpods = products.filter(i => i.category == "Gio Hoa Qua");
        res.render("homepage", {
          listproducts: dataiPhone,
          listmacbooks: dataMacbook,
          listapplewatch: dataAppleWatch,
          listairpod: dataAirpods
        });
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/contact", function(req, res, next) {
    res.render("general/contact", {
    });
  }),
    app.get("/about", function(req, res, next) {
      res.render("general/about", {
      });
    });

  app.get("/blog", function(req, res, next) {
    res.render("general/blog", {
    });
  });

  //iPhone
  app.get("/hoakho", function(req, res, next) {
      req.session.isManager = false;
      ProductModel.find()
        .then(products => {
          var data = products.filter(i => i.category == "Hoa Kho");
          res.render("product/page-product", {
              kind: 'Hoa Kho',
              listproducts: data
            });
        })
        .catch(err => {
          console.log(err);
        });
  });

  //Macbook
  app.get("/hoatuoi", function(req, res, next) {
    req.session.isManager = false;
    ProductModel.find()
      .then(products => {
        var data = products.filter(i => i.category == "Hoa Tuoi");
        res.render("product/page-product", {
          kind: 'Hoa Tuoi',
          listproducts: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  });

  //Apple Watch
  app.get("/hoangoai", function(req, res, next) {
    req.session.isManager = false;
    ProductModel.find()
      .then(products => {
        var data = products.filter(i => i.category == "Hoa Ngoai");
        res.render("product/page-product", {
          kind: 'Hoa Ngoai',
          listproducts: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  });

  //airpods
  app.get("/hoaquas", function(req, res, next) {
    req.session.isManager = false;
    ProductModel.find()
      .then(products => {
        var data = products.filter(i => i.category == "Gio Hoa Qua");
        res.render("product/page-product", {
          kind: 'Gio Hoa Qua',
          listproducts: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  });

   //airpods
   app.get("/hoaqua", function(req, res, next) {
    req.session.isManager = false;
    ProductModel.find()
      .then(products => {
        var data = products.filter(i => i.category == "Gio Hoa Qua");
        res.render("product/page-product", {
          kind: 'Gio Hoa Qua',
          listproducts: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  });


  //allproduct
  app.get("/allproducts", function(req, res, next) {
    req.session.isManager = false;
    var count = 0;
    ProductModel.find()
      .then(products => {
        res.render("product/page-product", {
          kind: 'allproducts',
          listproducts: products
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};



