const adminProductsValidator = {
    storeValidator: (req, res, next) => {
        const { nome, tamanho, categoria, preco, descricao, status } = req.body;

        const date = Date.now();
        const atualDate = new Date (date);
        const alteracao = atualDate.toLocaleDateString();

        let filename;
        if (req.file) {
          filename = req.file.filename;
        }

        if (!nome || !tamanho || !categoria || !preco || !descricao || !status || filename === undefined ) {
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
                ultimaAlteracao: alteracao,
              }
            });
          }
        next();
    }
}

module.exports = adminProductsValidator;