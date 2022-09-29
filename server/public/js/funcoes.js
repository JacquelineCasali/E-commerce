function adicionar(novoItem) {
    const carrinho = localStorage.getItem("carrinho")
      ? JSON.parse(localStorage.getItem("carrinho"))
      : [];
  
  
    console.log(carrinho.find((p) => p?.id == novoItem.id));
  
    if (carrinho.find((p) => p?.id == novoItem.id)) {
      novoItem.quantity += carrinho.find((p) => p?.id === novoItem.id).quantity;
    }
    const copia = [novoItem, ...carrinho.filter((p) => p?.id !== novoItem.id)];
  
    localStorage.setItem("carrinho", JSON.stringify(copia));
    contadorHeader()
  }
  
  
  
  
  function remover(itemCarrinho) {
    //Montar o carrinho a partir do cookie ou do localStorage
    const carrinho = localStorage.getItem("carrinho")
      ? JSON.parse(localStorage.getItem("carrinho"))
      : [];
  
    // Alterar a quantity
    const produtoNoCarrinho = carrinho.find((p) => p.id === itemCarrinho.id);
    if (produtoNoCarrinho) {
      //Alterar a quantity1
      produtoNoCarrinho.quantity = produtoNoCarrinho.quantity - 1;
      //const copia =  {...produtoNoCarrinho}
    }
    //Remover o produto do array carrinho
    const copiaCarrinho = carrinho.filter((produto) => produto.quantity >= 1);
  
    //Atualizar o cookie ou do localStorage com o novo carrinho
    localStorage.setItem("carrinho", JSON.stringify(copiaCarrinho));
  
    console.log(JSON.stringify(carrinho));
    exibirCarrinho();
  }
  
  function incrementar(itemCarrinho) {
    //Montar o carrinho a partir do cookie ou do localStorage
    const carrinho = localStorage.getItem("carrinho")
      ? JSON.parse(localStorage.getItem("carrinho"))
      : [];
  
    // Alterar a quantity
    const produtoNoCarrinho = carrinho.find((p) => p.id === itemCarrinho.id);
    if (produtoNoCarrinho) {
      //Alterar a quantity1
      produtoNoCarrinho.quantity = produtoNoCarrinho.quantity + 1;
      //const copia =  {...produtoNoCarrinho}
    }
    //Remover o produto do array carrinho
    const copiaCarrinho = carrinho.filter((produto) => produto.quantity >= 1);
  
    //Atualizar o cookie ou do localStorage com o novo carrinho
    localStorage.setItem("carrinho", JSON.stringify(copiaCarrinho));
  
    console.log(JSON.stringify(carrinho));
  
  
    exibirCarrinho();
  }
  
  function exibirCarrinho() {
    const carrinhoTela = document.getElementById("carrinho-container");
    const carrinho = localStorage.getItem("carrinho")
      ? JSON.parse(localStorage.getItem("carrinho"))
      : [];
  
  
    
  
    //Apagar o carrinho carrinhoTela
  
    carrinhoTela.innerHTML = "";
    carrinhoTela.innerHTML += `
    <h1 class="carrinho-titulo" > meu carrinho</h1>
  `;
    carrinho.forEach((produto) => {
      carrinhoTela.innerHTML += ` 
      <div class="carrinho-container" style="display:flex;justify-content:center">
          <div class="carrinho-tela" style="display:flex"><div class='produto'>                                
                <img class="img-fluid" src='${produto.image}'  />
            <table>
    <tr>
      <th>Nome</th>
      <th>Preço</th>
      <th>Quantidade</th>
      <th>Tamanho</th>
      <th>Valor Total</th>
    </tr>  
    <tr>
    <td class="nome-produto">${produto.name}</td>
    <td>R$${produto.price}</td>
    <td><button class="btn-add" onclick="incrementar({
      id: '${produto.id}',
       nome: '${produto.name}',
  })">+</button>
    ${produto.quantity}  <button class="btn-remover"  onclick="remover({id:'${
        produto.id
      }', nome:'${produto.name}'})"> - </button></td>
    <td>M</td>
    <td>R$${produto.quantity * produto.price}</td>
   
  </tr>
    </table>
    `;
  });
  
  
    if (!carrinho.length) {
      carrinhoTela.innerHTML +=''
      carrinhoTela.innerHTML += `  
        <div class="container text-center mt-5 mx-auto">
        <h1 class="carrinho">Meu Carrinho</h1>
        <h1 class="carrinho1">Seu Carrinho está vazio.</h1>
        <span class="text">Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.</span>
        <div class="bloco">
        <button class="botao-r"><a class="link-carrinho" href='/produtos'>Escolher Produtos</a></button>
        </div></div>
      `;
    }
  }
  