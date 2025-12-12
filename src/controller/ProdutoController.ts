import { interfaceProdutoRepository } from "../repository/interfaceProdutoRepository";
import { Produto } from "../model/Produto";

export class ProdutoController implements interfaceProdutoRepository {
    
    private listaProdutos: Array<Produto> = new Array<Produto>();
    numeroProdutos: number = 0;
    
    
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        this.numeroProdutos++;
        console.log(`Produto cadastrado com sucesso!`);
    }

    
    listar(): Produto[] {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
        return this.listaProdutos;
    }      
    buscarPorId(id: number): Produto | null {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
            return buscaProduto;
        } else {
            console.log(`Produto numero ${id} não encontrado!`);
            return null;
        }
    }
   
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarPorId(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`Produto atualizado com sucesso!`);
        } else {
            console.log(`Produto numero ${produto.id} não encontrado!`);
        }
    }
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);
        
        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(`O produto numero ${id} foi deletado com sucesso!`);
        } else {
            console.log(`Produto numero ${id} não encontrado!`);
        }
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id == id) {
                return produto;
            }
        }

        return null;

    }

}