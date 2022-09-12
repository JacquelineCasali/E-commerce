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
  
  // show: async (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     // const users = await db.query(`SELECT * FROM users WHERE id = ${id}`, {
  //     //   type: Sequelize.QueryTypes.SELECT,
  //     // });
  //     const users = await db.query(`SELECT * FROM users WHERE id = :id`, {
  //       replacements: {
  //         id,
  //       },
  //       type: Sequelize.QueryTypes.SELECT,
  //     });
  //     console.log(users);
  //     if (users.length === 0) {
  //       //Faz o código parar nessa linha
  //       //E cai no catch
  //       throw Error("USER_NOT_FOUND");
  //     }
  //     res.status(200).json({ data: users[0] });
  //   } catch (error) {
  //     console.log(error);
  //     if (error.message === "USER_NOT_FOUND") {
  //       res.status(400).json({ message: "Usuário não encontrado" });
  //     } else {
  //       res.status(400).json({ message: "Erro ao encontrar usuário" });
  //     }
  //   }
  //   // Voltamos as 21h
  // },
  // store: async (req, res) => {
  //   const { name, email, birthdate } = req.body;
  //   try {
  //     const users = await db.query(
  //       "INSERT INTO users (name, email, birthdate) VALUES (:name, :email,:birthdate)",
  //       {
  //         replacements: {
  //           name,
  //           email,
  //           birthdate,
  //         },
  //         type: Sequelize.QueryTypes.INSERT,
  //       }
  //     );
  //     res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).json({ message: "Erro ao criar usuário" });
  //   }
  // },
  // update: async (req, res) => {
  //   const { name, email, birthdate } = req.body;
  //   const { id } = req.params;
  //   try {
  //     if (!name && !email && !birthdate) {
  //       throw Error("Nenhum dado para atualizar");
  //     }
  //     let query = "UPDATE users SET ";
  //     if (name) query += "name = :name";
  //     if (birthdate) {
  //       if (name) query += ", ";
  //       query += "birthdate = :birthdate";
  //     }
  //     if (email) {
  //       if (name || birthdate) query += ", ";
  //       query += "email = :email";
  //     }
  //     query += " WHERE id = :id";
  //     const users = await db.query(query, {
  //       replacements: {
  //         name,
  //         email,
  //         birthdate,
  //         id,
  //       },
  //       type: Sequelize.QueryTypes.UPDATE,
  //     });

  //     console.log(users);
  //     res.status(200).json({ message: "Usuário atualizado com sucesso" });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).json({ message: "Erro ao atualizar usuário" });
  //   }
  // },
  // destroy: async (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     const users = await db.query("DELETE FROM users WHERE id = :id", {
  //       replacements: { id },
  //       type: Sequelize.QueryTypes.DELETE,
  //     });
  //     console.log(users);
  //     res.status(200).json({ message: "Usuário deletado com sucesso!" });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).json({ message: "Erro ao deletar usuário" });
  //   }
  // },
};
module.exports = departmentController;
