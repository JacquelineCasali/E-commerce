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
      const { nome, tamanho, categoria, preco, descricao, status } = "";
        return res.render("adminCriar", { title:"Criar Produto", cssCaminho: "/stylesheets/adminCriar.css", text: {
          nome: nome,
          tamanho: tamanho,
          categoria: categoria,
          preco: preco,
          descricao: descricao,
          status: status,
        } })
    },
    adminStore: (req, res) => {
        const { nome, tamanho, categoria, preco, descricao, status } = req.body;

        if (!nome || !tamanho || !categoria || !preco || !descricao || !status ) {
          return res.render("adminCriar", { 
            title: "Criar Produto",
            cssCaminho: "/stylesheets/adminCriar.css",
            error: { message: "Preencha todos os campos!" },
            text: {
              nome: nome,
              tamanho: tamanho,
              categoria: categoria,
              preco: preco,
              descricao: descricao,
              status: status,
            }
          });
        }

        produtos.push({
            id: produtos.length + 1,
            nome,
            tamanho,
            categoria,
            preco,
            descricao,
            status,
            ultimaAlteracao: "10/10/2010",
        });
        return res.status(201).json({ message: "Usuário criado com sucesso!" });
    },
    adminDestroy: (req, res) => {
        const { id } = req.params;
        const result = produtos.findIndex(
          (produto) =>
            produto.id === parseInt(id)
        );
        if (result === -1) {
          return res.status(400).json({ message: "Nenhum usuário encontrado" });
        }
        produtos.splice(result, 1);
        return res.status(200).json({ message: "Usuário deletado com sucesso" });
      },
    adminDelete: (req, res) => {
        const { id } = req.params;
        const productResult = produtos.find(
          (produto) => produto.id === parseInt(id)
        );
        if (!productResult) {
          return res.status(400).json({ message: "Nenhum usuário encontrado" });
        }
        return res.render("adminDeletar", { title:"Deletar Produto", cssCaminho: "/stylesheets/adminDeletar.css", produto: productResult })
      },
    }
    
    module.exports = adminProductsController;