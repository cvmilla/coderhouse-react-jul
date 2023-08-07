import React, { useState } from 'react';

function ItemCount() {
  
  const [carrinho, setCarrinho] = useState([1]);

    const adicionarItem = (item) => {
    if (!carrinho.includes(item)) {
      setCarrinho([...carrinho, item]);
    } else {
      alert('O item já está no carrinho.');
    }
  };

    const removerItem = (item) => {
    const novoCarrinho = carrinho.filter((carrinhoItem) => carrinhoItem !== item);
    setCarrinho(novoCarrinho);
  };

  return (
    <>
    <div>
      <h1>Meu Carrinho</h1>
      <ul>
        {carrinho.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removerItem(item)}>Remover</button>
          </li>
        ))}
      </ul>

      <h1>Produtos</h1>
      <ul>
        <li>
          Produto 1
          <button onClick={() => adicionarItem('Produto 1')}>Adicionar</button>
        </li>
        <li>
          Produto 2
          <button onClick={() => adicionarItem('Produto 2')}>Adicionar</button>
        </li>        
      </ul>
    </div>
    </>
  );
}

export default ItemCount();
