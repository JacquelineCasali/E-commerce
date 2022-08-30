var produto = [
    {
        "id":"1",
        "nome":"CAMISETA OVERSIZED APPROVE SKULL AND BONES BIG PRETA",
        "imagem":"../images/camiseta-detalhe.1png.jpg",
        "preco":"R$ 219,99",
        "detalhe":"A peça em modelagem oversized com gola careca e manga curta conta com uma estampa de caveira que contrasta com a cor da camiseta. A frase com tipografia gótica também traz toda a essência deste estilo para o item.",
        "slug":"a"
    }]

const produtoController={
    index:(req,res)=>{
       res.render('produtoDetalhe',{produto})

        }
    }

module.exports =produtoController