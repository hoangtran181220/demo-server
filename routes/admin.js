const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const AdminController = require("../apicontrollers/admin");

const isAuthAdmin=require('../middleware/is-auth-admin')
const isAuth=require('../middleware/is-auth')
router.use(cors());



router.get("/adminTin", AdminController.getAdmin);

//Manager User
router.get("/adminTin/managerusers", AdminController.getManagerUsers);
router.get("/adminTin/managerusers/update/:_id", AdminController.getUpdate);
router.post("/adminTin/managerusers/update", AdminController.postUpdateUser);
router.get("/adminTin/managerusers/delete/:_id", AdminController.getRemoveUser);

//Manager Order
router.get("/adminTin/managerorder", AdminController.getListOrder);
router.post("/adminTin/managerorder", AdminController.postlistOrder);


//Manager iPhone
router.get("/adminTin/managerproducts", AdminController.getListNewProduct);

//Manager iPhone
router.get("/adminTin/manageriphone", AdminController.getListiPhone);

//Manager Macbook
router.get("/adminTin/managermacbook", AdminController.getListMacbook);

//Manager Apple Watch

router.get("/adminTin/managerapplewatch", AdminController.getListAppleWatch);

//Manager Airpod
router.get("/adminTin/managerairpod", AdminController.getListAirpod);

//Manager NewProduct
router.get("/adminTin/managernewproduct", AdminController.getListNewProduct);
router.get(
  "/adminTin/managerproducts/delete/:_id",
  AdminController.getRemoveNewProduct
);
router.get(
  "/adminTin/managerproducts/update/:_id",
  AdminController.getUpdateNewProduct
);
router.post(
  "/adminTin/managerproducts/update",
  AdminController.postUpdateNewProduct
);

module.exports = router;
