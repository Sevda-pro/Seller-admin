const express=require("express")
const path=require("path")
const router=express.Router();
const controller=require(path.join(__dirname+'/customer.controller'));

router.route("/customer").post( controller.createCustomer);
router.route("/customersdata").get( controller.findAllCustomer);
router.route("/customers/delete/:id").delete( controller.deleteCustomer);
module.exports=router;
