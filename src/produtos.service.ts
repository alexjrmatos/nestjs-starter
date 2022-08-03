import { Produto } from "./produto.model";

export class ProdutosService {
    produtos: Produto[] = [
        new Produto(1, "turma da monica jovem", 10),
        new Produto(2, "gibi turma da monica", 10),
        new Produto(3, "almanaque cebolinha", 10)
    ]

    obterTodos(): Produto[] {
        return this.produtos
    }
    
    obterUm(id: number): Produto {
        return this.produtos[0]
    }

    criar(produto: Produto) {
        this.produtos.push(produto)
    }

    alterar(produto: Produto): Produto {
        return produto
    }

    deleta(id: number) {
        this.produtos.pop()
    }
}