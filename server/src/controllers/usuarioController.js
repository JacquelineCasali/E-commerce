var users=require("../data/users.json");
users=users.usuarios;   

const userController = {
  index: (req, res) => {
    return res.render("usuarios", { title: "Lista de usuários", users});
  },


  show: (req, res) => {
    const { id } = req.params;
    const userResult = users.find((user) => user.id === parseInt(id));
    if (!userResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Nenhum usuário encontrado",
      });
    }
    return res.render("usuario", { title: "Usuário", user: userResult });
  },
}
//   create: (req, res) => {
//     return res.render("user-create", { title: "Criar usuário" });
//   },
//   store: (req, res) => {
//     const { nome, sobrenome, idade,email, avatar } = req.body;

//     if (!nome || !sobrenome ||  !idade || !email || !avatar) {
//       return res.render("user-create", {
//         title: "Criar usuário",
//         error: { message: "Preencha todos os campo" },
//       });
//     }

//     const newUser={
//       id: users.length + 1,
//       nome, 
//       sobrenome,
//       idade, 
//       email, 
//       avatar:"https://i.pravatar.cc/300?img=${avatar}",
//   }
//     users.push(newUser)
     
      
//     return res.render("success", {
//       title: "Usuário criado",
//       message: "Usuário criado com sucesso",
//     });
//   },
//   // editar
//   edit: (req, res) => {
//     const { id } = req.params;
//     const userResult = users.find((user) => user.id === parseInt(id));
//     if (!userResult) {
//       return res.render("error", {
//         title: "Ops!",
//         message: "Nenhum usuário encontrado",
//       });
//     }
//     return res.render("user-edit", {
//       title: "Editar usuário",
//       user: userResult,
//     });
//   },
//   // atualizar
//   update: (req, res) => {
//     const { id } = req.params;
//     const { nome, sobrenome, email, idade, avatar } = req.body;
//     const userResult = users.find((user) => user.id === parseInt(id));
//     if (!userResult) {
//       return res.render("error", {
//         title: "Ops!",
//         message: "Nenhum usuário encontrado",
//       });
//     }
//     const newUser = userResult;

//     if (nome) newUser.nome = nome;
//     if (sobrenome) newUser.sobrenome = sobrenome;
//     if (email) newUser.email = email;
//     if (idade) newUser.idade = idade;
//     if (avatar) newUser.avatar = "https://i.pravatar.cc/300?img=" + avatar;
//     return res.render("success", {
//       title: "Usuário atualizado",
//       message: `Usuário ${newUser.nome} atualizado com sucesso`,
//     });
//   },
//   delete: (req, res) => {
//     const { id } = req.params;
//     const userResult = users.find((user) => user.id === parseInt(id));
//     if (!userResult) {
//       return res.render("error", {
//         title: "Ops!",
//         message: "Nenhum usuário encontrado",
//       });
//     }
//     return res.render("user-delete", {
//       title: "Deletar usuário",
//       user: userResult,
//     });
//   },
//   destroy: (req, res) => {
//     const { id } = req.params;
//     const result = users.findIndex((user) => user.id === parseInt(id));
//     if (result === -1) {
//       return res
//         .status(400)
//         .json({ message: "Nenhum usuário encontrado", error: true });
//     }
//     users.splice(result, 1);
//     return res.render("success", {
//       title: "Usuário deletado",
//       message: `Usuário deletado com sucesso`,
//     });
//   },
// };

module.exports = userController;
