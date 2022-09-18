const db = require("../config/sequelize");
const Department = require("../models/Department");
const departmentController = {
  index: async (req, res) => {
    const { search } = req.query;
    try {

      const department = await Department.findAll();
      console.log(department);
      res
        .status(200)
        .json({ data: department, message: "Busca realizada com sucesso" });
    } catch (error) {
      console.log(error); 
      res.status(400).json({ message: "Erro na busca" });
    }
  },
};
module.exports = departmentController;
