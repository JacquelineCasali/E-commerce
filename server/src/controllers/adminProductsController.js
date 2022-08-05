const adminProductsController = {
    adminHome:(req,res)=>{

        var produtos = [
            {
                nome: "Camiseta X",
                ultimaAlteracao: "05/08/2022",
                status: "Ativo",
            },
            {
                nome: "Camiseta Y",
                ultimaAlteracao: "09/07/2022",
                status: "Ativo",
            },
            {
                nome: "Camiseta Z",
                ultimaAlteracao: "15/08/2021",
                status: "Inativo",
            }
        ] 

        return res.render("adminProdutos", { produtos });
    },
    }
    
    module.exports = adminProductsController;