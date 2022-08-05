const adminProductsController = {
    adminHome: (req,res) => {

        var produtos = [
            {   
                id: 1,
                nome: "Camiseta X",
                categoria: "camiseta",
                ultimaAlteracao: "05/08/2022",
                status: "Ativo",
            },
            {   
                id: 2,
                nome: "Camiseta Y",
                categoria: "camiseta",
                ultimaAlteracao: "09/07/2022",
                status: "Ativo",
            },
            {   
                id: 3,
                nome: "Camiseta Z",
                categoria: "camiseta",
                ultimaAlteracao: "15/08/2021",
                status: "Inativo",
            },
            {   
                id: 4,
                nome: "Moletom Z",
                categoria: "moletom",
                ultimaAlteracao: "15/08/2021",
                status: "Inativo",
            }
        ] 

        return res.render("adminProdutos", { produtos });
    },
    adminCriar: (req,res) => {
        return res.render("adminCriar", { title:"Criar Produto", cssCaminho: "/stylesheets/adminCriar.css" })
    }
    }
    
    module.exports = adminProductsController;