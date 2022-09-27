const adminProductsValidator = {
    storeValidator: (req, res, next) => {
        const { name, size, department, price, description, inventory, rating, status } = req.body;

        let filename;
        if (req.file) {
          filename = req.file.filename;
        }

        if (!name || !size || !department || !price || !description || !inventory || !rating || !status || filename === undefined ) {
            return res.render("adminCriar", { 
              title: "Criar Produto",
              cssCaminho: "/stylesheets/adminCriar.css",
              error: { message: "Preencha todos os campos!" },
              text: {
                name,
                size,
                department,
                price,
                description,
                inventory,
                rating,
                status
              }
            });
          }
        next();
    }
}

module.exports = adminProductsValidator;