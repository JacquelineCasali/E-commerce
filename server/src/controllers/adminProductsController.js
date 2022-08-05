var produtos = [
    {   
        id: 1,
        nome: "Camiseta X",
        tamanho: "G",
        categoria: "camiseta",
        preco: "49,99",
        descricao: "Descrição do produto",
        status: "Ativo",
        ultimaAlteracao: "05/08/2022",
    },
    {   
        id: 2,
        nome: "Camiseta Y",
        tamanho: "M",
        categoria: "camiseta",
        preco: "39,99",
        descricao: "Descrição do produto",
        status: "Ativo",
        ultimaAlteracao: "09/07/2022",
    },
    {   
        id: 3,
        nome: "Camiseta Z",
        tamanho: "G",
        categoria: "camiseta",
        preco: "59,99",
        descricao: "Descrição do produto", 
        status: "Inativo",
        ultimaAlteracao: "15/08/2021",
    },
    {   
        id: 4,
        nome: "Moletom Z",
        tamanho: "P",
        categoria: "moletom",
        preco: "89,99",
        descricao: "Descrição do produto",
        status: "Inativo",
        ultimaAlteracao: "15/08/2021",
    }
] 

const adminProductsController = {
    adminHome: (req,res) => {
        return res.render("adminProdutos", { produtos });
    },
    adminCriar: (req,res) => {
        return res.render("adminCriar", { title:"Criar Produto", cssCaminho: "/stylesheets/adminCriar.css" })
    },
    }
    
    module.exports = adminProductsController;