const db = require("../config/sequelize");
const Department  = require ("../models/Department");

const preload = async(req,res,next)=>{
    res.locals.departments =[]
    try {
        const department = await Department.findAll({});
        res.locals.departments = department || []
      } catch (error) {
        console.log(error);
      }
    next()
}

module.exports=preload