import { Produto } from "../model/Produto";
import { interfaceProdutoRepository } from "./interfaceProdutoRepository";

export class ProdutoRepository implements interfaceProdutoRepository {
    private produtos: Produto[] = [];
    
    cadastar(produto: Produto): void {
        const existe = this.produtos.some(p => p.id === produto.id);
        if (existe) {
            throw new Error(`Produto com ID ${produto.id} já existe.`);
        }
        
    }
    listar(): Produto[] {
        return [...this.produtos];
        
    }
    buscarPorId(id: number): Produto | null {
        const encontrado = this.produtos.find(p => p.id === id);
        return encontrado ?? null;
        
    }
    atualizar(produto: Produto): void {
        const index = this.produtos.findIndex(p => p.id === produto.id);
        if (index === -1) {
            throw new Error(`Produto com ID ${produto.id} não encontrado.`);
        }

        this.produtos[index] = produto;
        
    }
    deletar(id: number): void {
        const index = this.produtos.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error(`Produto com ID ${id} não encontrado.`);
        }
        
        this.produtos.splice(index, 1);
        
    }
}